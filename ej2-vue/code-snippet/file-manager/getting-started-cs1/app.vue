<template>
    <div id="app">
        <ejs-filemanager id="file-manager" :ajaxSettings="ajaxSettings">
        </ejs-filemanager>
    </div>
</template>
<script>
import { FileManagerComponent } from "@syncfusion/ej2-vue-filemanager";

export default {
    name: "App",
    components: {
        "ejs-filemanager":FileManagerComponent
    },
    data () {
        return {
           ajaxSettings:
            {
                url: "https://physical-service.syncfusion.com/api/FileManager/FileOperations"
            }
        }
    }
}
</script>
<style>
    @import "../node_modules/@syncfusion/ej2-material3-theme/styles/file-manager/index.css";
</style>