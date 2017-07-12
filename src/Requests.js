var vars = require('./Vars.js');
var command = require('./Commands.js');
var url = require('./requests/UrlRequests.js');
const Request = require("request");

module.exports = {
  init: function(event, client){
    url.meIrl(event, client);
    url.cats(event, client);
    url.reddit(event, client);
  }
}
