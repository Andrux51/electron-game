var app = require('app');

var BrowserWindow = require('browser-window');

require('crash-reporter').start();

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
    // On OSX it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform != 'darwin') {
        app.quit();
    }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {
    var gameScreen = require('screen');
    var size = gameScreen.getPrimaryDisplay().workAreaSize;

    // API url: http://electron.atom.io/docs/v0.33.0/api/browser-window/
    var windowOptions = {
        "width": size.width,
        "height": size.height,
        "fullscreen": true,
        "title": app.getName(),
        "accept-first-mouse": false,
        "auto-hide-menu-bar": true,
        "disable-auto-hide-cursor": true
    };

    mainWindow = new BrowserWindow(windowOptions);

    mainWindow.loadUrl('file://' + __dirname + '/index.html');

    // mainWindow.openDevTools();

    mainWindow.on('closed', function() {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });
});
