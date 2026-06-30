<template>
    <div id="app">
        <ejs-filemanager id="file-manager"  :ajaxSettings="ajaxSettings">
        </ejs-filemanager>
    </div>
</template>
<script setup>
import { provide } from "vue";

import { FileManagerComponent as EjsFilemanager, DetailsView, NavigationPane, Toolbar } from "@syncfusion/ej2-vue-filemanager";

const ajaxSettings =
{
    url: "https://ej2-aspcore-service.azurewebsites.net/api/FileManagerAccess/FileOperations",
    getImageUrl: "https://ej2-aspcore-service.azurewebsites.net/api/FileManagerAccess/GetImage",
    uploadUrl: "https://ej2-aspcore-service.azurewebsites.net/api/FileManagerAccess/Upload",
    downloadUrl: "https://ej2-aspcore-service.azurewebsites.net/api/FileManagerAccess/Download"
};
provide('filemanager',  [DetailsView, NavigationPane, Toolbar]);

</script>
<style>
    @import "../node_modules/@syncfusion/ej2-material3-theme/styles/file-manager/index.css";
</style>