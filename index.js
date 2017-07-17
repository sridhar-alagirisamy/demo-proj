var stringconvert = (function () {
    function stringconvert() {
        this.arr = [];
    }
    stringconvert.prototype.conversion = function (str) {
        this.str = str;
        var temp = 0;
        for (var i = 0; i < this.str.length; i++) {
            temp = parseInt(this.str[i]);
            //alert(temp);
            this.arr.push(temp);
        }
        return this.arr;
    };
    return stringconvert;
}());