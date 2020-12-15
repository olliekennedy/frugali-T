const express = require('express');
const router = express.Router();
const User = require('../model/user')
const bcrypt = require('bcrypt');
const passport = require('passport');
// require("./config/passport")(passport)


router.get('/', (req, res) => {
  res.render('homepage');
})

router.get('/signup', (req, res) => {
  res.render('signup');
})

router.get('/account', (req, res) => {
  res.render('account');
})

router.get("/signin", (req, res) => {
  res.render('signin');
})

router.post('/signup', (req, res) => {
  const {firstname, lastname, username, email, password, confirmPassword} = req.body;
  let errors = [];
  console.log('Username ' + username + ' email: ' + email + ' pass: ' + password);
  if(!username || !email || !password || !confirmPassword) {
    errors.push({msg : "Please fill in all the fields"})
  }
  if(password !== confirmPassword) {
    errors.push({msq : "passwords dont match"});
  }
  if (password.length < 6) {
    errors.push({msq : "password atleast 6 characters"});
  }
  if (errors.length > 0) {
    res.render('signup', {
      errors: errors,
      firstname: firstname,
      lastname: lastname,
      username: username,
      email: email,
      password: password,
      confirmPassword: confirmPassword})
     } else {
      User.findOne({email : email}).exec((err, user) => {
        console.log(user);
        if (user){
          errors.push({msg : 'email already exits'});
          render(res, errors, firstname, lastname, username, email, password, confirmPassword);
        } else {
          const newUser = new User({
            firstname: firstname,
            lastname: lastname,
            username: username,
            email: email,
            password: password,
            confirmPassword: confirmPassword})
          bcrypt.genSalt(10, (err, salt) => 
          bcrypt.hash(newUser.password,salt,
            (err,hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser.save()
              .then((value) => {
                console.log(value)
                req.flash('success_msg','You have now registered!')
                res.redirect('/signin');
              })
              .catch(value => console.log(value));
            }));
          };
        });
      }  
    });

router.post('/signin', (req, res, next) => {
  passport.authenticate('local',{
  successRedirect : '/account',
  failureRedirect : '/signin',
  failureFlash : true,
  })(req,res,next);
});

router.get('/account',(req,res) => {
  res.render('account', {
    user: req.user
  });
})

router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are now logged out');
  res.redirect('/signin');
})

module.exports = router;