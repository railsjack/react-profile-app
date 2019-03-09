@echo off

call scale.bat -source Default-Portrait-736h@3x.png -target Default-568h@2x.png  -max-height 1136 -max-width 640 -keep-ratio no -force yes
call scale.bat -source Default-Portrait-736h@3x.png -target Default-667h@2x.png  -max-height 1134 -max-width 750 -keep-ratio no -force yes
call scale.bat -source Default-Portrait-736h@3x.png -target Default-Portrait.png  -max-height 1024 -max-width 768 -keep-ratio no -force yes
call scale.bat -source Default-Portrait-736h@3x.png -target Default-Portrait@2x.png  -max-height 2048 -max-width 1536 -keep-ratio no -force yes
call scale.bat -source Default-Portrait-736h@3x.png -target Default@2x.png  -max-height 960 -max-width 640 -keep-ratio no -force yes

call scale.bat -source Default-Landscape@2x.png -target Default-Landscape-736h@3x.png  -max-height 1242 -max-width 2208 -keep-ratio no -force yes
call scale.bat -source Default-Landscape@2x.png -target Default-Landscape.png  -max-height 768 -max-width 1024 -keep-ratio no -force yes
