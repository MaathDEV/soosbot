const Jimp = require("jimp");

var vars = require('../Vars.js');
var cmd  = require('../Commands.js');
var mask = require('./Mask.js');

module.exports = {
  drake: function(event, client){
    if(cmd.command('drake', event)){
      if(cmd.testTwoMention(event)){
        mask.drake(event, event.mentions.users.array()[0].avatarURL, event.mentions.users.array()[1].avatarURL);
      } else {
        if(cmd.testMention(event)) {
        mask.drake(event, event.author.avatarURL, event.mentions.users.array()[0].avatarURL);
      } else {
        //cmd.error(need_mention)
        event.channel.send('Mencione alguem');
      }
    }
    }
  }
}
