(function() {
    function Main() {
        this.food = null;
        this.snake = null;
        this.control = null;
    }
    Main.prototype.start = function(map) {
            //显示食物
            this.food = new Food();
            this.food.init(map);

            //显示蛇
            this.snake = new Snake();
            this.snake.init(map);
            this.snake.move(map, this.food);
            this.snake.AddLeng(map)
                //游戏控制
            this.control = new Control();
            this.control.controlDir(this.snake);
        }
        // Main.prototype.restart = function() {
        //     // //显示食物
        //     // this.food = null;
        //     // //显示蛇
        //     // this.snake = null;
        //     // //游戏控制
        //     // this.control.cancelcontrolDir(this.snake);
        //     // this.control = null;

    // }
    window.Main = Main;
})()