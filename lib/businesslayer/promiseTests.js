var q = require("q");


function step1() {
	var x = 12;
	return x;
}
function step2(val) {
	var y = 2;
	return val + y;
}
function step3(val) {
	var z = 3;
	return val + z;
}
function step4(val) {
	var w = 4;
	return val + w;
}
function currying() {

}
function get() {
	q.when(step1())
		.then(function(val){
			console.log(val);
			var deferred = q.defer();
			deferred.resolve(val);
			return deferred.promise;
		}, function(err){
			return deferred.reject(err);
		});
}
module.exports = {
	get: get,
	currying: currying
};