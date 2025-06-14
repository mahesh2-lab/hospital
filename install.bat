@echo off
setlocal

echo.
echo === Installing Required Software ===

:: Step 1: Check Node.js
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

:: Step 2: Download NSSM
if not exist "nssm.exe" (
    echo.
    echo Downloading NSSM...
    curl -L -o nssm.zip https://nssm.cc/release/nssm-2.24.zip
    powershell -Command "Expand-Archive -Path 'nssm.zip' -DestinationPath '.' -Force"

    if exist "nssm-2.24\win64\nssm.exe" (
        copy "nssm-2.24\win64\nssm.exe" . >nul
        echo NSSM is ready.
        del nssm.zip
    ) else (
        echo ❌ Failed to extract NSSM.
        pause
        exit /b
    )
) else (
    echo NSSM is already available.
)

echo.
echo ✅ Software installation completed.
pause
