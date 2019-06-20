const remote = require('electron').remote;
document.getElementById("close").addEventListener("click", function (e) {
   remote.getCurrentWindow().close();
}); 