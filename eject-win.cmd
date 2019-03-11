@echo off

del /s /q android
rd /s /q android
del /s /q ios
rd /s /q ios

react-native eject
react-native link
link-assets.cmd

