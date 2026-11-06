@echo off
title NEXORA 3.0 - React Frontend (Vite)
echo =====================================================================
echo   NEXORA 3.0 React 19 Frontend Runner
echo   Environment: Vite / React
echo   Target URL: http://localhost:5173
echo =====================================================================
echo.
cd /d "%~dp0frontend"
npm run dev
pause

