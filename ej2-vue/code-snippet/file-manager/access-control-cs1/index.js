
import Vue from "vue";
import { FileManagerPlugin, DetailsView, NavigationPane, Toolbar } from "@syncfusion/ej2-vue-filemanager";

Vue.use(FileManagerPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-filemanager id="file-manager"  :ajaxSettings="ajaxSettings">
        </ejs-filemanager>
    </div>
`,

    data () {
        return {
             ajaxSettings:
            {
                url: "https://ej2-aspcore-service.azurewebsites.net/api/FileAccess/FileOperations",
                getImageUrl: "https://ej2-aspcore-service.azurewebsites.net/api/FileAccess/GetImage",
                uploadUrl: "https://ej2-aspcore-service.azurewebsites.net/api/FileAccess/Upload",
                downloadUrl: "https://ej2-aspcore-service.azurewebsites.net/api/FileAccess/Download"
            },
        };
    },
    provide: {
            filemanager: [DetailsView, NavigationPane, Toolbar]
    }

});