/**
 * Created by Administrator on 2016/8/24 0024.
 */
(function(){

    function creatbullet(){
        this.bullet=document.createElement("div");
        this.bullet.style.width="10px";
        this.bullet.style.height="10px";
        this.bullet.style.borderRadius="50%";
        this.bullet.style.backgroundColor="black";
        this.bullet.className="bullet";


    }
    creatbullet.prototype.getbullet=function(){
        return this.bullet;
    };
    creatbullet.prototype.movebullet=function(){
        var top=340;
        var speed=2;
       var id=setInterval(function() {
             top-=speed;
           if(top<=0)
           {
               document.querySelector("#container").removeChild(this.bullet);
               clearInterval(id);
           }
          this.bullet.style.marginTop=top+"px";
        }.bind(this),20)
    };

    window.creatbullet=creatbullet;



})();