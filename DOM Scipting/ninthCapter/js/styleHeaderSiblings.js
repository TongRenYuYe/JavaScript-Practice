function styleElementSiblings(tag) {
    if (!document.getElementsByTagName) return false;
    var elems = document.getElementsByTagName(tag);
    var elem;
    for (var i = 0; i < elems.length; i++) {
        elem = getNextElement(elems[i].nextSibling);
        elem.style.fontWeight = "bold";
        elem.style.fontSize = "1.2em";
    }
}

function getNextElement(node) {
    if (node.nodeType == 1) {
        return node;
    }
    if (node.nextSibling) {
        return getNextElement(node.nextSibling);
    }
    return null;
}

//这是一个自己嵌套自己的函数，而且自己检查自己
//如果是由函数声明创建的函数的话，可以在函数内部继续调用这种函数

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != "function") {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}
/**
 * addLoadEvent函数提供以下功能：
 * 将现有的window.onload的值赋给变量oldonload,
 * 如果window.onload没有绑定事件处理函数，就把实参赋给window.onload，
 * 如果变量window.onload的值是function（函数），就将实参添加到已绑定函数的后边
 */
addLoadEvent(styleElementSiblings("h1"));