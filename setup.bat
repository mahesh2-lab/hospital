@echo off
setlocal

:: === CONFIGURATION ===
set "PROJECT_ZIP_URL=https://github.com/mahesh2-lab/hospital/archive/refs/heads/main.zip"
set "ZIP_NAME=hospital.zip"
set "PROJECT_FOLDER=hospital-main"
set "SERVICE_NAME=HospitalAppService"

echo.
echo === Configuring and Deploying Project ===

:: Step 1: Download project zip
echo Downloading project zip from GitHub...
curl -L -o %ZIP_NAME% %PROJECT_ZIP_URL%

:: Step 2: Extract project
echo Extracting project zip...
powershell -Command "Expand-Archive -Path '%ZIP_NAME%' -DestinationPath '.' -Force"

:: Step 3: Enter project folder
cd %PROJECT_FOLDER%

:: Step 4: Rename .env.example
if exist ".env.example" (
    echo Renaming .env.example to .env
    ren ".env.example" ".env"
) else (
    echo Warning: .env.example not found!
)

:: Step 5: Install dependencies
echo Installing npm dependencies...
call npm install

:: Step 6: Prisma generate
echo Generating Prisma client...
call npx prisma generate

cd ..

:: Step 7: Create Windows service with NSSM
echo Creating Windows service: %SERVICE_NAME%
nssm install %SERVICE_NAME% "cmd.exe" "/c npm start"
nssm set %SERVICE_NAME% AppDirectory "%CD%\%PROJECT_FOLDER%"
nssm set %SERVICE_NAME% Start SERVICE_AUTO_START
nssm start %SERVICE_NAME%

echo.
echo ✅ Project configured and running as service: %SERVICE_NAME%
pause
