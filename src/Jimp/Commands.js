const Jimp = require("jimp");

var vars = require('../Vars.js');
var cmd  = require('../Commands.js');
var mask = require('./Mask.js');

module.exports = {
  drake: function(event, client){
    if(cmd.command('drake', event)){
      // https://i.redd.it/cijkbpfu7eyy.jpg
      Jimp.read(event.mentions.users.array()[0].avatarURL, function (err, image) {
        image.resize(300, 300);
        Jimp.read(event.mentions.users.array()[1].avatarURL).then(function (foto) {
          foto.resize(300, 300);
          Jimp.read('https://i.imgur.com/1Kq6szx.png').then(function (lenna) {
              lenna.resize(600, 600)
                   .composite(lenna, 0, 0)
                   .composite(image, 300, 0)
                   .composite(foto, 300, 300)
                   .getBuffer(Jimp.MIME_PNG, (error, buffer) => {
                     event.channel.sendFile(buffer, 'teste.png')
                   });
          }).catch(function (err) {
              console.error('Jimp error: '+err);
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
