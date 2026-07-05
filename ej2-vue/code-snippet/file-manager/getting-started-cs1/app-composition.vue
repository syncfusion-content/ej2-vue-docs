<template>
    <div id="app">
        <ejs-filemanager id="file-manager" :ajaxSettings="ajaxSettings">
        </ejs-filemanager>
    </div>
</template>
<script setup>
import { FileManagerComponent as EjsFilemanager} from "@syncfusion/ej2-vue-filemanager";

const ajaxSettings = {
    url: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/FileOperations"
}

</script>
<style>
    @import "../node_modules/@syncfusion/ej2-material3-theme/styles/file-manager/index.css";
</style>