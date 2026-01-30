<template>
    <div id="app">
        <ejs-filemanager id="file-manager" ref="file_instance" :contextMenuSettings="contextMenuSettings" :ajaxSettings="ajaxSettings" :menuOpen="menuOpen" :menuClick="menuClick">
        </ejs-filemanager>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";

import { FileManagerComponent as EjsFilemanager, DetailsView, NavigationPane, Toolbar } from "@syncfusion/ej2-vue-filemanager";

const ajaxSettings =
{
    url: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/FileOperations",
    getImageUrl: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/GetImage",
    uploadUrl: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/Upload",
    downloadUrl: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/Download"
};
const contextMenuSettings = { file: ['Custom', 'Open', '|', 'Delete', 'Rename', '|', 'Details'], folder: ['Custom', 'Open', '|', 'Delete', 'Rename', '|', 'Details'], layout: ['Custom', 'SortBy', 'View', 'Refresh', '|', 'NewFolder', 'Upload', '|', 'Details', '|', 'SelectAll'], visible: true};
provide('filemanager',  [DetailsView, NavigationPane, Toolbar]);
const file_instance = ref(null);
const menuOpen = (args) => {
    for(let i = 0; i<args.items.length; i++) {
        if(args.items[i].id === file_instance.value.$el.id +"_cm_custom") {
            args.items[i].iconCss= "e-icons e-fe-tick";
        }
    }
}
const menuClick = (args) => {
    if (args.item.text === "Custom") {
        alert("You have clicked custom menu item")
    }
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
</style>