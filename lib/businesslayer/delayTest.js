var q = require("q");

function delay(time) {
	var d = q.defer();
    setTimeout(d.resolve, time);
    return d.promise;
}
function delayPromise() {
	console.log('here')
	q.when(delay(1000), function () {
	    console.log('delayed');
	});
}
module.exports = {
	delay: delay,
	delayPromise: delayPromise
}

