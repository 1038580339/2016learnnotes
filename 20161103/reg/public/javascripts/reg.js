/**
 * Created by Eccentric on 2016/11/3.
 */
(function () {
    var id=document.getElementById("id");
    var pass=document.getElementById("pass");
    var button=document.getElementById("button");
    button.addEventListener("click",function () {

        var xhr=new XMLHttpRequest();
        xhr.addEventListener("load", function () {
            
            console.log(JSON.parse(xhr.response));
            var obj=JSON.parse(xhr.response);
            var h1=document.createElement("h1");
            h1.innerText=obj[0].user+" 你好";
            document.getElementById("container").appendChild(h1);
            // console.log(JSON.parse(xhr.responseText));
        });
        xhr.open("POST","/dl");
        xhr.send(JSON.stringify({id:id.value,pass:pass.value}));
        
    })
})();