/**
 * 这是一个机器人例子：
 * 当机器人达到42级后可以发射光线
 * 在这个例子中，你可以看到对象是如何互动的：
 * 在一个对象的方法中你可以嵌入另一个对象的方法
 */
function Game() {
    this.level = 0;
}
Game.prototype.play = function () {
    this.level++;
    console.log("Welcome to level " + this.level);
    this.unlock();
}
Game.prototype.unlock = function () {
    if (this.level === 42) {
        Robot.prototype.deployLaser=function(){
            console.log(this.name+"正在发射激光");
        }
    }
}
function Robot(name, year, owner) {
    this.name = name;
    this.year = year;
    this.owner = owner;
}

var game = new Game();
var robby = new Robot("Robby", 1956, "Dr.Morbius");
var rosie = new Robot("Rosie", 1962, "George");
while (game.level < 42) {
    game.play();
}
robby.deployLaser();
rosie.deployLaser();
