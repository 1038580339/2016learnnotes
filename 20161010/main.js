/**
 * Created by Administrator on 2016/10/10 0010.
 */
(function () {

    var canvas1=document.getElementById("canvas1");
    var canvas2=document.getElementById("canvas2");
    var canvas3=document.getElementById("canvas3");
    var button=document.getElementById("button");
    var context = canvas1.getContext("2d");
    var context2 = canvas2.getContext("2d");
    var context3 = canvas3.getContext("2d");
    var video;
    function loadVideo() {
         video = document.createElement("video");
        video.autoplay="autoplay";
        navigator.mediaDevices.getUserMedia({
            audio:false,video:true
        }).then(function (result) {
            console.log(result);
            video.srcObject = result;
        }).catch(function (error) {
            console.log(error);
        });
    }
    function render() {
        context.drawImage(video,0,0);
        requestAnimationFrame(render);
    }
    var img;
    var img2=document.createElement("img");
    button.onclick=function (e) {
        var dataUrl=canvas1.toDataURL();
        //console.log(dataUrl);
         img=document.createElement("img");
        img.src=dataUrl;
        context2.clearRect(0, 0, 400,400);
        context2.save();
        context2.beginPath();
        context2.arc(100,100, 100, 0, Math.PI * 2);
        context2.closePath();
        context2.clip();
       context2.drawImage(img,0,0);
     context2.restore();
        canvas2.onmousemove=function (e) {
           if(e.which==1){
               render1();
           }


        };
    };

    function render1() {
       var e=event||window.event;
    console.log(e.offsetX);

    context2.clearRect(0, 0, 400,400);
    context2.save();
    context2.beginPath();
        if(e.offsetX==undefined) {
            context2.arc(200, 100, 100, 0, Math.PI * 2);
        }
        else{
            context2.arc(e.offsetX,e.offsetY, 100, 0, Math.PI * 2);
        }
    context2.closePath();
    context2.clip();

    context2.drawImage(img, 0, 0);

    context2.restore();
        var dateUrl2=canvas2.toDataURL();
        img2.src=dateUrl2;
        context3.clearRect(0,0,300,300);
        context3.drawImage(img2,e.offsetX-100,e.offsetY-100,200,200,0,0,300,300);

    requestAnimationFrame(render1);
}

    function init() {
      loadVideo();
        render();
    }
    init();
})();
// function render() {
//
//     circleX += speed;
//     if (circleX > 300) {
//         speed = -1;
//     }
//     if (circleX < 100) {
//         speed = 1;
//     }
//
//     context.clearRect(0, 0, 400, 300);
//
//     context.save();
//     context.beginPath();
//     context.arc(circleX, circleY, 100, 0, Math.PI * 2);
//     context.closePath();
//     context.clip();
//
//     context.drawImage(img, 0, 0);
//
//     context.restore();
//
//     requestAnimationFrame(render);
// }