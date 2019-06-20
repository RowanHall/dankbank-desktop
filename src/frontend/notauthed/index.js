const remote = require('electron').remote;
document.getElementById("close").addEventListener("click", function (e) {
  remote.getCurrentWindow().close();
}); 

document.getElementById('login').addEventListener("click", function (e) {
  document.location.href += "/../../login/index.html"
})