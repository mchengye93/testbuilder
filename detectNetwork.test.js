/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 /*
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  it('Throws an error so it fails', function() {
    throw new Error('Delete me!');
  });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num/2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});*/
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...
  var should = chai.should();

  it('has a prefix of 38 and a length of 14', function() {

    detectNetwork('38345678901234').should.equal('Diner\'s Club'); 
  });

  it('has a prefix of 39 and a length of 14', function() {
    detectNetwork('39345678901231').should.equal('Diner\'s Club');   
    
  });


});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 

  var should = chai.should();

  it('has a prefix of 34 and a length of 15', function() {
    detectNetwork('343456789012345').should.equal('American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    detectNetwork('373456789012345').should.equal('American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  
  var should = chai.should();


  it('has a prefix of 4 and a length of 13', function() {
    detectNetwork('4123456789012').should.equal('Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    detectNetwork('4123456789012345').should.equal('Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    detectNetwork('4123456789012345678').should.equal('Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  //var expect = chai.expect;
  var should = chai.should();

  it('has a prefix of 51 and a length of 16', function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });

  it('has a prefix of 52 and a length of 16', function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });

  it('has a prefix of 53 and a length of 16', function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });


  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  
  
  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });

  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  })

});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var should = chai.should();

  it('has a prefix of 6011 and a length of 16', function() {
    detectNetwork('6011123412341234').should.equal('Discover');
  });

  it('has a prefix of 6011 and a length of 19', function() {
    detectNetwork('6011123451234512345').should.equal('Discover');
  });

  it('has a prefix of 644 and a length of 16', function() {
    detectNetwork('6441234512345123').should.equal('Discover');
  });

  it('has a prefix of 644 and a length of 16', function() {
    detectNetwork('6441234512345123').should.equal('Discover');
  });

  it('has a prefix of 645 and a length of 16', function() {
    detectNetwork('6451234512345123').should.equal('Discover');
  });

  it('has a prefix of 646 and a length of 16', function() {
    detectNetwork('6461234512345123').should.equal('Discover');
  });

  it('has a prefix of 647 and a length of 16', function() {
    detectNetwork('6471234512345123').should.equal('Discover');
  });

  it('has a prefix of 648 and a length of 16', function() {
    detectNetwork('6481234512345123').should.equal('Discover');
  });

  it('has a prefix of 649 and a length of 16', function() {
    detectNetwork('6491234512345123').should.equal('Discover');
  });

  it('has a prefix of 644 and a length of 19', function() {
    detectNetwork('6441234512345123451').should.equal('Discover');
  });

  it('has a prefix of 645 and a length of 19', function() {
    detectNetwork('6451234512345123451').should.equal('Discover');
  });

  it('has a prefix of 646 and a length of 19', function() {
    detectNetwork('6461234512345123451').should.equal('Discover');
  });

  it('has a prefix of 647 and a length of 19', function() {
    detectNetwork('6471234512345123451').should.equal('Discover');
  });

  it('has a prefix of 648 and a length of 19', function() {
    detectNetwork('6481234512345123451').should.equal('Discover');
  });

  it('has a prefix of 649 and a length of 19', function() {
    detectNetwork('6491234512345123451').should.equal('Discover');
  });

  it('has a prefix of 65 and a length of 16', function() {
    detectNetwork('6512345123451234').should.equal('Discover');
  });

  it('has a prefix of 65 and a length of 19', function() {
    detectNetwork('6512345123451234512').should.equal('Discover');
  });
});


