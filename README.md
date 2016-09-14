# iiot-hmac-request

Generate Hmac Authorization Header

# Example #

```
var IiotHmac = require('iiot-hmac-request');

var hmac = new IiotHmac({
  iiotAccessKeyId : "YOUR_KEY_ID",
  iiotSecretKey   : "YOUR_KEY_SECRET"
});

var headers = hmac.getHeaders();
// -->
// {
//    "Date":"Wed, 14 Sep 2016 06:01:46 GMT",
//    "Authorization":"IIOT e9264147b413746293e539868c8edff71715e1e3:zFkviwleO1MjN9U4y4RN5H9r9qP7d11axe7gDIgaVrM="
// }
```
