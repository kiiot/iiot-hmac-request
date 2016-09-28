var crypto = require("crypto");
var d = new Date().toUTCString();

var generateHmac = function(data, iiotSecretKey, algorithm, encoding) {
  encoding = encoding || "base64";
  algorithm = algorithm || "sha256";

  //console.log(crypto.createHmac(algorithm, iiotSecretKey).update(data).digest(encoding));
  return crypto.createHmac(algorithm, iiotSecretKey).update(data).digest(encoding);
}

module.exports = function(config) {

  var options = {
    "headers" : {
      "Date" : d,
      "Authorization" : "IIOT " + config.iiotAccessKeyId +
        ":" + generateHmac(d, config.iiotSecretKey)
    }
  };

  this.getHeaders = function() {
    return options.headers;
  }

  return this;
}
