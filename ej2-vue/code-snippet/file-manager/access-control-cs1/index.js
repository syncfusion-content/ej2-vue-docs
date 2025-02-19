
import Vue from "vue";
import { FileManagerPlugin, DetailsView, NavigationPane, Toolbar } from "@syncfusion/ej2-vue-filemanager";

Vue.use(FileManagerPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-filemanager id="file-manager"  :ajaxSettings="ajaxSettings" :height="height">
        </ejs-filemanager>
    </div>
`,

    data () {
        return {
             ajaxSettings:
            {
                url: "https://ej2-aspcore-service.azurewebsites.net/api/FileManagerAccess/FileOperations",
                getImageUrl: "https://ej2-aspcore-service.azurewebsites.net/api/FileManagerAccess/GetImage",
                uploadUrl: "https://ej2-aspcore-service.azurewebsites.net/api/FileManagerAccess/Upload",
                downloadUrl: "https://ej2-aspcore-service.azurewebsites.net/api/FileManagerAccess/Download"
            },
            height: "330px"
        };
    },
    provide: {
            filemanager: [DetailsView, NavigationPane, Toolbar]
    }

});