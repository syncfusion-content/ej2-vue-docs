
import Vue from "vue";
import { FileManagerPlugin, DetailsView, NavigationPane, Toolbar } from "@syncfusion/ej2-vue-filemanager";

Vue.use(FileManagerPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-filemanager id="file-manager" :enablePersistence="enablePersistence" :ajaxSettings="ajaxSettings" :success="onAjaxSuccess" :failure="onAjaxFailure">
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
            enablePersistence: true
        };
    },
    provide: {
            filemanager: [DetailsView, NavigationPane, Toolbar]
    },
    methods: {
        // File Manager's file onSuccess function
        onAjaxSuccess(args){
            console.log("Ajax request successful");
        },
        // File Manager's file onError function
        onAjaxFailure(args){
            console.log("Ajax request has failed");
        }
    }

});