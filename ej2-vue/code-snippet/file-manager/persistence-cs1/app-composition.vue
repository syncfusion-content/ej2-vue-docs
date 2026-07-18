<template>
    <div id="app">
        <ejs-filemanager id="file-manager" :enablePersistence="enablePersistence" :ajaxSettings="ajaxSettings" :success="onAjaxSuccess" :failure="onAjaxFailure">
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
const enablePersistence = true;
provide('filemanager',  [DetailsView, NavigationPane, Toolbar]);
const onAjaxSuccess = () => {
    console.log("Ajax request successful");
};
const onAjaxFailure = () => {
    console.log("Ajax request has failed");
};

</script>
<style>
    @import "../node_modules/@syncfusion/ej2-material3-theme/styles/file-manager/index.css";
</style>