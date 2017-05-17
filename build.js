/**
 * Created by wdd on 2017/5/17.
 */
var electronPacker  = require('electron-packager');
var gulp = require('gulp');
var path = require('path');


var dir = path.resolve('./packages/electron-lastest');

function buildElectron(originPath,outputPath,version,ignore) {
    return new Promise(function (resolve,reject) {
            electronPacker(
                {
                    dir: originPath,
                    out: outputPath,
                    platform: 'win32',
                    arch: 'ia32',
                    electronVersion:version,
                    ignore: ignore ||　[/.DS_Store/, /.git/, /node_modules/, /build/]
                }, function (err, appPaths) {

                    if (err) {
                        setTimeout(function(){
                            reject(err);
                        },500);

                    } else {
                        setTimeout(function(){
                            resolve();
                        },500);

                    }
                });
        }
    );
}

// var task1 = buildElectron(path.resolve('./packages/electron-lastest'),path.join('./','output/electron-lastest'));
// var task2 = buildElectron(path.resolve('./packages/electron-older'),path.join('./','output/electron-older'));

Promise.resolve(true)
    .then(function(){
        return buildElectron(path.resolve('./packages/electron-lastest'),path.join('./','output/electron-lastest'),'1.4.4');
    })
    .then(function(){
        return buildElectron(path.resolve('./packages/electron-older'),path.join('./','output/electron-older'),'0.31.2');
    })
    .then(function(){
        return buildElectron(path.resolve('./'),path.join('./','build'),'1.4.4',[/.DS_Store/, /.git/, /build/,/packages/,/.git/]);
    })