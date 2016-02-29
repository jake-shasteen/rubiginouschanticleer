var expect = require( 'expect.js' );
var Vote = require( '../../../server/votes/votes.js' );

describe( 'Vote', function() {
  describe( 'addVote', function () {
    it( 'should be a function', function () {
      expect( Vote.addVote ).to.be.a( 'function' );
    });
  });

  describe( 'getSessMovieVotes', function() {
    it( 'should be a function', function() {
      expect( Vote.getSessMovieVotes ).to.be.a( 'function' );
    });
  });
});