describe('Maestro', function() {
  var should = chai.should();

  it('has a prefix of 5018 and a length of 12', function() {
    detectNetwork('501812341234').should.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 13', function() {
    detectNetwork('5018123412341').should.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 14', function() {
    detectNetwork('50181234123412').should.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 15', function() {
    detectNetwork('501812341234123').should.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 16', function() {
    detectNetwork('5018123412341234').should.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 17', function() {
    detectNetwork('50181234123412341').should.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 18', function() {
    detectNetwork('501812341234123412').should.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 19', function() {
    detectNetwork('5018123412341234123').should.equal('Maestro');
  });


  it('has a prefix of 5020 and a length of 12', function() {
    detectNetwork('502012341234').should.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 13', function() {
    detectNetwork('5020123412341').should.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 14', function() {
    detectNetwork('50201234123412').should.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 15', function() {
   detectNetwork('502012341234123').should.equal('Maestro');
 });

  it('has a prefix of 5020 and a length of 16', function() {
    detectNetwork('5020123412341234').should.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 17', function() {
    detectNetwork('50201234123412341').should.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 18', function() {
    detectNetwork('502012341234123412').should.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 19', function() {
    detectNetwork('5020123412341234123').should.equal('Maestro');
  });

  //prefix 5038

  it('has a prefix of 5038 and a length of 12', function() {
    detectNetwork('503812341234').should.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 13', function() {
    detectNetwork('5038123412341').should.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 14', function() {
    detectNetwork('50381234123412').should.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 15', function() {
    detectNetwork('503812341234123').should.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 16', function() {
   detectNetwork('5038123412341234').should.equal('Maestro');
 });

  it('has a prefix of 5038 and a length of 17', function() {
    detectNetwork('50381234123412341').should.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 18', function() {
    detectNetwork('503812341234123412').should.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 19', function() {
    detectNetwork('5038123412341234123').should.equal('Maestro');
  });

//6304
it('has a prefix of 6304 and a length of 12', function() {
  detectNetwork('630412341234').should.equal('Maestro');
});

it('has a prefix of 6304 and a length of 13', function() {
  detectNetwork('6304123412341').should.equal('Maestro');
});

it('has a prefix of 6304 and a length of 14', function() {
  detectNetwork('63041234123412').should.equal('Maestro');
});

it('has a prefix of 6304 and a length of 15', function() {
  detectNetwork('630412341234123').should.equal('Maestro');
});

it('has a prefix of 6304 and a length of 16', function() {
  detectNetwork('6304123412341234').should.equal('Maestro');
});

it('has a prefix of 6304 and a length of 17', function() {
  detectNetwork('63041234123412341').should.equal('Maestro');
});

it('has a prefix of 6304 and a length of 18', function() {
  detectNetwork('630412341234123412').should.equal('Maestro');
});

it('has a prefix of 6304 and a length of 19', function() {
  detectNetwork('6304123412341234123').should.equal('Maestro');
});

});

describe('China UnionPay', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 

  var should = chai.should();

    //test 624-626

    for (var i = 624; i <= 626; i++){
    //var should = chai.should();

    var n = i+'1234512345123';
    it('has a prefix of '+ i + ' and a length of 16', function() {
    detectNetwork(n).should.equal('China UnionPay');
  });

    var num = i+'12345123451234';
    it('has a prefix of '+ i + ' and a length of 17', function() {
    detectNetwork(num).should.equal('China UnionPay');
  });

    var num2= i+'123451234512345'
       it('has a prefix of '+ i + ' and a length of 18', function() {
    detectNetwork(num2).should.equal('China UnionPay');

  });

    var num3= i+'1234512345123456'
       it('has a prefix of '+ i + ' and a length of 19', function() {
    detectNetwork(num3).should.equal('China UnionPay');

  });

}


  //test 622126- 622925

  for (var i = 622126; i <= 622925; i++){
   
    var num = i+'1234512345';
    it('has a prefix of '+ i + ' and a length of 16', function() {
    detectNetwork(num).should.equal('China UnionPay');
  });
  }

  for (var i = 622126; i <= 622925; i++){
    
    var num = i+'12345123451';
    it('has a prefix of '+ i + ' and a length of 17', function() {
    detectNetwork(num).should.equal('China UnionPay');
  });
  }

  for (var i = 622126; i <= 622925; i++){
   
    var num = i+'123451234512';
    it('has a prefix of '+ i + ' and a length of 18', function() {
    detectNetwork(num).should.equal('China UnionPay');
  });
  }

  for (var i = 622126; i <= 622925; i++){
    //var should = chai.should();
    var num = i+'1234512345123';
    it('has a prefix of '+ i + ' and a length of 19', function() {
    detectNetwork(num).should.equal('China UnionPay');
  });
  }



  


  //Test Scenario: 6282-6288
     for (var i = 6282; i <= 6288; i++){
    //var should = chai.should();
    var num = i+'123451234512';
    it('has a prefix of '+ i + ' and a length of 16', function() {
    detectNetwork(num).should.equal('China UnionPay');
  });
  }

    for (var i = 6282; i <= 6288; i++){
    //var should = chai.should();
    var num = i+'1234512345123';
    it('has a prefix of '+ i + ' and a length of 17', function() {
    detectNetwork(num).should.equal('China UnionPay');
  });
  }

    for (var i = 6282; i <= 6288; i++){
    //var should = chai.should();
    var num = i+'12345123451234';
    it('has a prefix of '+ i + ' and a length of 18', function() {
    detectNetwork(num).should.equal('China UnionPay');
  });
  }

    for (var i = 6282; i <= 6288; i++){
    //var should = chai.should();
    var num = i+'123451234512345';
    it('has a prefix of '+ i + ' and a length of 19', function() {
    detectNetwork(num).should.equal('China UnionPay');
  });
  }


  


});

