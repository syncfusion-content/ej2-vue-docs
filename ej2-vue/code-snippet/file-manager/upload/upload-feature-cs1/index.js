
import Vue from "vue";
import { FileManagerPlugin, DetailsView, NavigationPane, Toolbar } from "@syncfusion/ej2-vue-filemanager";

Vue.use(FileManagerPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-filemanager id="file-manager" ref="fileManagerinstance" :height="height" :view="view" :ajaxSettings="ajaxSettings" :uploadSettings="uploadSettings" :created="onCreated">
        </ejs-filemanager>
    </div>
`,

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
            uploadSettings: { maxFileSize: 233332, minFileSize: 120, autoUpload: true},
            height: "375px"
        };
    },
    provide: {
            filemanager: [DetailsView, NavigationPane, Toolbar]
    },
    methods: {
        onCreated: function(args){
            this.$refs.fileManagerinstance.ej2Instances.uploadObj.dropArea = null; // Restrict file uploads by dragging them from the local file system to the File Manager.
        },
    }

});