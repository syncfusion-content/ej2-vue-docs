

<template>
    <div id="app">
        <ejs-filemanager id="file-manager"  :ajaxSettings="ajaxSettings">
        </ejs-filemanager>
    </div>
</template>
<script>
import Vue from "vue";
import { FileManagerPlugin, DetailsView, NavigationPane, Toolbar } from "@syncfusion/ej2-vue-filemanager";

Vue.use(FileManagerPlugin);
export default {
    data () {
        return {
             ajaxSettings:
            {
                url: "https://ej2-aspcore-service.azurewebsites.net/api/FileAccess/FileOperations",
                getImageUrl: "https://ej2-aspcore-service.azurewebsites.net/api/FileAccess/GetImage",
                uploadUrl: "https://ej2-aspcore-service.azurewebsites.net/api/FileAccess/Upload",
                downloadUrl: "https://ej2-aspcore-service.azurewebsites.net/api/FileAccess/Download"
            },
        };
    },
    provide: {
            filemanager: [DetailsView, NavigationPane, Toolbar]
    }
}
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
</style>


