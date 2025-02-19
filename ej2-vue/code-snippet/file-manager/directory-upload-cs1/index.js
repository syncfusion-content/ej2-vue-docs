
import Vue from "vue";
import { FileManagerPlugin, NavigationPane, Toolbar, DetailsView, FileManagerComponent } from "@syncfusion/ej2-vue-filemanager";
import { DropDownButton, ItemModel } from "@syncfusion/ej2-splitbuttons";

Vue.use(FileManagerPlugin);
// File Manager directory upload feature sample
let hostUrl = 'https://ej2-aspcore-service.azurewebsites.net/';
);
new Vue({
	el: '#app',
	template: `
<div id="app">
    <div class="control-section folder-upload">
         <div class="sample-container">
            <ejs-filemanager id="filemanager" :height="height" :ajaxSettings='ajaxSettings' :created='onCreated' >
            </ejs-filemanager>
        </div>
    </div>
</div>
`,

     data () {
        return {
            ajaxSettings:
            {
                url: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/FileOperations",
                getImageUrl: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/GetImage",
                uploadUrl: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/Upload",
                downloadUrl: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/Download"
            },
            height: "330px"
        };
    },
    provide: {
            filemanager: [NavigationPane, DetailsView, Toolbar]
    },
    methods: {
        onCreated: function (args) {
            var customBtn = document.getElementById("filemanager_tb_upload");
            customBtn.onclick = (e) => {
                e.stopPropagation();
            };
            //DropDownButton items definition
            var items = [{ text: "Folder" }, { text: "Files" }];
            var drpDownBtn = new DropDownButton({
                items: items,
                select: (args) => {
                    var fileObj = document.getElementById("filemanager").ej2_instances[0];
                    if (args.item.text === "Folder") {
                        fileObj.uploadSettings.directoryUpload = true;
                    } else {
                        fileObj.uploadSettings.directoryUpload = false;
                    }
                    setTimeout(function () {
                        var uploadBtn = document.querySelector(".e-file-select-wrap button");
                        uploadBtn.click();
                    }, 100);
                },
            },"#filemanager_tb_upload"
            );
        },
    },

});