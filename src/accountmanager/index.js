var fs = require('fs')

var account = {};

var updateAccountSync = () => {
  var accountraw = JSON.parse(fs.readFileSync('./account.JSON', 'utf-8'))
}

updateAccountSync();

module.exports = {
  isLoggedIn: () => {return false}
}