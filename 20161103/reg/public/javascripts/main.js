/**
 * Created by Eccentric on 2016/11/3.
 */
(function () {
    var id=document.getElementById("id");
    var pass=document.getElementById("pass");
    var user=document.getElementById("user");
    var age=document.getElementById("age");
    var zc=document.getElementById("zc");
    zc.addEventListener("click",function () {
        var xhr=new XMLHttpRequest();
        xhr.open("POST","/zc");
        xhr.send(JSON.stringify({id:id.value,pass:pass.value,user:user.value,age:age.value}));

    });
    // var a=document.getElementsByTagName("a");
    // a[0].onclick=function (e) {
    //     console.log(this.href);
    //     $.get(this.href);
    // }
})();