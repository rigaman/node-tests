"use strict";
var datalayer = require('../datalayer/dataTest.js');
function test() {
	return datalayer.get();
}
module.exports = {
	test: test
}