
import Vue from "vue";
import { FileManagerPlugin, DetailsView, NavigationPane, Toolbar } from "@syncfusion/ej2-vue-filemanager";

Vue.use(FileManagerPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-filemanager id="file-manager" :height="height" :allowDragAndDrop="allowDragAndDrop"  :fileDragStart="onFileDragStart"  :fileDragStop="onFileDragStop" :fileDragging="onFileDragging" :fileDropped="onFileDropped" :ajaxSettings="ajaxSettings">
        </ejs-filemanager>
    </div>
`,

    data () {
        return {
             ajaxSettings:
            {
                url: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/FileOperations",
                getImageUrl: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/GetImage",
                uploadUrl: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/Upload",
                downloadUrl: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/Download"
            },
            allowDragAndDrop: true,
            height: "375px"
        };
    },
    provide: {
            filemanager: [DetailsView, NavigationPane, Toolbar]
    },
    methods: {
        // File Manager's file Drag start event function
        onFileDragStart: function(args){
            console.log("File Drag Start");
        },
        // File Manager's file Drag stop event function
        onFileDragStop: function(args){
            console.log("File Drag Stop");
        },
        // File Manager's file Dragging event function
        onFileDragging: function(args){
            console.log("File Dragging");
        },
        // File Manager's file Dropped event function
        onFileDropped: function(args){
            console.log("File Dropped");
        }
    }

});