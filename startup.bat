@echo off
setlocal

:: === CONFIGURATION ===
set "PROJECT_ZIP_URL=https://github.com/mahesh2-lab/hospital/archive/refs/heads/main.zip"
set "ZIP_NAME=project.zip"
set "PROJECT_FOLDER=HMS"  :: Replace with actual folder name after unzip
set "SERVICE_NAME=HMSService"
set "NSSM_ZIP_URL=https://nssm.cc/release/nssm-2.24.zip"
set "NSSM_DIR=nssm-2.24"

:: === STEP 1: Check Node.js ===
echo Checking for Node.js...
where node >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo Node.js not found. Installing...
    curl -o node-installer.msi https://nodejs.org/dist/v22.16.0/node-v22.16.0-x64.msi
    msiexec /i node-installer.msi /quiet /norestart
    timeout /t 20 >nul
    del node-installer.msi
) else (
    echo Node.js is already installed.
)

:: === STEP 2: Download project zip ===
echo.
echo Downloading project zip...
curl -L -o %ZIP_NAME% %PROJECT_ZIP_URL%

:: === STEP 3: Extract the project ===
echo.
echo Extracting zip file...
powershell -Command "Expand-Archive -Path '%ZIP_NAME%' -DestinationPath '.' -Force"

:: === STEP 4: Go into project folder ===
cd %PROJECT_FOLDER%

:: === STEP 5: Rename .env.example to .env ===
if exist ".env.example" (
    echo Renaming .env.example to .env
    ren ".env.example" ".env"
) else (
    echo Warning: .env.example not found!
)

:: === STEP 6: Install dependencies ===
echo.
echo Installing npm dependencies...
call npm install

:: === STEP 7: Prisma generate ===
echo.
echo Generating Prisma client...
call npx prisma generate

cd ..

:: === STEP 8: Download and setup NSSM ===
if not exist "nssm.exe" (
    echo.
    echo Downloading NSSM...
    curl -L -o nssm.zip %NSSM_ZIP_URL%
    powershell -Command "Expand-Archive -Path 'nssm.zip' -DestinationPath '.' -Force"

    if exist "%NSSM_DIR%\win64\nssm.exe" (
        copy "%NSSM_DIR%\win64\nssm.exe" . >nul
        echo NSSM downloaded and ready.
    ) else (
        echo Failed to extract NSSM.
        pause
        exit /b
    )

    del nssm.zip
)

:: === STEP 9: Create service ===
echo.
echo Creating Windows service "%SERVICE_NAME%"...

nssm install %SERVICE_NAME% "cmd.exe" "/c npm start"
nssm set %SERVICE_NAME% AppDirectory "%CD%\%PROJECT_FOLDER%"
nssm set %SERVICE_NAME% Start SERVICE_AUTO_START
nssm start %SERVICE_NAME%

echo.
echo ✅ Service '%SERVICE_NAME%' installed and started.
echo 🔁 It will run automatically in the background on startup.
pause
