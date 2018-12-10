function displayAbbreviations(){
    var abbreviations=document.getElementsByTagName("abbr");
    if (abbreviations.length<1) return false;
    var defs=new Array();
    for(var i=0;i<abbreviations.length;i++){
        var definition=abbreviations[i].getAttribute("title");
        var key=abbreviations[i].lastChild.nodeValue;
        defs[key]=definition;   
    }
    var dlist=document.createElement("dl");
    for(key in defs){
        
    }
}