(function() {
    function Control() {}
    //添加蛇的方向控制函数
    Control.prototype.controlDir = function(snake) {
            var that = this;
            window.addEventListener('keyup', function() {
                ctr(snake);
            }, false);
        }
        //     //取消蛇的方向控制函数
        // Control.prototype.cancelcontrolDir = function(snake) {
        //     window.removeEventListener('keyup', ctr(snake), false);
        // }

    function ctr(snake) {
        //上38下40 左37 右39
        // console.log(typeof e.keyCode);
        let e = event;
        if (e.keyCode >= 37 && e.keyCode <= 40) {
            snake.direction = e.keyCode;
        }
    }
    window.Control = Control;
})()