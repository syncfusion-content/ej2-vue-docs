<template>
    <div id="app">
        <ejs-filemanager id="file-manager" :ajaxSettings="ajaxSettings">
        </ejs-filemanager>
    </div>
</template>
<script setup>
import { FileManagerComponent as EjsFilemanager } from "@syncfusion/ej2-vue-filemanager";

const ajaxSettings = {
    url: "https://physical-service.syncfusion.com/api/FileManager/FileOperations",
    getImageUrl: "https://physical-service.syncfusion.com/api/FileManager/GetImage"
}

</script>
<style>
    @import "../node_modules/@syncfusion/ej2-material3-theme/styles/file-manager/index.css";
</style>