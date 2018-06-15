const {app, BrowserWindow} = require('electron');
const path = require('path');
  
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
  
    mainWindow.loadFile('index.html')

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