const {app,BrowserWindow}=require('electron');
function createWindow(){
    var win=new BrowserWindow({fullscreen:false,show:false});
    
    //更改程序icon
    win.setIcon('images\\icon.ico')
    //优雅得载入页面
    //ready-to-show事件
    win.on('ready-to-show',()=>{
        win.show();
    })
    //子窗口使用模态窗口modal:true
    //var childwin=new BrowserWindow({parent:win,modal:true});

    win.loadFile('index.html');
    //childwin.loadFile('childindex.html')
    win.on('closed',()=>{
        console.log('closed');
        win=null; 
    })
}

app.on('ready',createWindow);