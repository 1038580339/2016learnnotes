/**
 * Created by Administrator on 2016/8/23 0023.
 */
(function(){
    var dot=[];
    var id=[];
        for(var i=0;i<50;i++){
            dot[i]=document.createElement("div");
            dot[i].style.width="40px";
            dot[i].style.height="40px";
            dot[i].style.borderRadius="50%";
            dot[i].style.backgroundColor="red";
            dot[i].style.position="absolute";
            dot[i].style.left=Math.random()*100+"%";
            dot[i].style.top=Math.random()*100+"%";
            document.body.appendChild(dot[i]);

        }
     console.log(parseInt(dot[1].style.top)+Math.random());

    function moveDot(num) {
         id[num] = setInterval(function () {
             if(parseInt(dot[num].style.left)<=50&&parseInt(dot[num].style.top)<=50) {
                 dot[num].style.top = parseInt(dot[num].style.top) - Math.random() + "%";
                 dot[num].style.left = parseInt(dot[num].style.left) - Math.random() + "%";
                 if (parseInt(dot[num].style.top) <= 0 || parseInt(dot[num].style.left) <= 0) {
                     clearInterval(id[num]);
                     dot[num].style.display = "none";
                 }
             }
             else if(parseInt(dot[num].style.left)<=50&&parseInt(dot[num].style.top)>=50){
                 dot[num].style.top = parseInt(dot[num].style.top) -Math.random()*2 + "%";
                 dot[num].style.left = parseInt(dot[num].style.left)-Math.random() + "%";
                 if (parseInt(dot[num].style.top) <0 || parseInt(dot[num].style.left) <= 0) {
                     clearInterval(id[num]);
                     dot[num].style.display = "none";
                 }


             }
             else if(parseInt(dot[num].style.left)>=50&&parseInt(dot[num].style.top)>=50){
                 dot[num].style.top = parseInt(dot[num].style.top) -Math.random() + "%";
                 dot[num].style.left = parseInt(dot[num].style.left)-Math.random() + "%";
                 if (parseInt(dot[num].style.top) <=0 || parseInt(dot[num].style.left) <= 0) {
                     clearInterval(id[num]);
                     dot[num].style.display = "none";
                 }


             }
             else {
                 dot[num].style.top =parseInt(dot[num].style.top) -Math.random() + "%";
                 dot[num].style.left = parseInt(dot[num].style.left)-Math.random() + "%";
                 if (parseInt(dot[num].style.top) <=0 || parseInt(dot[num].style.left) <= 0) {
                     clearInterval(id[num]);
                     dot[num].style.display = "none";
                 }


             }
        }, 100)
    }
    for(var i=0;i<50;i++){
        moveDot(i);
    }

})();