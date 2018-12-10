//把一个元素插入到另一个元素的后边
function insertAfter(newElement,targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
      parent.appendChild(newElement);
    } else {
      parent.insertBefore(newElement,targetElement.nextSibling);
    }
  }

function prepareSlideshow() {
    //安全检查
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("linklist")) return false;
    //设置样式
    var slideshow=document.createElement("div");
    slideshow.setAttribute("id","slideshow");
    var preview=document.createElement("img");
    preview.setAttribute("src","../images/topics.gif");
    preview.setAttribute("alt","building blocks of web design");
    preview.setAttribute("id","preview");
    slideshow.appendChild(preview);
    var list=document.getElementById("linklist");
    insertAfter(slideshow,list);
    var links = list.getElementsByTagName("a");
    //为mouseover事件添加动画效果
    links[0].onmouseover = function () {
        moveElement("preview", -100, 0, 10);
    }
    links[1].onmouseover = function () {
        moveElement("preview", -200, 0, 10);
    }
    links[2].onmouseover = function () {
        moveElement("preview", -300, 0, 10);
    }
}

function moveElement(elementID, final_x, final_y, interval) {
    if (!document.getElementById) return false;
    if (!document.getElementById(elementID)) return false;
    var elem = document.getElementById(elementID);
    if (elem.movement) {
        clearTimeout(elem.movement);
    }
    //如果把29行调到第32行，意味着什么？
    //函数会直接被返回false吗？
    if(!elem.style.left){
        elem.style.left="0px";
    }
    if(!elem.style.top){
        elem.style.top="0px";
    }
    var x = elem.style.left;
    var y = elem.style.top;
    var xpos = parseInt(x);
    var ypos = parseInt(y);
    var dist;
    if (xpos == final_x && ypos == final_y) {
        return true;
    }
    if (xpos < final_x) {
        dist=Math.ceil((final_x-xpos)/10);
        xpos=dist+xpos;
        //最后10个像素是一次移动一个像素，最后10个像素之前，图片的移动速度和图片与图片终点的
        //距离成正比，距离越远移动的速度越快，距离越近移动的速度越慢，最后的10个像素是每次移动
        //一个像素（时间间隔是0.01s,10个像素共花费0.1s）
    }
    if (xpos > final_x) {
        dist=Math.ceil((xpos-final_x)/10);
        xpos=xpos-dist;
    }
    if (ypos < final_y) {
        dist=Math.ceil((final_y-ypos)/10)
        ypos=dist+ypos;
    }
    if (ypos > final_y) {
        dist=Math.ceil((ypos-final_y)/10)
        ypos=ypos-dist;
    }
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    var repeat = "moveElement('" + elementID + "'," + final_x + "," + final_y + "," + interval + ")";
    //①这里为什么加“”  ②为什么''里面必须是"+elementID+"，而不能是其他
    elem.movement = setTimeout(repeat, interval);
}

window.onload = prepareSlideshow;