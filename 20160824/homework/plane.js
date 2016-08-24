/**
 * Created by Administrator on 2016/8/24 0024.
 */
(function(){
    var allplane=[
         "img/plane0001.png",
        "img/plane0002.png",
        "img/plane0003.png",
        "img/plane0004.png",
        "img/plane0005.png"
    ];
    var i=0;
    function creatplane(){
        this.plane=document.createElement("div");
        this.plane.style.backgroundImage="url("+allplane[i]+")";
        if(i>=4){
            i=0;
        }
        else{i++;}
        this.plane.style.width="70px";
        this.plane.style.height="26px";
        this.plane.style.marginTop="70px";
        this.plane.style.marginLeft="480px";
        this.plane.style.position="absolute"

    }
    creatplane.prototype.getplane=function(){
        return this.plane;
    }
    creatplane.prototype.removeplane=function(){
        var left=480;
        var speed=2;
        var id=setInterval(function(){
                left-=speed;
                if(left<=0){
                    clearInterval(id);
                    document.querySelector("#container").removeChild(this.plane);
                }
                this.plane.style.marginLeft=left+"px";
            }.bind(this)
        ,20)
    }

    window.creatplane=creatplane;


})();