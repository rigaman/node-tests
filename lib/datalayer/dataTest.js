"use strict";
function mock() {
	return {name: "name test", id: 1212};
}
function save() {
	return mock();
}
function get() {
	return mock();
}
module.exports = {
	get: get,
	save: save
};