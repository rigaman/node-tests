/*jslint node:true es5:true*/
var coffee,
	isVerbose,
	jasmine,
	key,
	showColors,
	sys,
	i,
	len,
	jasmine = require('jasmine-node'),
	//global.define = require('requirejs'),
	fs = require("fs"),
	sys = require('sys');

for (i = 0, len = jasmine.length; i < len; i++) {
	key = jasmine[i];
	global[key] = jasmine[key];
}

isVerbose = true;
showColors = true;
coffee = true;

process.argv.forEach(function(arg) {
	switch (arg) {
		case '--color':
			return showColors = true;
		case '--noColor':
			return showColors = false;
		case '--verbose':
			return isVerbose = true;
		case '--coffee':
			return coffee = true;
	}
});

jasmine.executeSpecsInFolder(__dirname + '/specs', (function(runner, log) {
	if (runner.results().failedCount === 0) {
		process.exit(0);
	} else {
		process.exit(1);
	}
}), isVerbose, showColors);
