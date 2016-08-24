/**
 * Created by Administrator on 2016/8/24 0024.
 */
(function(){

    var container=document.querySelector("#container");
        document.onkeydown = function (e) {
            if (e.keyCode == 32) {
                 bullet=new creatbullet();
                container.appendChild(bullet.getbullet());
                bullet.movebullet();
            }
        }


     setInterval(function(){
          plane=new creatplane();
         container.appendChild(plane.getplane()) ;
         plane.removeplane();
     },1000);



})();