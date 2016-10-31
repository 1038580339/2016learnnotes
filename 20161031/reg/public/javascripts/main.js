/**
 * Created by Eccentric on 2016/10/31.
 */
(function () {
   var name=document.getElementById("name");
    var password=document.getElementById("password");
    var denglu=document.getElementById("denglu");
    var zhuce=document.getElementById("zhuce");
    var username=document.getElementById("username");
    denglu.onclick=function () {
        $.ajax({
            url:"/denglu",
            type:"GET",
            dataType:"json",
            data: {name:name.value,
                   password:password.value
            }


        }).done(function (data) {
            alert(data.result);
            username.innerText=data.name;
        })
    };
    zhuce.onclick=function () {
        $.ajax({
            url:"/zhuce",
            type:"GET",
            dataType:"json",
            data: {name:name.value,
                password:password.value
            }


        }).done(function (data) {
            alert(data.result);
        })
    }
})();