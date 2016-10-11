/**
 * Created by Administrator on 2016/10/11 0011.
 */
(function () {
    var canvas=document.getElementById("canvas");
    var context=canvas.getContext("2d");
    canvas.onclick=function (e) {
        var x=e.offsetX;
        var y=e.offsetY;
        console.log(x+" "+y);
        context.beginPath();
        context.moveTo(e.offsetX,e.offsetY);
        if(e.which==1){
            canvas.onmousemove=function (e) {
                 
            }

        }
    }
})();