var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var data;
  if(req.session.user){
    data={
      isLogin:true,
        user:{
            avatar:req.session.user.avatar,
            username:req.session.user.username
        }
    }
  }
  else{
    data={
      isLogin:false
    }
  }
  console.log("data",data);
  res.render('index', data);

});

module.exports = router;
