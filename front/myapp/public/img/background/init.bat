@echo off
set nombre=1
:Boucle
if not exist " (%nombre%).png" goto end
set /a nbr2=%nombre%-1
echo "(%nombre%).png in %nbr2%.png"
copy " (%nombre%).png" "%nbr2%.png"
set /a nombre+=1
goto Boucle
:end
pause