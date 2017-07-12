var vars = require('./Vars.js');
var command = require('./Commands.js');
var eval = require('./Eval.js');
var jimp = require('./Jimp/Commands.js');

module.exports = {
  init: function(event, client){
    eval.evalCommand(event, client);
    jimp.drake(event, client);
  }
}
