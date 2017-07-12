const Jimp = require("jimp");

var vars = require('../Vars.js');
var cmd  = require('../Commands.js');
module.exports = {
  maskImg(back, mask, event){
    Jimp.read(mask, function (err, image) {
      image.resize(600, 600);
      Jimp.read(back).then(function (lenna) {
          lenna.resize(600, 600)
               .composite(lenna, 0, 0)
               .composite(image, 0, 0)
               .getBuffer(Jimp.MIME_PNG, (error, buffer) => {
                 event.channel.sendFile(buffer, 'teste.png')
               });
      }).catch(function (err) {
          console.error('Jimp error: '+err);
      });
  }).catch(function (err) {
      console.error('Jimp error: '+err);
  });
  },
}
