
import Vue from "vue";
import { FileManagerPlugin, DetailsView, NavigationPane, Toolbar } from "@syncfusion/ej2-vue-filemanager";

Vue.use(FileManagerPlugin);

new Vue({
	el: '#app',
	template: `
        <div id="app">
            <ejs-filemanager id="file-manager" :height="height" :allowMultiSelection="allowMultiSelection" :showItemCheckBoxes="showItemCheckBoxes" :ajaxSettings="ajaxSettings">
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
            allowMultiSelection: false,
            showItemCheckBoxes: false,
            height: "375px"
        };
    },
    provide: {
        filemanager: [DetailsView, NavigationPane, Toolbar]
    }
});