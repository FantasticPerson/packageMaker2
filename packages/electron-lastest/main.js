const electron = require('electron');
const {globalShortcut} = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

function createWindow() {
    const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize;
    mainWindow = new BrowserWindow({
        width, height, webPreferences: {
            nodeIntegration: false,
            plugins: true
        }
    });
    mainWindow.loadURL('https://www.baidu.com');
    mainWindow.webContents.openDevTools();
    mainWindow.on('closed', function () {
        mainWindow = null;
    });

    function registerShotCut(){
        var ret = globalShortcut.register('f5', function () {
            var win = BrowserWindow.getFocusedWindow();
            if (win) {
                var contents = win.webContents;
                contents.reload();
            }
        });
        var ret2 = globalShortcut.register('ctrl+r', function () {
            var win = BrowserWindow.getFocusedWindow();
            if (win) {
                var contents = win.webContents;
                contents.reloadIgnoringCache();
            }
        });
    }

    mainWindow.on('blur', function() {
        let win = BrowserWindow.getFocusedWindow();
        if(win) return;
        globalShortcut.unregisterAll();
    });

    mainWindow.on('focus', function() {
        registerShotCut();
    });

    registerShotCut();
}

app.commandLine.appendSwitch('ppapi-flash-path', __dirname + '/pepflashplayer.dll');
app.commandLine.appendSwitch('ppapi-flash-version', '17.0.0.169');
app.commandLine.appendSwitch('--enable-npapi');

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow()
    }
});




