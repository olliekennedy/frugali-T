const LocalStrategy = require('passport-local').Strategy; //this is to allow for instance for a user authentication mechanism with a simple username and password
const bcrypt = require('bcrypt'); //Since i'll be comparing passwords this time, I need to decrypt the password that will be returned by the database. For this reason, I will also bring in bcrypt
const User = require("../model/user"); //since Im comparing passwords returned from the database, I will import User model (the blue-print) for database-related operations.

const passport = require('passport');

module.exports = function(passport){
  passport.use(
    new LocalStrategy({usernameField : 'username'}, (username, password, done) => { //the usernameField will be used to identify the username and password that will be compared against the database
      User.findOne({username: username}) //look inside the database : line 10 - 28 : First, find whether the given email address is present in the database. If it is not, it’ll throw an error that the email isn’t recognized. Later on, you then compare whether the user-entered password matches the password in the database. If it does, it will return the relevant user information.
      .then((user) => {
        if(!user) {
          return done(null, false, {message: 'that email is not registered'});
        }
        
        bcrypt.compare(password,user.password,(err, isMatch) => {
          if (err) throw err;

          if (isMatch) {
            return done (null, user);
          } else {
            return done(null,false,{message: 'pass incorrect'});
          } 
        })
      })
      .catch((err) => {console.log(err)})
    })
  )
  passport.serializeUser(function(user, done) { //In order to support login sessions, passport will use the serialize and deserialize methods on the user instances to and from the session. 
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
};