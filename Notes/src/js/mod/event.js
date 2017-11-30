var subPub = function(){
    this.events = {};
}
subPub.prototype.on = function(event, handler)
{
    var events = this.events[event];
    if(!events){
        this.events[event] = [];
    }
    this.events[event].push({handler: handler});
}
subPub.prototype.fire = function(event, arguments){
    var _this = this;
    if(!this.events[event]){
        return;
    }
    for(var i = 0; i < this.events[event].length; i++){
        _this.events[event][i].handler(arguments);
    }
}
subPub.prototype.off = function(event){
    delete this.events[event];
}

module.exports = new subPub();