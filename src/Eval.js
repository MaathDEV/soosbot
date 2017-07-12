const Request = require("request");
const Discord = require("discord.js");
var vars = require('./Vars.js');
var command = require('./Commands.js');
module.exports = {
  evalCommand: function(event, client){
    function clean(text) {
      if (typeof(text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
      else
          return text;
    }
    if(command.meteCommand('eval', event)){
      var args = event.content.split(" ").slice(1);
      try {
        var code = args.join(" ");
        var evaled = eval(code);

        if (typeof evaled !== "string")
          evaled = require("util").inspect(evaled);

        event.channel.sendCode("xl", clean(evaled));
        event.react(client.emojis.get(vars.emoji.success));
      } catch (err) {
        event.channel.send(client.emojis.get(vars.emoji.success)+' Error:```xl\n' + clean(evaled) + '```');
        console.log('Command error: '+err);
        event.react(client.emojis.get(vars.emoji.error));
      }
    }
  }
}
