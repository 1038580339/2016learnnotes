/**
 * Created by Eccentric on 2016/10/13.
 */
(function () {
    var canvas=document.getElementById("canvas");
    var context=canvas.getContext("2d");
    var url=location.search;
    url=url.substring(1).split("&");
    //var a1=url[0].split("=");
    //console.log(a1);
    var obj={};
    for(var i=0;i<url.length;i++){
       var a1=url[i].split("=");
        obj[a1[0]]=a1[1];
    }
    console.log(obj);
    context.fillStyle=obj.color;
    context.fillRect(obj.x,obj.y,obj.width,obj.height);
})();