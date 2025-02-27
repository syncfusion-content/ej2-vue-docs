import Vue from "vue";
import { FileManagerPlugin, DetailsView, NavigationPane, Toolbar } from "@syncfusion/ej2-vue-filemanager";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";

Vue.use(FileManagerPlugin);
Vue.use(ButtonPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-button id="enable" cssClass="e-success" v-on:click.native='btnClick1'>Enable New Folder toolbar item</ejs-button>
        <ejs-button id="disable" cssClass="e-danger" v-on:click.native='btnClick2'>Disable New Folder toolbar item</ejs-button>
        <ejs-filemanager id="file-manager" ref="fileManagerinstance" :height="height" :ajaxSettings="ajaxSettings">
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
            height: "375px"
        };
    },
    provide: {
        filemanager: [DetailsView, NavigationPane, Toolbar]
    },
    methods: {
        btnClick1: function (event) {
            // Enable new folder toolbar item
            this.$refs.fileManagerinstance.enableToolbarItems(["newfolder"]);
        },
        // Click event for disable button
        btnClick2: function (event) {
            // Disable new folder toolbar item
            this.$refs.fileManagerinstance.disableToolbarItems(["newfolder"]);
        }
    }
});
