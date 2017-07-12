const Jimp = require("jimp");

var vars = require('../Vars.js');
var cmd  = require('../Commands.js');
var mask = require('./Mask.js');

module.exports = {
  drake: function(event, client){
    if(cmd.command('drake', event)){
      // https://i.redd.it/cijkbpfu7eyy.jpg
      Jimp.read(event.author.avatarURL, function (err, image) {
        image.resize(150, 150);
        Jimp.read('https://i.redd.it/cijkbpfu7eyy.jpg').then(function (lenna) {
            lenna.resize(600, 600)
                 .composite(lenna, 0, 0)
                 .composite(image, 300, 0)
                 .getBuffer(Jimp.MIME_PNG, (error, buffer) => {
                   event.channel.sendFile(buffer, 'teste.png')
                 });
        }).catch(function (err) {
            console.error('Jimp error: '+err);
        });
      }).catch(function (err) {
          console.error('Jimp error: '+err);
      });
    }
  }
}
