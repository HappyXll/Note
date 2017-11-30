/**
 * Created by u on 2017/11/19.
 */
require("less/toast.less");
var $=require("jquery");
/*require("less/toast.less");*/
function toast(msg,time)
{
    this.msg=msg;
    this.dismissTime=time||1000;
    this.createToast();
    this.showToast();

}
toast.prototype={
    createToast:function(){
        var tpl="<div class='toast'>"+this.msg+"</div>";
        this.$toast=$(tpl);
        $("body").append(this.$toast);
    },
    showToast:function(){
        var _this=this;
        //fadeIn是用来显示隐藏的元素
        this.$toast.fadeIn(300,function(){
            setTimeout(function () {
                _this.$toast.fadeOut(300,function(){
                    _this.$toast.remove();
                })
            })
        })
    }
}
function Toast(msg){
    return new toast(msg,1000);
}
module.exports.Toast=Toast;