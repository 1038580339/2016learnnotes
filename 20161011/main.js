/**
 * Created by Administrator on 2016/10/11 0011.
 */
(function () {
    var canvas=document.getElementById("canvas");
    var context=canvas.getContext("2d");
      //canvas.style.backgroundImage="url("+localStorage.getItem("img")+")";

              // canvas.onmousemove = function (e) {
              //     canvas.onmousedown = function (e) {
              //         context.beginPath();
              //         context.moveTo(e.offsetX,e.offsetY);
              //     };
              //         context.strokeStyle = "white";
              //         context.lineTo(e.offsetX, e.offsetY);
              //         context.stroke();
              //         context.closePath();
              //         localStorage.setItem("img", canvas.toDataURL());
              //
              //
              // }
         canvas.onmousedown=function (e) {
             context.beginPath();
             context.moveTo(e.offsetX,e.offsetY);
             canvas.onmousemove=function (e) {
                 if(e.which==1) {
                     context.strokeStyle = "white";
                     context.lineTo(e.offsetX, e.offsetY);
                     context.stroke();
                 }
             }
             canvas.onmouseup=function (e) {
                 context.closePath();
             }
         }


})();