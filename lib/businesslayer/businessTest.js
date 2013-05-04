"use strict";
var datalayer = require('../datalayer/dataTest.js');
//console.log(datalayer);
function test() {
	return datalayer.get();
}
module.exports = {
	test: test
}