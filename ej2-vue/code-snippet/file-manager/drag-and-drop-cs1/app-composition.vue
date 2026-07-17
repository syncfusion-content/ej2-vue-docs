<template>
    <div id="app">
        <ejs-filemanager id="file-manager" :allowDragAndDrop="allowDragAndDrop"  :fileDragStart="onFileDragStart"  :fileDragStop="onFileDragStop" :fileDragging="onFileDragging" :fileDropped="onFileDropped" :ajaxSettings="ajaxSettings">
        </ejs-filemanager>
    </div>
</template>
<script setup>
import { provide } from "vue";

import { FileManagerComponent as EjsFilemanager, DetailsView, NavigationPane, Toolbar } from "@syncfusion/ej2-vue-filemanager";

const ajaxSettings =
{
    url: "https://physical-service.syncfusion.com/api/FileManager/FileOperations",
    getImageUrl: "https://physical-service.syncfusion.com/api/FileManager/GetImage",
    uploadUrl: "https://physical-service.syncfusion.com/api/FileManager/Upload",
    downloadUrl: "https://physical-service.syncfusion.com/api/FileManager/Download"
};
const allowDragAndDrop = true;
const onFileDragStart = function(){
    console.log("File Drag Start");
};
const onFileDragStop = function(){
    console.log("File Drag Stop");
};
const onFileDragging = function(){
    console.log("File Dragging");
};
const onFileDropped = function(){
    console.log("File Dropped");
};

provide('filemanager',  [DetailsView, NavigationPane, Toolbar]);

</script>
<style>
    @import "../node_modules/@syncfusion/ej2-material3-theme/styles/file-manager/index.css";
</style>