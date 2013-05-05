var module = require('./lib/businesslayer/businessTest.js'),
	delay = require('./lib/businesslayer/delayTest.js'),
	promise = require('./lib/businesslayer/promiseTests.js');

console.log(module.test().id);
delay.delayPromise();
promise.get();
