/**
 * “变态”的闭包例子
 * 用闭包实现神奇的“计数器”
 */
function makeCounter() {

    var count = 0;
    //创建并初始化变量count
    function counter() {

        count++;
        //让count+1
        return count;
        //返回count
    };

    return counter;
    //返回变量counter，变量counter中包含函数counter和函数counter的环境
}
//定义函数makeCounter,该函数的执行结果为变量counter
var doCount = makeCounter();
//将变量counter赋给变量doCount,同时也将函数counter和其环境赋给了变量doCount
console.log(doCount());
//（使用变量doCount中存储的环境）执行变量doCount中的函数,然后将执行结果在控制台输出
console.log(doCount());
//(使用变量doCount中存储的环境,环境中这时候变量count的值为1）再次调用变量doCount中的函数，然后将执行结果在控制台输出
console.log(doCount());
console.dir(doCount);
//(使用变量doCount中存储的环境,环境中这时候变量count的值为2）再次调用变量doCount中的函数，然后将执行结果在控制台输出
//相当于把变量count保存到全局变量doCount中了，这样的话，在全局变量doCount中就不会像在局部变量中那样
//等到函数执行完毕变量就不存在了，全局变量doCount会一直存在直到该网页关闭或者把变量（属性）删除或者重定义，
//所以每次调用变量doCount中的函数时（变量count在全局层面才可以实现累加）
//在全局中，全局变量可以累积，而局部变量不可以累积（函数执行完毕，局部变量就会消失）
//而每次调用变量doCount中的函数时使用的都是（调用doCount中的函数时）doCount中存储变量的环境，所以每次调用每次都会加一
//输出肯定是在全局中，所以肯定是要用全局变量完成这件事，所以要把（局部）变量counter赋给（全局）变量doCount


/**
 * 函数作为值通过变量进行相互传递时，一共传递了两种东西：
 * 函数和该函数中变量的环境
 * 其中，函数包含执行代码和函数结果（这个结果也可以是存储变量引用的函数）
 */