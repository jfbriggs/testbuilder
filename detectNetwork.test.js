/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 8, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';

/*

describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 

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

})

*/

describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {  
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if (isTrue) {
      throw new Error('Test failed');
    }
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') !== 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') !== 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;

  it('has a prefix of 51 and a length of 16', function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });

  it('has a prefix of 52 and a length of 16', function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });

  it('has a prefix of 52 and a length of 16', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  
  it('has a prefix of 54 and a length of 16', function() {
    expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
  });

  it('has a prefix of 55 and a length of 16', function() {
    expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
  });
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!

  var expect = chai.expect;

  it('has a prefix of 6011 and a length of 16', function() {
    expect(detectNetwork('6011950239485203')).to.equal('Discover');
  });

  it('has a prefix of 65 and a length of 16', function() {
    expect(detectNetwork('6592348572934602')).to.equal('Discover');
  });

  it('has a prefix of 6011 and a length of 19', function() {
    expect(detectNetwork('6011934850239456203')).to.equal('Discover');
  });

  it('has a prefix of 65 and a length of 19', function() {
    expect(detectNetwork('6592348572934602462')).to.equal('Discover');
  });

  for (var prefix = 644; prefix <= 649; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        expect(detectNetwork(prefix + '3957238456023')).to.equal('Discover');
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        expect(detectNetwork(prefix + '3940239583452034')).to.equal('Discover');
      });
    })(prefix)
  }

});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  var expect = chai.expect;
  
  for (var length = 12; length <= 19; length++) {
    (function(length) {
      it('has a prefix of 5018 and a length of ' + length, function() {
        expect(detectNetwork("5018" + "1".repeat(length - 4))).to.equal('Maestro');
      });

      it('has a prefix of 5020 and a length of ' + length, function() {
        expect(detectNetwork("5020" + "1".repeat(length - 4))).to.equal('Maestro');
      });

      it('has a prefix of 5038 and a length of ' + length, function() {
        expect(detectNetwork("5038" + "1".repeat(length - 4))).to.equal('Maestro');
      });

      it('has a prefix of 6304 and a length of ' + length, function() {
        expect(detectNetwork("6304" + "1".repeat(length - 4))).to.equal('Maestro');
      });

    })(length)
  }

});

describe('China UnionPay', function() {
  var expect = chai.expect;

  for (var prefix = 622126; prefix <= 622925; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        expect(detectNetwork(prefix + '2930529384')).to.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 17', function() {
        expect(detectNetwork(prefix + '29305293844')).to.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 18', function() {
        expect(detectNetwork(prefix + '293052938462')).to.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        expect(detectNetwork(prefix + '2930529384273')).to.equal('China UnionPay');
      });
    })(prefix)
  }

  for (var prefix = 624; prefix <= 626; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        expect(detectNetwork(prefix + '2930534629384')).to.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 17', function() {
        expect(detectNetwork(prefix + '29305293453844')).to.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 18', function() {
        expect(detectNetwork(prefix + '293052925338462')).to.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        expect(detectNetwork(prefix + '2930529363484273')).to.equal('China UnionPay');
      });
    })(prefix)
  }

  for (var prefix = 6282; prefix <= 6288; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        expect(detectNetwork(prefix + '293053469384')).to.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 17', function() {
        expect(detectNetwork(prefix + '2930593453844')).to.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 18', function() {
        expect(detectNetwork(prefix + '29305225338462')).to.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        expect(detectNetwork(prefix + '293052936484273')).to.equal('China UnionPay');
      });
    })(prefix)
  }

});

describe('Switch', function() {
  var expect = chai.expect;

  it('has a prefix of 4903 and a length of 16', function() {
    expect(detectNetwork('4903923845629345')).to.equal('Switch');
  });

  it('has a prefix of 4905 and a length of 16', function() {
    expect(detectNetwork('4905923845629345')).to.equal('Switch');
  });

  it('has a prefix of 4911 and a length of 16', function() {
    expect(detectNetwork('4911923845629345')).to.equal('Switch');
  });

  it('has a prefix of 4936 and a length of 16', function() {
    expect(detectNetwork('4936923845629345')).to.equal('Switch');
  });

  it('has a prefix of 564182 and a length of 16', function() {
    expect(detectNetwork('5641823845629345')).to.equal('Switch');
  });

  it('has a prefix of 633110 and a length of 16', function() {
    expect(detectNetwork('6331103845629345')).to.equal('Switch');
  });

  it('has a prefix of 6333 and a length of 16', function() {
    expect(detectNetwork('6333923845629345')).to.equal('Switch');
  });

  it('has a prefix of 6759 and a length of 16', function() {
    expect(detectNetwork('6759923845629345')).to.equal('Switch');
  });

  it('has a prefix of 4903 and a length of 17', function() {
    expect(detectNetwork('49039238456293345')).to.equal('Switch');
  });

  it('has a prefix of 4905 and a length of 17', function() {
    expect(detectNetwork('49059238456293435')).to.equal('Switch');
  });

  it('has a prefix of 4911 and a length of 17', function() {
    expect(detectNetwork('49119238456329345')).to.equal('Switch');
  });

  it('has a prefix of 4936 and a length of 17', function() {
    expect(detectNetwork('49369238545629345')).to.equal('Switch');
  });

  it('has a prefix of 564182 and a length of 17', function() {
    expect(detectNetwork('56418238645629345')).to.equal('Switch');
  });

  it('has a prefix of 633110 and a length of 17', function() {
    expect(detectNetwork('63311038452629345')).to.equal('Switch');
  });

  it('has a prefix of 6333 and a length of 17', function() {
    expect(detectNetwork('63339238456239345')).to.equal('Switch');
  });

  it('has a prefix of 6759 and a length of 17', function() {
    expect(detectNetwork('67599238456259345')).to.equal('Switch');
  });

  it('has a prefix of 4903 and a length of 19', function() {
    expect(detectNetwork('4903923853456293345')).to.equal('Switch');
  });

  it('has a prefix of 4905 and a length of 19', function() {
    expect(detectNetwork('4905923845629353435')).to.equal('Switch');
  });

  it('has a prefix of 4911 and a length of 19', function() {
    expect(detectNetwork('4911923845653329345')).to.equal('Switch');
  });

  it('has a prefix of 4936 and a length of 19', function() {
    expect(detectNetwork('4936923854562539345')).to.equal('Switch');
  });

  it('has a prefix of 564182 and a length of 19', function() {
    expect(detectNetwork('5641823864562953345')).to.equal('Switch');
  });

  it('has a prefix of 633110 and a length of 19', function() {
    expect(detectNetwork('6331103845262935345')).to.equal('Switch');
  });

  it('has a prefix of 6333 and a length of 19', function() {
    expect(detectNetwork('6333923845625339345')).to.equal('Switch');
  });

  it('has a prefix of 6759 and a length of 19', function() {
    expect(detectNetwork('6759923845625359345')).to.equal('Switch');
  });

});
