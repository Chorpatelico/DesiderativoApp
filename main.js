const { app, BrowserWindow } = require('electron');
let win;
app.whenReady().then(() => {
  win = new BrowserWindow({
    width: 1400, height: 900,
    webPreferences: { nodeIntegration: true, contextIsolation: false }
  });
  win.loadFile('index.html');
  win.setMenuBarVisibility(false);
});
app.on('window-all-closed', () => process.platform !== 'darwin' ? app.quit() : null);