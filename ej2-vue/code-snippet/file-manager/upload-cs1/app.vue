<template>
    <div id="app">
        <ejs-filemanager id="file-manager" :view="view" :ajaxSettings="ajaxSettings" :uploadSettings="uploadSettings">
        </ejs-filemanager>
    </div>
</template>
<script>

import { FileManagerComponent, DetailsView, NavigationPane, Toolbar } from "@syncfusion/ej2-vue-filemanager";


export default {
    name: "App",
    components: {
        "ejs-filemanager":FileManagerComponent
    },
    data () {
        return {
           ajaxSettings:
            {
                url: "https://physical-service.syncfusion.com/api/FileManager/FileOperations",
                getImageUrl: "https://physical-service.syncfusion.com/api/FileManager/GetImage",
                uploadUrl: "https://physical-service.syncfusion.com/api/FileManager/Upload",
                downloadUrl: "https://physical-service.syncfusion.com/api/FileManager/Download"
            },
            // Initial view of File Manager is set to details view
            view: "Details",
            // Upload settings customization
            uploadSettings: { maxFileSize: 233332, minFileSize: 120, autoUpload: true}
        };
    },
    provide: {
            filemanager: [DetailsView, NavigationPane, Toolbar]
    }
}
</script>
<style>
    @import "../node_modules/@syncfusion/ej2-material3-theme/styles/file-manager/index.css";
</style>