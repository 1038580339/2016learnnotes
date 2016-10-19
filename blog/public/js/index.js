/**
 * Created by Administrator on 2016/10/19 0019.
 */
(function () {
    // document.getElementById("bgColor").style.height=screen.height+"px";
    // 设置header的头部时间
   var canvas=document.getElementById("introduce-time");
    var context=canvas.getContext("2d");
     var date;
    function drawYear() {
        context.save();
        var my_gradient=context.createLinearGradient(0,0,0,150);
        my_gradient.addColorStop(0,"red");
        my_gradient.addColorStop(1,"green");

        context.fillStyle=my_gradient;
        context.font="40px Calibri";
        context.fillText("2",10,60);
        context.fillText("0",10,105);
        context.fillText("1",10,155);
        context.fillText("6",10,200);
        context.restore();
    }
     function drawRect(x,y,w,h,text) {
         context.save();
         var my_gradient=context.createLinearGradient(0,0,0,190);
         my_gradient.addColorStop(0,"red");
         my_gradient.addColorStop(0.5,"blue");
         my_gradient.addColorStop(1,"green");
         context.fillStyle=my_gradient;
         context.fillRect(x,y,w,h);
         context.font=" 15px Calibri";
         context.fillText(text,x+1,y-1);
         context.restore();
     }
    function drawMonth() {
        var date=new Date();
         var month=date.getMonth()+1;

         drawRect(60,200-month*15,20,month*15,month);
    }
    function drawDate() {
        var date=new Date();
        var day=date.getDate();
        console.log(day);
        drawRect(100,200-day*6,20,day*6,day);
    }
    function drawDay() {
        var date=new Date();
        var day=date.getDay();
        console.log(day);
        drawRect(140,200-day*(180/7),20,day*(180/7),"D"+day);
    }
    function drawHours() {
        var date=new Date();
        var hours=date.getHours();
        console.log(hours);
        drawRect(180,200-hours*6,20,hours*6,hours);
    }
    function drawMinutes() {
        var date=new Date();
        var Minutes=date.getMinutes();
        console.log(Minutes);
        drawRect(220,200-Minutes*3,20,Minutes*3,Minutes);
    }
    function drawSeconds() {
        var date=new Date();
        var seconds=date.getSeconds();
        console.log(seconds);
        drawRect(260,200-seconds*3,20,seconds*3,seconds);
    }
    function drawClock() {
        context.clearRect(0,0,400,200);
        drawMonth();
        drawDate();
        drawDay();
        drawHours();
        drawMinutes();
        drawSeconds();
        drawYear();
    }
    setInterval(function () {
        drawClock();
    },100)
    
    
})();