const index = require('electron');
const { app, BrowserWindow, Menu, ipcMain } = index;

let mainWindow;
// these settings enables html to have access to node API
const preferences = {
    nodeIntegration: true,
    contextIsolation: false,
    enableRemoteModule: true,
};

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        backgroundColor: '#FFF', // keep white when dev tool is open
        width: 1100,
        height: 864,
        webPreferences: preferences
    });
    // mainWindow.loadURL(`file://${__dirname}/index.html`);
    mainWindow.loadURL(`file://${__dirname}/song4.html`);

    const mainMenu = Menu.buildFromTemplate(menuTemplate);
    mainWindow.setMenu(mainMenu);
})

// ========================================
// ............... the menu ...............
// ========================================

const menuTemplate = [
    {
        label: 'Intro',
        submenu: [
            {
                label: 'Searchable Encryption',
                click() {
                    // TODO
                    console.log('TODO');
                }
            },
            {
                label: 'Song et al(2000)',
                click() {
                    // TODO
                    console.log('TODO');
                }
            }
        ]
    },
    {
        label: 'Scheme',
        submenu: [
            {
                label: 'Song et al(2000)',
                click() {
                    mainWindow.loadURL(`file://${__dirname}/temp.html`);
                }
            }, {
                label: 'song2(temp)',
                click() {
                    mainWindow.loadURL(`file://${__dirname}/song2.html`);
                }
            }
        ]
    },
    {
        role: 'viewMenu'
    }
];


