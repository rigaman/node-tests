"use strict";
function mock() {
	return {name: "name mock", id: 124};
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