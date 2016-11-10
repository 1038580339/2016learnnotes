
/**
 * Created by Eccentric on 2016/11/10.
 */
(function () {
    var socket = io(location.origin);
    var wcanvas=document.getElementById("wCanvas");
    var wctx=wcanvas.getContext("2d");
    var gcanvas=document.getElementById("gCanvas");
    var gctx=gcanvas.getContext("2d");
    wcanvas.addEventListener("mouseover",function (e) {
        wctx.moveTo(e.offsetX,e.offsetY);
        socket.emit("chat", {
            moveX: e.offsetX,
            moveY: e.offsetY
        });
        wcanvas.addEventListener("mousemove",function (e) {
          wctx.lineTo(e.offsetX,e.offsetY);
            socket.emit("chat", {
                lineX: e.offsetX,
                lineY: e.offsetY
            });
            wctx.strokeStyle="white";
           wctx.stroke();
        })
    });

    socket.on("chat", function (data) {
       gctx.moveTo(data.moveX,data.moveY);
        gctx.strokeStyle='white';
        gctx.lineTo(data.lineX,data.lineY);
        gctx.stroke();
    });
})();