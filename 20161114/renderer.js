// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const {ipcRenderer} = require("electron");
const fs = require("fs");

class Renderer {

    constructor() {
        this.btnSelectDestDir = document.getElementById("btn-select-dest-dir");
        this.formSaveData = document.getElementById("form-data");

        this.addListeners();
    }

    addListeners() {
        var self = this;
        
        this.btnSelectDestDir.onclick = function () {
            
            var files = ipcRenderer.sendSync("openDir");

            if (files && files.length) {
                self.destDir = files[0];
            }
        };

        this.formSaveData.onsubmit = function (e) {
            e.preventDefault();

            var xhr=new XMLHttpRequest();
            xhr.onload=function (data) {
                console.log(xhr.responseText);
                fs.writeFile(destFile,xhr.responseText, function (err) {
                    if (!err) {
                        alert(`成功保存文件${destFile}`);
                    } else {
                        alert("无法保存文件");
                    }
                })
            };
            xhr.open("GET",this["txt"].value);
            xhr.send();

            if (!self.destDir) {
                alert("请选择要保存的目录");
                return;
            }

            var destFile = `${self.destDir}/data.txt`;

        };
    }

}

new Renderer();