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
    url: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/FileOperations",
    getImageUrl: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/GetImage",
    uploadUrl: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/Upload",
    downloadUrl: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/Download"
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
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-icons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-layouts/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-grids/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-filemanager/styles/material3.css";
</style>