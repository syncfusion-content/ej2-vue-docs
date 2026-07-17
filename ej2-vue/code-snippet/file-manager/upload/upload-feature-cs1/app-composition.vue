<template>
    <div id="app">
        <ejs-filemanager ref="file_instance" id="file-manager" :ajaxSettings="ajaxSettings"
            :uploadSettings="uploadSettings" :created="onCreated">
        </ejs-filemanager>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { FileManagerComponent as EjsFilemanager, DetailsView, NavigationPane, Toolbar } from "@syncfusion/ej2-vue-filemanager";

const ajaxSettings =
{
    url: "https://physical-service.syncfusion.com/api/FileManager/FileOperations",
    getImageUrl: "https://physical-service.syncfusion.com/api/FileManager/GetImage",
    uploadUrl: "https://physical-service.syncfusion.com/api/FileManager/Upload",
    downloadUrl: "https://physical-service.syncfusion.com/api/FileManager/Download"
};
provide('filemanager', [DetailsView, NavigationPane, Toolbar]);
const uploadSettings = { allowedExtensions: '.jpg,.png', autoClose: false, autoUpload: false, chunkSize: 5242880, minFileSize: 120, maxFileSize: 73728000 };
const file_instance = ref(null);
const onCreated = function () {
    file_instance.value.ej2Instances.uploadObj.dropArea = null; // Restrict file uploads by dragging them from the local file system to the File Manager.
};
</script>
<style>
    @import "../node_modules/@syncfusion/ej2-material3-theme/styles/file-manager/index.css";
</style>