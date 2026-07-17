
import Vue from "vue";
import { FileManagerPlugin, DetailsView, NavigationPane, Toolbar } from "@syncfusion/ej2-vue-filemanager";

Vue.use(FileManagerPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-filemanager id="file-manager" :showFileExtension="showFileExtension" :height="height" :ajaxSettings="ajaxSettings" :fileLoad="onBeforeFileLoad" :fileOpen="onBeforeFileOpen">
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
            // Hides the file extension in File Manager
            showFileExtension: false,
            height: "375px"
        };
    },
    provide: {
            filemanager: [DetailsView, NavigationPane, Toolbar]
    },
    methods: {
        // File Manager's file beforeFileLoad function
        onBeforeFileLoad: function(args){
            console.log(args.fileDetails.name + " is loading");
        },
        // File Manager's file beforeFileOpen function
        onBeforeFileOpen: function(args){
            console.log(args.fileDetails.name + " is opened");
        }
    }

});