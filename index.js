const {app,BrowserWindow}=require('electron');
function createWindow(){
    var win=new BrowserWindow({width:800,height:600});
    win.loadFile('index.html');
    win.on('closed',()=>{
        console.log('closed');
        win=null;
    })
}

app.on('ready',createWindow);