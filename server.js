var module = require('./lib/businesslayer/businessTest.js'),
	delay = require('./lib/businesslayer/delayTest.js');

console.log(module.test().id);
delay.delayPromise();