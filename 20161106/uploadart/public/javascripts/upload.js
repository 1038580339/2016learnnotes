
/**
 * Created by Eccentric on 2016/11/6.
 */
(function () {
    var title=$("#title");
    var content=$("#content");
    var theme=$("#theme");
   $("#button").on("click",function () {
       $.post("/upload",{title:title.val(),content:content.val(),theme:theme.val()},function (data) {
             if(data.num==2){
                 alert("添加成功");
             }
           else{
                 alert("添加失败");
             }

       })
   });

})();