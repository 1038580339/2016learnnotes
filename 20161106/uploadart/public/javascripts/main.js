/**
 * Created by Eccentric on 2016/11/6.
 */
(function () {
    var container=document.getElementById("container");
    function createDiv(title1,theme1,content1) {
        var div= document.createElement("div") ;
        var title=document.createElement("div");
        var theme=document.createElement("div");
        var content=document.createElement("div");
        div.style.marginTop="20px";
        div.style.backgroundColor="white";
        title.innerHTML="title:"+title1;
        theme.innerText="theme"+theme1;
        content.innerText="content"+content1;
        div.appendChild(title);
        div.appendChild(theme);
        div.appendChild(content);
         container.appendChild(div);
    }
    $.ajax({
        type: "GET",
        url: "/getdata",
        dataType: "json"
    }).done(function (data) {
        for(var i=data.length-1;i>=0;i--){
            createDiv(data[i].title,data[i].theme,data[i].article);
        }

    });
})();