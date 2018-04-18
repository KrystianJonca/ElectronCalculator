const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');
  
function createWindow () {
    let mainWindow = new BrowserWindow({
        width: 310,
        height: 435,
        show: false,
        maximizable: false,
        autoHideMenuBar: true,
        title: 'Calculator',
        resizable: false,
        icon: path.join(__dirname,"icon/icon.ico")
    });
  
    mainWindow.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
    }));

    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
    });

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}
  
app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});