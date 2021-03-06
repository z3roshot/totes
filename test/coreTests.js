var expect = require('../index').expect; 

var AssertionError = require('assertion-error');

describe('isTrue', function(){
	it('should throw when assertion fails', function(done){
		try{
			expect('test string').isTrue(assertion);
			throw new AssertionError('Assertion did not throw')
		}
		catch(e){
			done();
		}

		function assertion(val){
			return val === 'not test string';	
		}
	});

	it('should not throw when assertion succeeds', function(){
		expect('test string').isTrue(assertion);

		function assertion(val){
			return val === 'test string';
		}
	});
});

describe('isFalse', function(){
	it('should throw when assertion fails', function(done){
		try{
			expect('test string').isFalse(assertion);
			throw new AssertionError('Assertion did not throw')
		}
		catch(e){
			done();
		}

		function assertion(val){
			return val === 'test string';	
		}
	});

	it('should not throw when assertion succeeds', function(){
		expect('test string').isFalse(assertion);

		function assertion(val){
			return val === 'not test string';
		}
	});
});
