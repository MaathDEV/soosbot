var vars = require('./Vars.js');
const Request = require("request");
module.exports = {
    command:  function (command, event) {
      if(event.content.startsWith(vars.prefix+command)){
        return true;
      } else {
        return false;
      }
    },
    meteCommand:  function (command, event) {
      if(event.author.id == vars.meteId && event.content.startsWith(vars.prefix+command)){
        return true;
      } else {
        return false;
      }
    },
    testMention: function(event){
      if(event.mentions.users.array()[0] == undefined){
        return false;
      } else {
        return true;
      }
    },
    redditRandomImage: function(link, event, client){
      Request(link, (error, response, body) => {
          if (!error && response.statusCode === 200) {
            var json = JSON.parse(body);
            var index = Math.floor(Math.random() * json.data.children.length);
            event.channel.send(`${json.data.children[index].data.title}  \`\`Por  /u/${json.data.children[index].data.author} em /r/${json.data.children[index].data.subreddit}\`\`\n` + json.data.children[index].data.preview.images[0].source.url).then(e => {
              e.react(client.emojis.get(vars.emoji.upvote));
              e.react(client.emojis.get(vars.emoji.downvote));
            });
          } else {
            return 'error';
            console.log('request error: '+error)
          }
        });
    },
}
