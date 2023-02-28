
import Vue from "vue";
import { FileManagerPlugin, DetailsView, NavigationPane, Toolbar } from "@syncfusion/ej2-vue-filemanager";

Vue.use(FileManagerPlugin);


new Vue({
	el: '#app',
	template: `
<div id="app">
    <div class="wrapper">
     <ejs-filemanager id="overview_filemanager" :ajaxSettings="ajaxSettings" :view="view">
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
            // Initial view of File Manager is set to details view
            view:"Details"
        }
    },
    //Injecting additional modules in FileManager
    provide: {
            filemanager: [DetailsView, NavigationPane, Toolbar]
    }

});