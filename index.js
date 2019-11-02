//www.npmjs.com/package/jsonwebtokens
https: var jwt = require("jsonwebtoken");
var privateKey = "shhhhh";

// jwt.sign(payload, secretOrPrivateKey, [options, callback])

var token = jwt.sign({ foo: "bar" }, privateKey, {
  algorithm: "HS256",
  expiresIn: "1h"
});

console.log("TOKEN: ", token);

var decoded = jwt.verify(token, privateKey, {
  algorithms: ["HS256"]
  //  maxAge:
  // ignoreExpiration:
});
console.log("DECODED: ", decoded);
