@echo off

del /S /Q /F android
rd /S /Q android
del /S /Q ios
rd /S /Q ios

react-native eject
react-native link
link-assets.cmd

