/**
 * Created by wdd on 2016/11/21.
 */
exports.winPackageNew =  function getMainJson(name='') {
    var returnJson = '';
    returnJson += '{\r\n';
    returnJson += '\t"name":"' + name + '",\r\n';
    returnJson += '\t"version":"1.0.0",\r\n';
    returnJson += '\t"main":"main.js",\r\n';
    returnJson += '\t"scripts:":{\r\n';
    returnJson += '\t\t"start":"electron .",\r\n';
    returnJson += '\t\t"build":"electron-packager . win7 --ignore=node_modules --platform=win32 --arch=ia32",\r\n';
    returnJson += '\t\t"package":"asar pack win7-win32-ia32/resources/app win7-win32-ia32/resources/electron.asar && rm -rf win7-win32-ia32/resources/app",\r\n';
    returnJson += '\t\t"unpack": "asar extract win7-win32-ia32/resources/electron.asar win7-win32-ia32/resources/electron.folder"\r\n';
    returnJson += '\t},\r\n';
    returnJson += '\t"author": "GitHub",\r\n';
    returnJson += '\t"license": "CC0-1.0",\r\n';
    returnJson += '\t"devDependencies": {\r\n';
    returnJson += '\t\t"electron-prebuilt": "1.4.4"\r\n';
    returnJson += '\t},\r\n';
    returnJson += '\t"dependencies": {\r\n';
    returnJson += '\t\t"asar": "^0.12.3"\r\n';
    returnJson += '\t}\r\n';
    returnJson += '}\r\n';

    return returnJson;
};