/**
 * 这是一个原型链例子：
 * Dog的原型是Dog.prototype
 * ShowDog的原型是new Dog()
 * 用对象字面量创造一个对象，用构造函数ShowDog创造一个构造函数，
 * 然后用console.log输出，看着两个对象来源于哪个构造函数
 */
function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}
Dog.prototype.species = "Canine";
Dog.prototype.bark = function () {
    if (this.weight > 25) {
        console.log(this.name + " says Woof!");
    } else {
        console.log(this.name + " says Yip!");
    }
};
Dog.prototype.run = function () {
    console.log("Run!");
};
Dog.prototype.wag = function () {
    console.log("Wag!");
};
//定义Dog()和其原型
function ShowDog(name, breed, weight, handler) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.handler = handler;
}
ShowDog.prototype = new Dog();
ShowDog.prototype.constructor = ShowDog;
//定义ShowDog，并将它的原型指定为Dog
var fido = new Dog("Fido", "Mixed", 38);
if (fido instanceof Dog) {
    console.log("Fido is a Dog!");
}
if (fido instanceof ShowDog) {
    console.log("Fido is a ShowDog!");
}
//判断对象fido是来自于哪个构造函数
var scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie");
if (scotty instanceof Dog) {
    console.log("Scotty is a Dog!");
}
if (scotty instanceof ShowDog) {
    console.log("Scotty is a ShowDog!");
}
//判断scotty是来自哪个构造函数
console.log("Fido constructor is " + fido.constructor);
console.log("Scotty constructor is " + scotty.constructor);
//用console.log输出结果