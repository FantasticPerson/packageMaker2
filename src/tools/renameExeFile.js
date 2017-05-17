/**
 * Created by wdd on 2016/11/21.
 */
exports.renameExeFile = function (path2,name,cb) {
    let path = require('path');
    let fs = require('fs');
    fs.rename(path.resolve(path2,'./win7.exe'),path.resolve(path2,('./'+name+'.exe')),function () {
        cb();
    })
};