var vars = require('../Vars.js');
var cmd = require('../Commands.js');
module.exports = {
    meIrl: function(event, client){
      if(cmd.command('me_irl', event)){
        cmd.redditRandomImage('https://www.reddit.com/r/me_irl.json?limit=100', event, client)
      }
    },
    cats: function(event, client){
      if(cmd.command('gato', event)){
        cmd.redditRandomImage('https://www.reddit.com/r/cat.json?limit=100', event, client)
      }
    },
    reddit: function(event, client){
      if(cmd.meteCommand('subreddit', event)){
        var args = event.content.split(" ").slice(1);
        cmd.redditRandomImage(`https://www.reddit.com/r/${args}.json?limit=100`, event, client)
      }
    },
}

for (var i = 0; i < vars.emoji.length; i++) {
  vars.emoji[i];
}
