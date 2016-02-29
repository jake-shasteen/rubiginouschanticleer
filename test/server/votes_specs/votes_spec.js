var expect = require( 'expect.js' );
var Vote = require( '../../../server/votes/votes.js' );


describe( 'Vote', function( done ) {

  describe( 'addVote', function () {
    it( 'should be a function', function () {
      expect( Vote.addVote ).to.be.a( 'function' );
    });

    it( 'should add votes to the database', function( done ) {
      Vote.count()
      .then( function( count ) {
        expect( count ).to.eql( 0 );
        Vote.addVote( 1, 1, true )
        .then( function() {
          Vote.count()
          .then( function( count ) {
            expect( count ).to.eql( 1 );
            done();
          });
        });
      })
    });
  });

  describe( 'getSessMovieVotes', function() {
    it( 'should be a function', function() {
      expect( Vote.getSessMovieVotes ).to.be.a( 'function' );
    });
  });
});