describe('Switch', function() {
  //Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.

  var should = chai.should();

  it('has a prefix of 4903 and a length of 16', function() {
    detectNetwork('4903123412341234').should.equal('Switch');
  });

  it('has a prefix of 4903 and a length of 18', function() {
    detectNetwork('490312345123451234').should.equal('Switch');
  });

  it('has a prefix of 4903 and a length of 19', function() {
    detectNetwork('4903123451234512345').should.equal('Switch');
  });

  it('has a prefix of 4905 and a length of 16', function() {
    detectNetwork('4905123412341234').should.equal('Switch');
  });

  it('has a prefix of 4905 and a length of 18', function() {
    detectNetwork('490512345123451234').should.equal('Switch');
  });

  it('has a prefix of 4905 and a length of 19', function() {
    detectNetwork('4905123451234512345').should.equal('Switch');
  });

  it('has a prefix of 4911 and a length of 16', function() {
    detectNetwork('4911123412341234').should.equal('Switch');
  });

  it('has a prefix of 4911 and a length of 18', function() {
    detectNetwork('491112345123451234').should.equal('Switch');
  });

  it('has a prefix of 4911 and a length of 19', function() {
    detectNetwork('4911123451234512345').should.equal('Switch');
  });

  it('has a prefix of 4936 and a length of 16', function() {
    detectNetwork('4936123412341234').should.equal('Switch');
  });

  it('has a prefix of 4936 and a length of 18', function() {
    detectNetwork('493612345123451234').should.equal('Switch');
  });

  it('has a prefix of 4936 and a length of 19', function() {
    detectNetwork('4936123451234512345').should.equal('Switch');
  });

  //564182
  it('has a prefix of 564182 and a length of 16', function() {
    detectNetwork('5641821234512345').should.equal('Switch');
  });

  it('has a prefix of 564182 and a length of 18', function() {
    detectNetwork('564182123451234512').should.equal('Switch');
  });

  it('has a prefix of 564182 and a length of 19', function() {
    detectNetwork('5641821234512345123').should.equal('Switch');
  });

  //633110

  it('has a prefix of 633110 and a length of 16', function() {
    detectNetwork('6331101234512345').should.equal('Switch');
  });

  it('has a prefix of 633110 and a length of 18', function() {
    detectNetwork('633110123451234512').should.equal('Switch');
  });

  it('has a prefix of 633110 and a length of 19', function() {
    detectNetwork('6331101234512345123').should.equal('Switch');
  });

  //6333
  it('has a prefix of 6333 and a length of 16', function() {
    detectNetwork('6333123412341234').should.equal('Switch');
  });

  it('has a prefix of 6333 and a length of 18', function() {
    detectNetwork('633312345123451234').should.equal('Switch');
  });

  it('has a prefix of 6333 and a length of 19', function() {
    detectNetwork('6333123451234512345').should.equal('Switch');
  });


  //6759
  it('has a prefix of 6759 and a length of 16', function() {
    detectNetwork('6759123412341234').should.equal('Switch');
  });

  it('has a prefix of 6759 and a length of 18', function() {
    detectNetwork('675912345123451234').should.equal('Switch');
  });

  it('has a prefix of 6759 and a length of 19', function() {
    detectNetwork('6759123451234512345').should.equal('Switch');
  });



});

