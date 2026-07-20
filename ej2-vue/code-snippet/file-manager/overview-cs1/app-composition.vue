<template>
<div id="app">
    <div class="wrapper">
     <ejs-filemanager id="overview_filemanager" :ajaxSettings="ajaxSettings" :view="view">
     </ejs-filemanager>
    </div>
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
const view = "Details";
provide('filemanager',  [DetailsView, NavigationPane, Toolbar]);

</script>
<style>
    @import "../node_modules/@syncfusion/ej2-material3-theme/styles/file-manager/index.css";
</style>