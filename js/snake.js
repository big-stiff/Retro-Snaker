(function(window, undefined) {
    function Snake(option) {
        let options = option || {};
        //初始的三段身子
        this.bodys = [{ x: 2, y: 0, c: 'red' }, { x: 1, y: 0, c: 'green' }, { x: 0, y: 0, c: 'green' }];
        this.size = 20;
        //存放身子HTML数组
        this.bodyArray = [];
        this.direction = 39;
        this.timeId = null;
    }
    Snake.prototype.init = function(map) {
        let iLen = this.bodys.length;
        let fragment = document.createDocumentFragment();
        for (let i = iLen - 1; i >= 0; i--) {
            let body = this.bodys[i];
            let div = document.createElement('div');
            div.style.width = div.style.height = this.size + 'px';
            div.style.backgroundColor = body.c;
            div.style.position = 'absolute';
            div.style.left = body.x * this.size + 'px';
            div.style.top = body.y * this.size + 'px';
            this.bodyArray.unshift(div);
            fragment.appendChild(div);
        }
        map.appendChild(fragment);
        // console.log(this.bodyArray);
    }
    Snake.prototype.move = function(map, food) {
        var that = this;
        this.timeId = setInterval(function() {

            let iLen = that.bodyArray.length;

            let head = that.bodyArray[0];

            for (let i = iLen - 1; i > 0; i--) {
                // console.log(parseInt(head.style.left));
                // console.log(that.bodys[0].x)
                // console.log(that.size)
                that.bodyArray[i].style.left = that.bodyArray[i - 1].style.left;
                that.bodyArray[i].style.top = that.bodyArray[i - 1].style.top;
            }
            switch (that.direction) {
                //左边
                case 37:
                    head.style.left = (parseInt(head.style.left) / that.size - 1) * that.size + 'px';
                    break;
                    //右边
                case 39:
                    head.style.left = (parseInt(head.style.left) / that.size + 1) * that.size + 'px';
                    break;
                    //上
                case 38:
                    head.style.top = (parseInt(head.style.top) / that.size - 1) * that.size + 'px';
                    break;
                    //下
                case 40:
                    head.style.top = (parseInt(head.style.top) / that.size + 1) * that.size + 'px';
                    break;
            }
            stopMove(map, head, that.timeId);
            EatYou(food, that, map);
            //   console.log(that.direction)
        }, 150);

        // for (let i)
    }
    Snake.prototype.AddLeng = function(map) {
            //复制蛇身最后一段，并分别添加到底图和身子数组里面
            let newbody = this.bodyArray[this.bodyArray.length - 1].cloneNode();
            map.appendChild(newbody);
            this.bodyArray.push(newbody);
        }
        //出范围结束游戏(此判断函数外面访问不到)
    function stopMove(map, head, timeId) {
        let headx = parseInt(head.style.left);
        let heady = parseInt(head.style.top);
        let headsize = head.clientWidth;
        let mapW = map.clientWidth;
        let mapH = map.clientHeight;
        if (headx < 0 || headx > mapW - headsize || heady < 0 || heady > mapH - headsize) {

            clearInterval(timeId);
            alert('GameOver!');
        }


    }
    //添加蛇吃到食物自增长度并且食物自动刷新位置
    function EatYou(food, snake, map) {
        var foodLeft = food.div.style.left;
        var foodTop = food.div.style.top;
        var snakeLeft = snake.bodyArray[0].style.left;
        var snakeTop = snake.bodyArray[0].style.top;
        if (foodLeft === snakeLeft && foodTop === snakeTop) {
            snake.AddLeng(map);
            food.Changeposition(map);
        }
    }
    window.Snake = Snake;
})(window, undefined)