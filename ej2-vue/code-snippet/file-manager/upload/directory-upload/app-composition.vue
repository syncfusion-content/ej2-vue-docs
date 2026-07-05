<template>
    <div id="app">
        <ejs-filemanager ref="file_instance" id="file-manager" :ajaxSettings="ajaxSettings"
            :uploadSettings="uploadSettings">
        </ejs-filemanager>
    </div>
</template>

<script setup>
import { provide } from "vue";
import { FileManagerComponent as EjsFilemanager, DetailsView, NavigationPane, Toolbar } from "@syncfusion/ej2-vue-filemanager";

const ajaxSettings =
{
    url: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/FileOperations",
    getImageUrl: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/GetImage",
    uploadUrl: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/Upload",
    downloadUrl: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/Download"
};
provide('filemanager', [DetailsView, NavigationPane, Toolbar]);
const uploadSettings = { directoryUpload: true };
const file_instance = ref(null);
</script>

<style>
    @import "../node_modules/@syncfusion/ej2-material3-theme/styles/file-manager/index.css";
</style>