(function() {
    function Food(option) {
        let options = option || {};
        this.width = this.height = options.size || 20;
        this.bgc = options.backgroundColor || 'green';
        this.div = null;
    }

    Food.prototype.init = function(map) {
        this.div = document.createElement('div');
        this.div.style.width = this.width + 'px';
        this.div.style.height = this.height + 'px';
        this.div.style.position = 'absolute';
        this.div.style.backgroundColor = this.bgc;

        map.appendChild(this.div);

        this.div.style.left = this.div.clientWidth * Tools.random(0, map.clientWidth / this.div.clientWidth - 1) + 'px';
        this.div.style.top = this.div.clientHeight * Tools.random(0, map.clientHeight / this.div.clientHeight - 1) + 'px';
    }
    Food.prototype.Changeposition = function(map) {

        this.div.style.left = this.div.clientWidth * Tools.random(0, map.clientWidth / this.div.clientWidth - 1) + 'px';
        this.div.style.top = this.div.clientHeight * Tools.random(0, map.clientHeight / this.div.clientHeight - 1) + 'px';
    }
    window.Food = Food;
})()