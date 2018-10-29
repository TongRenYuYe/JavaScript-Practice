/** 
 * 这是一个判断对象来源的例子，目的是为了让你理解构造函数是怎么回事以及它的特点
*/
function dogCatcher(obj) {
    if(obj.bark){
        return true;
    }
    return false;
}
//判断是否是小狗的函数
function Cat(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}
var meow = new Cat("Meow", "Siamese", 10);
var whiskers = new Cat("Whiskers", "Mixed", 12);
//创建Cat构造函数并用它创建两个对象
var fido = {
    name: "Fodo",
    breed: "Mixed",
    weight: 38,
};
//创建一个fido对象
function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.bark = function () {
        if (this.weight > 25) {
            alert(this.name + " says Woof!");
        } else {
            alert(this.name + " says Yip!");
        }
    };
}
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);
//创建一个Dog函数并用它创建两个对象
var dogs = [meow, whiskers, fido, fluffy, spot];
//这里将定义的四种事物存储在变量中，然后通过遍历变量的某个属性进行对所有变量进行逐个判断
for (var i = 0; i < dogs.length; i++) {
    if (dogCatcher(dogs[i])) {
        console.log(dogs[i].name + " is a dog!");
    }
}
//对所有定义过的对象进行排查