/**
 * Created by wdd on 2016/11/21.
 */
exports.generatePackageJson = function(path2,name,pluginType,cb){
    let winNewGenerate = require('./json_package_win7_new').winPackageNew;
    let winOldGenerate = require('./json_package_win7_old').winPackageOld;
    let generateFunc = pluginType == 0 ? winNewGenerate : winOldGenerate;
    let mainJson = generateFunc(name);
    let path = require('path');
    let fs = require('fs');
    let writePath = path.resolve(path2,'./resources/app/package.json');
    fs.writeFile(writePath,mainJson,function (err) {
        if(err){
            if(cb){
                cb(false);
            }
            console.log(err);
        } else {
            if(cb) {
                cb(true);
            }
        }
    });
};