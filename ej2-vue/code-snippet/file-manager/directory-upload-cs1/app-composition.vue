<template>
<div id="app">
    <div class="control-section folder-upload">
         <div class="sample-container">
            <ejs-filemanager id="filemanager" :ajaxSettings='ajaxSettings' :created='onCreated' >
            </ejs-filemanager>
        </div>
    </div>
</div>
</template>
<script setup>
import { provide } from "vue";

import { FileManagerComponent as EjsFilemanager, NavigationPane, Toolbar, DetailsView } from "@syncfusion/ej2-vue-filemanager";
import { DropDownButton } from "@syncfusion/ej2-splitbuttons";


// File Manager directory upload feature sample
const ajaxSettings =
{
    url: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/FileOperations",
    getImageUrl: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/GetImage",
    uploadUrl: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/Upload",
    downloadUrl: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/Download"
};
const onCreated = function () {
    var customBtn = document.getElementById("filemanager_tb_upload");
    customBtn.onclick = (e) => {
        e.stopPropagation();
    };
    //DropDownButton items definition
    const items = [{ text: "Folder" }, { text: "Files" }];
    let drpDownBtn;
    drpDownBtn = new DropDownButton({
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
    },"#filemanager_tb_upload");
};
provide('filemanager',  [NavigationPane, DetailsView, Toolbar]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-icons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-layouts/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-grids/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-filemanager/styles/tailwind3.css";
.folder-upload .sample-container {
    margin: 10px 10px 10px 10px;
}
</style>