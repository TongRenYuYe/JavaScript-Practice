/** 
 * “变态”的闭包例子：
 * 输出的结果是10个10
*/
function test(){
    var arr=[];
    for(var i =0;i<10;i++){
        arr[i]=function(){
            document.write(i+"  ");
        }
    }
    return arr;
}

var myArr = test();
for(var j=0;j<10;j++){
    myArr[j]();
}