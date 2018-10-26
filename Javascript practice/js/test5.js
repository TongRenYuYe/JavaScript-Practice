function dogCatcher(obj) {
    if(obj.bark){
        return true;
    }
    return false;
}
/*function dogCatcher(obj) {
    if(obj instanceof Dog){
        return true;
    }
    return false;
}*/
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
/*这里将定义的四种事物存储在变量中，然后通过遍历变量的某个属性进行对所有变量进行逐个判断
将某种数据结构（对象、数组...）存储在变量中，然后通过该数据结构的某种属性或某个方法访问对应
的数据结构的属性或者方法可用于遍历多个类似的对象或者数组，方便
可用于“聚合”的数据结构：对象，数组，字符串等（都是将他们存储在变量中，然后由于他们都是对象，所以可以通过
存储他们的引用（这里的“引用”是名词）（也即是变量）的属性或者方法访问相应数据结构的属性或者方法，这样做
就将现实简化了（当然也抽象了）（简化或者抽象化的优点在于降低了解决已知问题的成本，但有可能增加解决未知
问题的难度，因为需要增添属性，修改代码，因此在最开始写代码的时候应当考虑到如何应对未知问题--表现到现实层
面就是要使代码易维护，易修改和要写注释（为了你后面的人不从零开始研究这件事，保证了持续）））
其实这里的核心还是对象，为什么呢？因为对象有属性有方法，可以将现实世界（合理地描绘）地更绘声绘色更像更形
象化一些一些，既可以描写状态，又可以表述行为*/
for (var i = 0; i < dogs.length; i++) {
    if (dogCatcher(dogs[i])) {
        console.log(dogs[i].name + " is a dog!");
    }
}
//对所有定义过的对象进行排查