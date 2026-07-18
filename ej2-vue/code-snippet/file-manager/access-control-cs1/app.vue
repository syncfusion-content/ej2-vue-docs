<template>
    <div id="app">
        <ejs-filemanager id="file-manager"  :ajaxSettings="ajaxSettings">
        </ejs-filemanager>
    </div>
</template>
<script>

import { FileManagerComponent, DetailsView, NavigationPane, Toolbar } from "@syncfusion/ej2-vue-filemanager";

export default {
    name: "App",
    components: {
        "ejs-filemanager":FileManagerComponent,
    },
    data () {
        return {
             ajaxSettings:
            {
                url: "https://physical-service.syncfusion.com/api/FileManagerAccess/FileOperations",
                getImageUrl: "https://physical-service.syncfusion.com/api/FileManagerAccess/GetImage",
                uploadUrl: "https://physical-service.syncfusion.com/api/FileManagerAccess/Upload",
                downloadUrl: "https://physical-service.syncfusion.com/api/FileManagerAccess/Download"
            },
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