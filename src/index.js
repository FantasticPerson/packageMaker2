/**
 * Created by dandan.wu on 2016/11/8.
 */
exports.generatePackage = function generateMainJs(platformIndex,pluginType,pluginList,appName,url,savePath){
    let path = require('path');
    let cleanPath = require('./tools/cleanPath').cleanPath;
    let copyDir = require('./tools/copyDirectory').copyDirectory;
    let archive = require('./tools/archiveDirectory').archiveDirectory;
    let winNewPath = 'output/electron-lastest/win7-win32-ia32';
    let winOldPath = 'output/electron-older/win7-win32-ia32';
    let chromePath = 'output/chrome44';
    let generateMainJson = require('./tools/generateMainJson').generateMainJson;
    let btn = document.getElementById('generateBtn');
    let infoDiv = document.getElementById('progressInfo');
    let generateChromeJson = require('./tools/generateChromeJson').generateJson;
    let generatePackageJsonFile = require('./tools/genetatePackageJson').generatePackageJson;
    let renameExeName = require('./tools/renameExeFile').renameExeFile;
    btn.disabled = true;
    if(platformIndex == 0) {
        infoDiv.innerText = "1/4 复制内容...";
    } else {
        infoDiv.innerText = "1/2 复制内容...";
    }
    if(platformIndex == 0){
        var winPath = [winNewPath,winOldPath][pluginType];
        copyDir(winPath,path.resolve(savePath,'./'+appName),pluginList,generateJson);
    } else {
        copyDir(chromePath,path.resolve(savePath,'./'+appName),pluginList,generateChromeJson2);
    }
    function generateJson() {
        infoDiv.innerText = "2/4 生成配置文件...";
        console.log("pluginList:"+pluginList);
        var needFlash = pluginList.indexOf(0) >= 0;
        var needFingetPrint = pluginList.indexOf(0) >= 0;
        generateMainJson(pluginType,true,needFlash,needFingetPrint,url,path.resolve(savePath,'./'+appName),generatePackageJson);
    }
    function generateChromeJson2(){
        let needFingerPrint = pluginList.indexOf(1) >= 0;
        infoDiv.innerText = "2/2 生成配置文件...";
        generateChromeJson(needFingerPrint,url,path.resolve(savePath,'./'+appName),complete);
    }
    function generatePackageJson(){
        infoDiv.innerText = "3/4 生成package.json...";
        generatePackageJsonFile(path.resolve(savePath,'./'+appName),appName,pluginType,renameExeFile);
    }
    function renameExeFile(){
        infoDiv.innerText = "4/4 重命名可执行文件...";
        renameExeName(path.resolve(savePath,'./'+appName),appName,complete);
    }
    function complete(){
        infoDiv.innerText = '';
        btn.disabled = false;
        alert("生成成功");
    }
};