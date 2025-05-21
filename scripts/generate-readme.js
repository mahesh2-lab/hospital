import axios from "axios";
import fs from "fs";
import { execSync } from "child_process";

const HF_API_TOKEN = process.env.HF_API_TOKEN;
const MODEL = "bigscience/bloomz-560m"; // Free & light model

// Get last commit and changed files
const commitMessage = execSync("git log -1 --pretty=%B").toString().trim();
const filesChanged = execSync(
  "git diff-tree --no-commit-id --name-only -r HEAD"
)
  .toString()
  .trim()
  .split("\n");

// Collect code
let codeSummary = "";
for (const file of filesChanged) {
  if (file.endsWith(".js") || file.endsWith(".py") || file.endsWith(".ts")) {
    const code = fs.readFileSync(file, "utf-8");
    codeSummary += `\nFile: ${file}\nCode:\n${code.substring(0, 700)}\n`; // Truncated for token limits
  }
}

const prompt = `
You are a professional developer. Based on the following commit and code, write a clean, professional README.md.

Commit Message:
${commitMessage}

Code:
${codeSummary}

README:
`;

async function generateReadme() {
  try {
    const response = await axios.post(
      `https://api-inference.huggingface.co/models/${MODEL}`,
      { inputs: prompt },
      {
        headers: {
          Authorization: `Bearer ${HF_API_TOKEN}`,
          "Content-Type": "application/json",
        },
        timeout: 30000,
      }
    );

    const result =
      response.data[0]?.generated_text || "README generation failed.";

    fs.writeFileSync("README.md", result);
    console.log("README.md generated successfully!");
  } catch (error) {
    console.error("Error generating README:", error.message);
  }
}

generateReadme();
