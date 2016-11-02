/**
 * Created by Eccentric on 2016/11/2.
 */
(function () {
    // var audio=document.getElementById("audio");
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
        var reader;
        
        if(files&&files.length){
            var file=files[0];
            // switch (file.type){
            //     case "audio/mp3":
                    reader=new FileReader();
                    reader.onload=function (e) {
                        var input=document.createElement("input");
                        input.type="file";
                        input.name="file";
                        input.getData=reader.result;
                        console.log(reader.result);
                        // input.innerText=file.name;
                        input.style.backgroundColor="blue";
                      var div=document.createElement("div");
                        div.style.width="0";
                        div.style.height="20px";
                        div.style.float="left";
                        div.id="length";
                        div.style.backgroundColor="black";
                        container.appendChild(input);
                        container.appendChild(div);
                        container.appendChild(document.createElement("p"));
                    };
                    reader.readAsDataURL(file);
                    // break;
            // }

        }
    });
    container.addEventListener("submit",function (e) {
        e.preventDefault();
        var xhr=new XMLHttpRequest();
        xhr.upload.onprogress = function (e) {
            // console.log(e.loaded / e.total * 100 + "%");
             console.log(e);
            // progressBar.progressbar({value: e.loaded, max: e.total});
            document.getElementById("length").style.width=100*(e.loaded/e.total)+"px";
        };
        xhr.open("POST","/file");
        var fd=new FormData(this);
        xhr.send(fd);
    })
})();