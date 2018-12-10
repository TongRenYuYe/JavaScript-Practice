/**
 * 通过对元素（标签）位置的重新定义从而实现“类似动画”效果
 * 也就是在这个js文件中，我领悟到了一个真理（for coder）:最重要的是程序设计，是写代码的思想
 * 而不是仅仅做一个将已经定义功能逐个实现的coder，要做那些别人都做不了的事或者甚至被人都不愿意去做的
 * 事，例如代码的标准性，代码优化，另一种程序设计方法等等
 */

// function moveMessage() {
//     if (!document.getElementById) return false;
//     if (!document.getElementById("message")) return false;
//     var elem = document.getElementById("message");
//     elem.style.left = "200px";
// }

// function positionMessage() {
//     if (!document.getElementById) return false;
//     if (!document.getElementById("message")) return false;
//     var elem = document.getElementById("message");
//     elem.style.position = "absolute";
//     elem.style.top = "100px";
//     elem.style.left = "50px";
//     setTimeout("moveMessage()", 2000);
// }

//  window.onload = positionMessage;

/**
 * 下面是pro版，在你运行程序的时候请将它取消注释，其实下面这段程序和上面的程序最重要的
 * 区别就是移动的时间间隔和移动单位更细腻了，所以会有一种渐进的感觉--“动7画”
 * 注意：下面的“动画”的移动单位是1px,移动间隔时长是0.01s，移动速率是1px/0.01s,根据设备不同（
 * 屏幕大小不同）可对速率进行更改（甚至进行变换），移动单位和间隔时长都可进行更改，更改过后不要忘了对其进行测试
 */

// function moveMessage() {
//     if (!document.getElementById) return false;
//     if (!document.getElementById("message")) return false;
//     var elem = document.getElementById("message");
//     var x = elem.style.left;
//     var y = elem.style.top;
//     var xpos=parseInt(x);
//     var ypos=parseInt(y);
//     if (xpos == 200 && ypos == 200) {
//         return true;
//     }
//     if(xpos<200){
//         xpos++;
//     }
//     if(xpos>200){
//         xpos--;
//     }
//     if(ypos<200){
//         ypos++;
//     }
//     if(ypos>200){
//         ypos--;
//     }
//     elem.style.left=xpos+"px";
//     elem.style.top=ypos+"px";
//     movement=setTimeout("moveMessage()",10);
// }

// function positionMessage() {
//     if (!document.getElementById) return false;
//     if (!document.getElementById("message")) return false;
//     var elem = document.getElementById("message");
//     elem.style.position = "absolute";
//     elem.style.top = "100px";
//     elem.style.left = "100px";
//     moveMessage();
// }


/**
 * 抽象：将函数中固定或者特定的值转变成函数使用的形参，从而使函数更加通用，适用的范围更广，
 * 抓住核心
 * 下面是上面代码抽象后的结果：
 */

function moveElement(elementID,final_x,final_y,interval) {
    if (!document.getElementById) return false;
    if (!document.getElementById(elementID)) return false;
    var elem = document.getElementById(elementID);
    var x = elem.style.left;
    var y = elem.style.top;
    var xpos=parseInt(x);
    var ypos=parseInt(y);
    if (xpos == final_x && ypos == final_y) {
        return true;
    }
    if(xpos<final_x){
        xpos++;
    }
    if(xpos>final_x){
        xpos--;
    }
    if(ypos<final_y){
        ypos++;
    }
    if(ypos>final_y){
        ypos--;
    }
    elem.style.left=xpos+"px";
    elem.style.top=ypos+"px";
    var repeat="moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
    //①这里为什么加“”  ②为什么''里面必须是"+elementID+"，而不能是其他
    var movement=setTimeout(repeat,interval);
}

function positionMessage() {
    if (!document.getElementById) return false;
    if (!document.getElementById("message1")) return false;
    var elem1 = document.getElementById("message1");
    elem1.style.position = "absolute";
    elem1.style.top = "100px";
    elem1.style.left = "100px";
    moveElement("message1",200,200,100);
    if(!document.getElementById("message2")) return false;
    var elem2=document.getElementById("message2");
    elem2.style.position="absolute";
    elem2.style.left="200px";
    elem2.style.top="200px";
    moveElement("message2",100,100,100);
}

window.onload=positionMessage;