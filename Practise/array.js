(function () {
    function array(arr) {
        var len = arr.length;
        var output = [];
        for (var i = 0; i < len; i++) {
            var tmp = [];
            for (var j = 0; j < len; j++) {
                tmp.push(arr[i]);
            }
            output.push(tmp);
        }
        return output;
    }
    console.log(array([4, 5]));
})();
