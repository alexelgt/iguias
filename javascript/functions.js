function fullscreen(){var a=document.getElementsByTagName("a");for(var i=0;i<a.length;i++){if(a[i].className.match("noeffect")){}else{a[i].onclick=function(){window.location=this.getAttribute("href");return false}}}} 

function popupwindow(id,id2) {
    var theDetail = document.getElementById(id);
        theDetail.style.display="block";

var theDetail = document.getElementById(id2);
    theDetail.style.display="none";
    
}

if(("standalone" in window.navigator) && window.navigator.standalone){

var noddy, remotes = false;

document.addEventListener('click', function(event) {

noddy = event.target;

while(noddy.nodeName !== "A" && noddy.nodeName !== "HTML") {
noddy = noddy.parentNode;
}

if('href' in noddy && noddy.href.indexOf('http') !== -1 && (noddy.href.indexOf(document.location.host) !== -1 || remotes))
{
event.preventDefault();
document.location.href = noddy.href;
}

},false);
}