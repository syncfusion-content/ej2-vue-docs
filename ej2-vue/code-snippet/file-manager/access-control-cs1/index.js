
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
                url: "https://physical-service.syncfusion.com/api/FileManagerAccess/FileOperations",
                getImageUrl: "https://physical-service.syncfusion.com/api/FileManagerAccess/GetImage",
                uploadUrl: "https://physical-service.syncfusion.com/api/FileManagerAccess/Upload",
                downloadUrl: "https://physical-service.syncfusion.com/api/FileManagerAccess/Download"
            },
            height: "375px"
        };
    },
    provide: {
            filemanager: [DetailsView, NavigationPane, Toolbar]
    }

});