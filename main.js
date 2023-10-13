const { BrowserWindow, app } = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        width: 1280,
        height: 1280,
        backgroundColor: '#666666',
        webPreferences: {
            nodeIntegration: false,
            worldSafeExecuteJavaScript: true,
            contextIsolation: true,
            contentSecurityPolicy: "default-src 'self'; script-src 'self'",
        }
    });

    //win.setMenu(null);
    win.loadFile('index.html');
}

app.whenReady().then(createWindow);

