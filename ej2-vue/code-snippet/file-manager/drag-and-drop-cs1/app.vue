<template>
    <div id="app">
        <ejs-filemanager id="file-manager" :allowDragAndDrop="allowDragAndDrop"  :fileDragStart="onFileDragStart"  :fileDragStop="onFileDragStop" :fileDragging="onFileDragging" :fileDropped="onFileDropped" :ajaxSettings="ajaxSettings">
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
                url: "https://physical-service.syncfusion.com/api/FileManager/FileOperations",
                getImageUrl: "https://physical-service.syncfusion.com/api/FileManager/GetImage",
                uploadUrl: "https://physical-service.syncfusion.com/api/FileManager/Upload",
                downloadUrl: "https://physical-service.syncfusion.com/api/FileManager/Download"
            },
            allowDragAndDrop: true
        };
    },
    provide: {
            filemanager: [DetailsView, NavigationPane, Toolbar]
    },
    methods: {
        // File Manager's file Drag start event function
        onFileDragStart: function(){
            console.log("File Drag Start");
        },
        // File Manager's file Drag stop event function
        onFileDragStop: function(){
            console.log("File Drag Stop");
        },
        // File Manager's file Dragging event function
        onFileDragging: function(){
            console.log("File Dragging");
        },
        // File Manager's file Dropped event function
        onFileDropped: function(){
            console.log("File Dropped");
        }
    }
}
</script>
<style>
    @import "../node_modules/@syncfusion/ej2-material3-theme/styles/file-manager/index.css";
</style>