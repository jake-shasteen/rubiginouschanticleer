var expect = require( 'chai' ).expect;
var Vote = require( '../../../server/votes/votes' );
var User = require( '../../../server/users/users' );


describe( 'Vote', function( ) {

  describe( 'addVote', function ( ) {
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

  describe( 'getSessMovieVotes', function( ) {
    it( 'should be a function', function() {
      expect( Vote.getSessMovieVotes ).to.be.a( 'function' );
    });

    it( 'should get votes for a given session and movie', function( done ) {
      Vote.addVote( 1, 1, true ).then( function() {
        Vote.addVote( 2, 1, true )
        .then( function() {
          Vote.getSessMovieVotes( 1, 1 ).then( function( votes ) {
            expect( votes ).to.be.length( 2 );
            done();
          });
        });
      });
      // User.findAll({ where: {} }).then( function( users ) {
      //   console.log( users );
      // });
    });

  });

});
