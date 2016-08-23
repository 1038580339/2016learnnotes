/**
 * Created by Administrator on 2016/8/23 0023.
 */
(function(){
   var fz=document.querySelector("#fz");
    var sz=document.querySelector("#sz");
    var mz=document.querySelector("#mz");
    console.log(fz.style.transform);
    var date=new Date();
    var second=date.getSeconds();
    var minutes=date.getMinutes();
    var hours=date.getHours();
    console.log(hours);
    var i=second*6;
    var j=minutes*6;
    var z=hours*30;
    sz.style.transform="rotate("+minutes+"deg)";
    fz.style.transform="rotate("+i+"deg)";
    mz.style.transform="rotate("+z+"deg)";
    setInterval(function(){
        if(i>=360)
        {
            i=0;
            j+=6;
            sz.style.transform="rotate("+j+"deg)";
            console.log(i);
            if(j>=360){
                j=0;
                z+=6;
                mz.style.transform="rotate("+z+"deg)";
            }
        }
        fz.style.transform="rotate("+i+"deg)";
        i+=6;
    },1000);





})();