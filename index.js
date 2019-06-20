const { app, BrowserWindow } = require('electron')
const fs = require('fs');
const account = require('./src/accountmanager/index.js')

let win

function createWindow () {
  win = new BrowserWindow({
    width: 1185,
    height: 750,
    webPreferences: {
      nodeIntegration: true
    },
    minWidth: 1185,
    minHeight: 750,
    frame: false
  })

  if(account.isLoggedIn()) {
    win.loadFile(__dirname + "/src/frontend/home/index.html")
  } else {
    win.loadFile(__dirname + "/src/frontend/notauthed/index.html")
  }

  win.webContents.openDevTools()

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})