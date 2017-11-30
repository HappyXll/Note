/**
 * Created by u on 2017/11/28.
 */
var  express=require('express');
var router=express.Router();


//用于第三方登陆的实现的中间件
//github 有一个第三方的npm的插件
var passport=require("passport");
var GitHubStrategy = require('passport-github').Strategy;

//比如当你登陆成功后，通过passport传给session
passport.serializeUser(function(user,done){
  console.log("---serializeUser---");
  console.log(user);
  done(null,user);
})
passport.deserializeUser(function(obj,done){
    console.log("----deserializeUser");
    done(null,obj);
});



passport.use(new GitHubStrategy({
        clientID: "79d81c8691bebbf60975",
        clientSecret: "f9f3a64a59f8988eaaca714187b07a7a07bcd2e3",
        callbackURL: "http://47.91.156.35:3000/auth/login/github/callback"
    },
    function(accessToken, refreshToken, profile, done) {
        console.log("xll new");
        done(null,profile);
    }
));
router.get('/logout', function(req, res){
    req.session.destroy();
    res.redirect('/');
})
//当服务器请求jirengu的时候，就会向jirengu的登陆网站发送一个请求
router.get("/login/github",passport.authenticate('github'));
//认证通过之后，会发送一个请求
router.get("/login/github/callback", passport.authenticate('github', { failureRedirect: '/login' }),
    function(req, res) {
    //当用户发送请求到服务器之后，服务器需要记录用户登陆的一个状态，所以会将用户请求（req）的
        //id和密码存放到session中去，session是存放在服务器上的。
        // Successful authentication, redirect home.
         console.log("success...");
         console.log("req.user");
        req.session.user = {
            id: req.user.id,
            username: req.user.displayName || req.user.username,
            avatar: req.user._json.avatar_url,
            provider: req.user.provider
        };
        res.redirect('/');
    });
module.exports = router;