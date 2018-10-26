function makeCounter(){
    var count=0;
    var number={
        increment:function(){
            count++;
            return count;
        }
    };
    return number.increment;
}
//makeCounter()执行的是函数，如果将其赋给变量的话，就是执行该函数后所得到的结果（值），
//而这个值可以是函数引用，也可以是数值或者是别的值，都是一等值，
//而如果要是makeCounter存储的是该函数的引用
var doCount=makeCounter();
console.log(doCount());
console.log(doCount());
console.log(doCount());