/**
 * Created by Administrator on 2016/11/11 0011.
 */
(function () {
    var form=document.getElementById("form");
    var table=document.getElementById("table");
    var submit=document.getElementById("submit");
    $.get("/get", function (data) {
        table.innerHTML="";
        creatTr("名字","日期","金额","是否还清");
        for(var i=0;i<data.length;i++){
            creatTr(data[i].name,data[i].date,data[i].number,data[i].bool);
        }
    });
    submit.addEventListener("click",function (e) {
        e.preventDefault();
        $.post( "/upload",{name:form[name="name"].value,date:form[name="date"].value,number:form[name="number"].value,yn:form[name="yn"].value}).done(function (data) {
            if(data.a=1) {
                alert("添加成功");
                $.get("/get", function (data) {
                    table.innerHTML="";
                    creatTr("名字","日期","金额","是否还清");
                    for(var i=0;i<data.length;i++){
                        creatTr(data[i].name,data[i].date,data[i].number,data[i].bool);
                    }
                });
            }
        });
    });
    function creatTr(name,date,number,yn) {
        var tr=document.createElement("tr");
        var td1=document.createElement("td");
        var td2=document.createElement("td");
        var td3=document.createElement("td");
        var td4=document.createElement("td");
        var td5=document.createElement("td");
        var button=document.createElement("button");
        td5.appendChild(button);
        button.innerText="删除";
        button.onclick=function () {
          table.removeChild(this.parentNode.parentNode);
            $.post('/delete',{name:td1.innerText});
        };
        td1.innerText=name;
        td2.innerText=date;
        td3.innerText=number;
        td4.innerText=yn;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        table.appendChild(tr);

    }


})();