<template>
    <div id="app">
        <ejs-filemanager id="file-manager" :fileSelect="onFileSelect" :allowMultiSelection="allowMultiSelection":enableRangeSelection="enableRangeSelection" :ajaxSettings="ajaxSettings">
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
// allowMultiSelection is true by default
const allowMultiSelection = true;
const enableRangeSelection = true;
const onFileSelect = (args) => {
    console.log(args.fileDetails.name + " has been " + args.action + "ed");
};
provide('filemanager',  [DetailsView, NavigationPane, Toolbar]);

</script>
<style>
    @import "../node_modules/@syncfusion/ej2-material3-theme/styles/file-manager/index.css";
</style>