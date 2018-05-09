'use strict';

var WishWall = function () {
    //确定数据结构
    LocalContractStorage.defineMapProperty(this, "WishInfo");
    LocalContractStorage.defineMapProperty(this, "data");
    LocalContractStorage.defineProperty(this, "size");

};

WishWall.prototype = {
    init:function(){
        this.size = 0;
    },
    //插入数据
    save: function (name,wish) {
        var index = this.size;
        this.WishInfo.set(index, name);
        this.data.set(name, wish);
        this.size += 1;
    },
    get: function(name) {
        return this.data.get(name);
    },
    // 获取所有的数据
    forEach: function () {
        var result = [];
        for (var i = 0; i < this.size; i++) {
            var name = this.WishInfo.get(i);
            var object = this.data.get(name);
            var temp = {
                index: i,
                name: name,
                info: object
            }
            result.push(temp);
        }
        return JSON.stringify(result);

    },

};

module.exports = WishWall;