<template>
    <div id="app">
        <ejs-button id="enable" cssClass="e-success">Enable New Folder toolbar item</ejs-button>
        <ejs-button id="disable" cssClass="e-danger">Disable New Folder toolbar item</ejs-button>
        <ejs-filemanager :created="onCreated" id="file-manager" ref="fileManagerinstance" :height="height" :ajaxSettings="ajaxSettings">
        </ejs-filemanager>
    </div>
</template>
<script setup>
import { provide } from "vue";

import { FileManagerComponent as EjsFilemanager, DetailsView, NavigationPane, Toolbar } from "@syncfusion/ej2-vue-filemanager";
import { ButtonComponent as EjsButton} from "@syncfusion/ej2-vue-buttons";

const fileManagerinstance = ref(null);
const ajaxSettings =
{
    url: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/FileOperations",
    getImageUrl: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/GetImage",
    uploadUrl: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/Upload",
    downloadUrl: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/Download"
};

const height = "330px";
provide('filemanager',  [DetailsView, NavigationPane, Toolbar]);
const onCreated = function(){
    // Click event for enable button
    document.getElementById("enable").addEventListener('click', () => {
        // Enable new folder toolbar item
        fileManagerinstance.value.enableToolbarItems(["newfolder"]);
    });
    // Click event for disable button
    document.getElementById("disable").addEventListener('click', () => {
        // Disable new folder toolbar item
        fileManagerinstance.value.disableToolbarItems(["newfolder"]);
    });
}

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

#enable {
    position: relative;
    left: 20%;
    top: -10px;
}

#disable {
    position: relative;
    left: 30%;
    top: -10px;
}

</style>