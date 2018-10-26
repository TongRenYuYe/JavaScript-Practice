function Robot(name, year, owner) {
    this.name = name;
    this.year = year;
    this.owner = owner;
}
//定义Robot构造函数
Robot.prototype.maker = "ObjiectUS";
Robot.prototype.speak = function () {
    console.log("HEllO");
}
Robot.prototype.makeCoffee = function () {
    console.log("这是您的咖啡!!");
}
Robot.prototype.blinkLights = function () {
    console.log("Blink Blink");
}
//给Robot原型添加方法
var robby = new Robot("Robby", 1956, "Dr.Morbius");
var rosie = new Robot("Rosie", 1962, "George Jetson");
robby.onOffSwitch = true;
robby.makeCoffee = function () {
    if (this.onOffSwitch) {
        console.log("去星巴克喝咖啡");
    }
};
rosie.cleanHouse = function () {
    console.log("我正在帮您打扫房间");
}
console.log(robby.name + " was made by " + robby.maker
    + " in " + robby.year + " and is owned by " + robby.owner);
robby.makeCoffee();
robby.blinkLights();
console.log(rosie.name + " was made by " +
    rosie.maker + " in " + rosie.year + " and is owned by " + rosie.owner);
rosie.cleanHouse();
//通过构造函数创建两个对象robby和rosie,并对其方法进行测试
function SpaceRobot(name, year, owner, homePlanet) {
    this.name = name;
    this.year = year;
    this.owner = owner;
    this.homePlanet = homePlanet;
}
SpaceRobot.prototype = new Robot();
//定义一个SpaceRobot构造函数，并将Robot设置为它的原型
SpaceRobot.prototype.speak = function () {
    alert(this.name + " says Sir,If I may venture an opinion...");
};
SpaceRobot.prototype.pilot = function () {
    alert(this.name + " says Thrusters?Are they important?");
};
var c3po = new SpaceRobot("C3Po", 1997, "Luke Skywalker", "Tatooine");
c3po.speak();
c3po.pilot();
console.log(c3po.name + " was made by " + c3po.maker);
//新建一个c3po对象，并对其方法进行测试
var simon = new SpaceRobot("Simon", 2009, "Carla Diana", "Earth");
simon.makeCoffee();
simon.blinkLights();
simon.speak();
//新建一个Simon对象，并对其方法进行测试