const Jimp = require("jimp");

var vars = require('../Vars.js');
var cmd  = require('../Commands.js');
module.exports = {
  drake: function(event, p1, p2){
    Jimp.read(p1, function (err, image) {
      image.resize(300, 300);
      Jimp.read(p2).then(function (foto) {
        foto.resize(300, 300);
        Jimp.read('https://i.imgur.com/JPZWgLQ.png').then(function (lenna) {
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
  },
  ytvideo: function(event, profile, video, title, name){
    Jimp.read(profile).then(function (prof) {
            prof.resize(48, 48);
            Jimp.read(video).then(function (image) {
                    image.resize(640, 360);
                    Jimp.loadFont( Jimp.FONT_SANS_16_BLACK ).then(function (font) {
                    Jimp.read('https://i.imgur.com/w5ItKu7.png').then(function (lenna) {
                        lenna.resize(655, 538)
                             .composite(lenna, 0, 0)
                             .composite(image, 8, 11)
                             .composite(prof, 23, 430);
                             lenna.print(font, 25, 395, title);
                             lenna.print(font, 82, 431, name);
                             lenna.getBuffer(Jimp.MIME_PNG, (error, buffer) => {
                               event.channel.sendFile(buffer, 'video.png')
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
        }).catch(function (err) {
            console.error('Jimp error: '+err);
        });
  }
}
