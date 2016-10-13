/**
 * Created by Administrator on 2016/10/12 0012.
 */
(function () {
    var audio=document.getElementById("audio");
    var body=document.body;
    var container=document.getElementById("container");
    container.addEventListener("dragover",function (e) {
        e.preventDefault();
    });
    var t=0;
    container.addEventListener("drop",function (e) {
        e.preventDefault();
        //console.log(e.dataTransfer.files);
        var files = e.dataTransfer.files;
       // var name= files[0].name;
        var reader;
        // if (files && files.length) {
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



        // }
        // for (var i = 0; i < files.length; i++) {
        //     alert("Drop " + files[i].name.toString());
        //     uploadFile(file[i]);
        //     return false;
        // }
        //

        if(files&&files.length){
            var file=files[0];
                switch (file.type){
                    case "audio/mp3":
                        reader=new FileReader();
                        reader.onload=function (e) {
                            var div=document.createElement("div");
                            console.log();
                             audio.src=reader.result;
                             div.innerText=file.name;
                            div.style.backgroundColor="blue";
                            div.onclick=function (e) {
                                audio.src=reader.result;
                            };
                            //text.innerHTML=reader.result.toString();
                            container.appendChild(div);
                        };
                        reader.readAsDataURL(file);
                        break;
                }

        }
    })
})();