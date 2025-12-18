<template>
    <div id="app">
        <ejs-filemanager id="file-manager" :cssClass="cssClass" :ajaxSettings="ajaxSettings" :largeIconsTemplate="'largeTpl'">
            <template v-slot:largeTpl="{ data }">
                <div style="display: flex; flex-direction: column; gap: 2px;">
                    <span><strong>{{ data.name }}</strong></span>
                    <span><strong>Type: </strong>{{ data.isFile ? 'File' : 'Folder' }}</span>
                    <span><strong>Modified: </strong>
                        <template v-if="data.dateModified">
                            {{
                                new Date(data.dateModified).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                                })
                            }}
                        </template>
                    </span>
                </div>
            </template>
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
provide('filemanager',  [DetailsView, NavigationPane, Toolbar]);
const cssClass = 'fm_template';
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-icons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-layouts/styles/material.css";
@import "../node_modules/@syncfusion/ej2-grids/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-filemanager/styles/material.css";

.fm_template .e-large-icons .e-list-item {
    width: 190px;
}
</style>