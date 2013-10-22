var module = require('../../lib/businesslayer/delayTest.js');

describe("Asynchronous Methods'", function(){
	var fetchDone, r;
	it("Expect promise to be delayed for 1000 ms", function(){
		runs(function() {
	    	module.delay(1000).done(function(val){
	    		r = val;
	    		fetchDone = true;
	    	});
        });
        
        waitsFor(function() {
            return fetchDone;
        },  1000);
        runs(function () {
	      expect(fetchDone).toBeTruthy();
	    });
	});
});
