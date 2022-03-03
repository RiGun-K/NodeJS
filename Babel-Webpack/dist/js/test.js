"use strict";

var age = 10;
var prefix = "Hello";
var message = '';
if (age > 19) message = "".concat(prefix, ", Mr/Ms.");else message = "".concat(prefix, ", student.");
console.log(message);