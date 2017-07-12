const Discord = require("discord.js");
const bot = new Discord.Client();

var vars = require('./src/Vars.js');
var cmd  = require('./src/Commands.js');
var app  = require('./src/Init.js');
var req  = require('./src/Requests.js');

bot.on('message', message => {

  app.init(message, bot);
  req.init(message, bot);
  if(cmd.command('emojiurl', message)){
    var args = message.content.split(" ").slice(1);
    message.channel.send('emoji '+args.url);
  }
});

bot.login(vars.token);
