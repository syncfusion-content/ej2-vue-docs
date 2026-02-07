<template>
    <div id="app">
        <ejs-filemanager id="file-manager" :ajaxSettings="ajaxSettings" :navigationPaneTemplate="navigationPaneTemplate">
        </ejs-filemanager>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { FileManagerComponent as EjsFilemanager, DetailsView, NavigationPane, Toolbar } from "@syncfusion/ej2-vue-filemanager";
import { createApp } from 'vue';
const app = createApp();
const demoNavigationPaneTemplate = app.component('navigationPaneTemplate', {
  template: `
    <div class="e-nav-pane-node" style="display:inline-flex;align-items:center;">
      <span class="folder-name" style="margin-left:8px;">{{ data?.name }}</span>
    </div>
  `,
  data() {
    return { data: {} };
  }
});
const navigationPaneTemplate = function () {
    return { template: demoNavigationPaneTemplate };
};
const ajaxSettings =
{
    url: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/FileOperations",
    getImageUrl: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/GetImage",
    uploadUrl: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/Upload",
    downloadUrl: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/Download"
};
provide('filemanager',  [DetailsView, NavigationPane, Toolbar]);
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