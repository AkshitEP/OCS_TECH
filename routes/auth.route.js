const router = require('express').Router();
const User = require('../models/user.model')
const {body, validationResult} = require('express-validator')
const passport = require('passport')


router.get('/login',ensureNotAuthenticated, async (req,res,next) => {
    res.render('login')
})

router.get('/register', ensureNotAuthenticated, async (req,res,next) => {

    // req.flash('error', 'some error')
    // req.flash('error', 'some error 2')
    // req.flash('info', 'some value')
    // req.flash('warning', 'some value')
    // req.flash('success', 'some value')


    // // const messages = req.flash()
    // res.redirect('/auth/login')
    
    res.render('register')
})

router.post(
    '/login', ensureNotAuthenticated,
        passport.authenticate('local', {
        successRedirect: "/user/profile",
        // successReturnToOrRedirect: '/',
        failureRedirect: "/auth/login",
        failureFlash: true,
})
);

router.post('/register',[
    body('email').trim().isEmail().withMessage('Email must be a valid email').normalizeEmail().toLowerCase(),
    body('password').trim().isLength(2).withMessage('password length short, min 2 char required'),
    body('password2').custom((value, {req}) =>{
      if(value !== req.body.password){
        throw new Error('Passwords dont match')
      }  
      return true;
    })
] ,async (req,res,next) => {
    try {
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            errors.array().forEach((error) => {
                req.flash('error', error.msg)
            })
            res.render('register', {email: req.body.email, messages: req.flash() })
            return;
        }

        const { email } = req.body;
        const doesExist = await User.findOne({ email })
        if(doesExist) {
            res.redirect('/auth/register')
            return
        }

        const user = new User(req.body)
        await user.save();

        req.flash('success', user.email, 'registered succesfully, you can now login')
        res.redirect('/auth/login')
    } catch (error) {
        next(error);
    }
})

router.get('/logout',ensureAuthenticated, async (req, res, next) => {
    req.logout(function(err) {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
});


module.exports = router;

function ensureAuthenticated(req, res, next){
    if(req.isAuthenticated()){
        next()
    }
    else{
    res.redirect('/auth/login')
    }
}

function ensureNotAuthenticated(req, res, next){
    if(req.isAuthenticated()){
        res.redirect('back')
    }
    else{
        next()
    }
}