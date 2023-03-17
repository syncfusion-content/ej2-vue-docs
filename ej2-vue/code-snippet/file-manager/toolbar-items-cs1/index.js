
import Vue from "vue";
import { FileManagerPlugin, DetailsView, NavigationPane, Toolbar } from "@syncfusion/ej2-vue-filemanager";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";

Vue.use(FileManagerPlugin);
Vue.use(ButtonPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-button id="enable" cssClass="e-success">Enable New Folder toolbar item</ejs-button>
        <ejs-button id="disable" cssClass="e-danger">Disable New Folder toolbar item</ejs-button>
        <ejs-filemanager :created="onCreated" id="file-manager" ref="fileManagerinstance" :height="height" :ajaxSettings="ajaxSettings">
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
            view: "Details",
            height: "330px"
        };
    },
    provide: {
            filemanager: [DetailsView, NavigationPane, Toolbar]
    },
    methods: {
        onCreated: function(args){
            // Click event for enable button
            document.getElementById("enable").addEventListener('click', (event) => {
                // Enable new folder toolbar item
                this.$refs.fileManagerinstance.enableToolbarItems(["newfolder"]);
            });
            // Click event for disable button
            document.getElementById("disable").addEventListener('click', (event) => {
                // Disable new folder toolbar item
                this.$refs.fileManagerinstance.disableToolbarItems(["newfolder"]);
            });
        }
    }

});