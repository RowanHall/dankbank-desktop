var fs = require('fs')
module.exports = {
  getuuid: () => {
    return (JSON.parse(fs.readFileSync('./account.JSON', 'utf-8')).uuid)
  }
}