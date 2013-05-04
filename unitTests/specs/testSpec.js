var injector = require('../injector.js');
var module = injector('./lib/businesslayer/businessTest.js', {
   '../datalayer/dataTest.js' : './lib/datamock/dataTest.js',
});
describe("Welcome to jasmine unit tests", function() {

	describe("This is test to test test harness", function(){
		it("Expect test to be equal 124", function(){
			var test = module.test();
			expect(test.id).toBe(124);
		});

	});
});