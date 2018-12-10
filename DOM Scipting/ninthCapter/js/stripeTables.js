function styleHeaderSiblings(tag,theclass) {
    if (!document.getElementsByTagName) return false;
    var elems = document.getElementsByTagName(tag);
    var elem;
    for (i = 0; i < elems.length; i++) {
        elem = getNextElment(elems[i].nextSibling);
        addClass(elem,theclass);
    }
}


function stripeTables() {
    if (!document.getElementsByTagName) return false;
    var tables = document.getElementsByTagName("table");
    var odd, rows;
    for (var i = 0; i < tables.length; i++) {
        odd = false;
        rows = tables[i].getElementsByTagName("tr");
        for (var j = 0; j < rows.length; j++) {
            if (odd == true) {
                addClass(rows[j],"odd");
                odd = false;
            } else {
                odd = true;
            }
        }
    }
}

//加入odd参数进行奇偶判断   -- 技巧

function addClass(element,value){
    if(!element.className){
        element.className=value;
    }else{
        var newClassName=element.className+" "+value;
        element.className=newClassName;
    }
}

//将新的class name 添加到class中

window.onload=stripeTables;