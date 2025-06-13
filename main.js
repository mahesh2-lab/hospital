// main.js
const { app } = require('electron');
const path = require('path');
const childProcess = require('child_process');

let backend;

app.whenReady().then(() => {
  backend = childProcess.spawn('node', [path.join(__dirname, 'src', 'app.js')], {
    shell: true,
    stdio: 'inherit'
  });

  backend.on('close', () => {
    console.log('Backend process closed');
  });
});

app.on('window-all-closed', () => {
  if (backend) backend.kill();
  app.quit();
});
