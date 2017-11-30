/**
 * Created by u on 2017/11/21.
 */
var express=require("express");
var router=express.Router();
//引进数据库中的模型
var Note=require('../model/note').Note;
router.get("/notes",function (req,res,next) {
  //从数据库中抽取出来的数据模型,就是表
    var query={raw:true};
    if(req.session.user)
    {
        query.where={
            uid:req.session.user.id
        }
    }
   Note.findAll(query).then(function(notes){
       res.send({status:0,data:notes});
   })


});
router.post("/notes/add",function (req,res,next) {
   if(!req.session.user)
   {
       return res.send({status:1,errorMsg:"请先登录"})
   }
   var uid=req.session.user.id;
    var note= req.body.note;
  Note.create({text:note,uid:uid}).then(function () {
      console.log("add success");
      res.send({status:0});
  }).catch(function(){
      res.send({status:1,errorMsg:"数据库出错"});
  })
});
router.post("/notes/edit",function (req,res,next) {
    if(!req.session.user)
    {
        return res.send({status:1,errorMsg:"请先登录"})
    }
    var id= req.body.id;
    var uid=req.session.user.id;
    var msg=req.body.note;
    console.log("edit");
    Note.update({text:msg},{where:{id:id,uid:uid}}).then(function(){
        res.send({status:0});
    }).catch(function(){
        res.send({status:1,errorMsg:"数据库出错"})
    });
    console.log("edit success");
});
router.post("/notes/delete",function (req,res,next) {
    if(!req.session.user)
    {
        return res.send({status:1,errorMsg:"请先登录"})
    }
    var uid=req.session.user.id;
    var id= req.body.id;
    Note.destroy({where:{id:id,uid:uid}}).then(function () {
        res.send({status:0});
    }).catch(function(){
        res.send({status:1,errorMsg:"数据库出错"});
    })
    console.log("delete");
});
module.exports = router;