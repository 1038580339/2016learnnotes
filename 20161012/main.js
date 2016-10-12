/**
 * Created by Administrator on 2016/10/12 0012.
 */
(function () {
    var audio=document.getElementById("audio");
    var body=document.body;
    var container=document.getElementById("container");
    body.addEventListener("dragover",function (e) {
        e.preventDefault();
    });
    body.addEventListener("drop",function (e) {
        e.preventDefault();
        var files = e.dataTransfer.files;
        var reader;
        if (files && files.length) {
            // var file = files[0];
            //
            // switch (file.type) {
            //     case "text/plain":
            //         reader = new FileReader();
            //         reader.onload = function () {
            //             target.innerHTML = reader.result;
            //         };
            //         reader.readAsText(file);
            //         break;
            //     case "image/jpeg":
            //         reader = new FileReader();
            //         reader.onload = function () {
            //             target.innerHTML = "<img src='" + reader.result + "'>";
            //         };
            //         reader.readAsDataURL(file);
            //         break;
            //     default:
            //         console.log(file);
            //         break;
            // }
            for(var i=0;i<files.length;i++){
                switch (files[i].type){
                    case "text/plain":
                        reader=new FileReader();
                        reader.onload=function () {
                            container.innerHTML=reader.result;
                            console.log(reader.result.src);
                        };
                        reader.readAsDataURL(files[i]);
                }
            }

        }
    })
})();