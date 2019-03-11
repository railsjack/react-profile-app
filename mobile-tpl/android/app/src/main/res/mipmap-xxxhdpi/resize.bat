@echo off

call scale.bat -source ic_launcher.png -target ..\mipmap-hdpi\ic_launcher.png -max-height 72 -max-width 72 -keep-ratio no -force yes
call scale.bat -source ic_launcher_round.png -target ..\mipmap-hdpi\ic_launcher_round.png -max-height 72 -max-width 72 -keep-ratio no -force yes

call scale.bat -source ic_launcher.png -target ..\mipmap-ldpi\ic_launcher.png -max-height 36 -max-width 36 -keep-ratio no -force yes

call scale.bat -source ic_launcher.png -target ..\mipmap-mdpi\ic_launcher.png -max-height 48 -max-width 48 -keep-ratio no -force yes
call scale.bat -source ic_launcher_round.png -target ..\mipmap-mdpi\ic_launcher_round.png -max-height 48 -max-width 48 -keep-ratio no -force yes

call scale.bat -source ic_launcher.png -target ..\mipmap-xhdpi\ic_launcher.png -max-height 96 -max-width 96 -keep-ratio no -force yes
call scale.bat -source ic_launcher_round.png -target ..\mipmap-xhdpi\ic_launcher_round.png -max-height 96 -max-width 96 -keep-ratio no -force yes

call scale.bat -source ic_launcher.png -target ..\mipmap-xxhdpi\ic_launcher.png -max-height 144 -max-width 144 -keep-ratio no -force yes
call scale.bat -source ic_launcher_round.png -target ..\mipmap-xxhdpi\ic_launcher_round.png -max-height 144 -max-width 144 -keep-ratio no -force yes

