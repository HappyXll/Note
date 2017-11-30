var waterfall = function($container){
    var _this = this;
    this.init($container);
    this.layout();
    $(window).on('resize',function(){
        _this.init($container);
        _this.layout();
    });
}
waterfall.prototype = {
    init: function($container){
        var _this = this;
        this.$ct = $container;
        this.$item = $container.children();
        this.nodeWidth = this.$item.outerWidth(true);
        this.cols = parseInt($(window).width()/this.nodeWidth);
        this.heightArr = [];
        for(var i = 0; i < this.cols; i++){
            _this.heightArr[i] = 0;
        }
    },
    layout: function(){
        var _this = this;
        this.$item.each(function(){
            console.log(111)
        })
        this.$item.each(function(){
            var minHeight = Math.min.apply(null, _this.heightArr);
            var minHeightIndex = _this.heightArr.indexOf(minHeight);
            $(this).css({
                top: minHeight,
                left: minHeightIndex * _this.$item.eq(0).outerWidth(true)
            })
            _this.heightArr[minHeightIndex] += $(this).outerHeight(true)
        })
    }
}

function WaterFall($content){
    return new waterfall($content)
}
module.exports = WaterFall;
