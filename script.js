const {remote} = require('electron');

var win = remote.getCurrentWindow();
var Close        = document.getElementById("close"),
    Maxim        = document.getElementById("maxim"),
    Minim        = document.getElementById("minim");

function close(){
  win.close();
}
function maximize(){
  win.isMaximized() ? win.unmaximize() : win.maximize();
}
function minimize(){
  win.minimize();
}
Close.addEventListener('click',close);
Maxim.addEventListener('click',maximize);
Minim.addEventListener('click',minimize);
