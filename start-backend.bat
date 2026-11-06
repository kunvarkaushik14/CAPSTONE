@echo off
title NEXORA 3.0 - Spring Boot Backend (Port 8085)
echo =====================================================================
echo   NEXORA 3.0 Spring Boot Backend Runner
echo   Environment: Java 17+ / Gradle 9+
echo   Target Port: 8085
echo =====================================================================
echo.
cd /d "%~dp0springboot-backend"

:: Check if port 8085 is currently occupied and notify user
netstat -ano | findstr :8085 > nul
if %errorlevel% equ 0 (
  echo [INFO] Port 8085 is in use. Attempting to run via gradlew...
)

echo Starting Spring Boot via gradlew.bat bootRun --no-daemon...
call gradlew.bat bootRun --no-daemon
if %errorlevel% neq 0 (
  echo.
  echo [FALLBACK] Attempting run with gradle bootRun...
  call gradle bootRun --no-daemon
)
pause

