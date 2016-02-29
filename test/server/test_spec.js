// globals
var assert = require( 'assert' );
var sequelize = require( 'sequelize' );
var Users = require( '../../server/users/users' );
var Sessions = require( '../../server/sessions/sessions' );
var Sessions_Users = require( '../../server/sessions_users/sessions_users' );
var Votes = require( '../../server/votes/votes' );

// setup
// before();
beforeEach( function() {
  Votes.sync({force: true})
  .then( function() {
    Sessions_Users.sync({force: true})
    .then( function() {
      Sessions.sync({force: true})
      .then( function() {
        Votes.sync({force: true})
        .then( function() {
          Users.create({
            username: 'Julie',
            password: 'j'
          })
          .then( function() {
            Users.create({
              username: 'John',
              password: 'j'
            })
            .then( function() {
              Sessions.create({
                sessionName: 'TestSession'
              })
              .then( function() {
                Sessions_Users.create({
                  session_id: 1,
                  user_id: 1
                })
                .then( function() {
                  Sessions_Users.create({
                    session_id: 1,
                    user_id: 2
                  });
                });
              });
            });
          });
        });
      });
    });
  });
  
  // Wipe the database, and add in order:
  // Julie (user id 1)
  // John (user id 2)
  // TestSession (session id 1)
  // Sessions_Users w/ julie in testsession (sessions_users id 1)
  // Sessions_Users w/ john in testsession (sessions_users id 2)
});

// teardown
// after();
// afterEach();
