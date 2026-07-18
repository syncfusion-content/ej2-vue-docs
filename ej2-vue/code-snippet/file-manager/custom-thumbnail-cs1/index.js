
import Vue from "vue";
import { FileManagerPlugin, DetailsView, NavigationPane, Toolbar } from "@syncfusion/ej2-vue-filemanager";

Vue.use(FileManagerPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-filemanager id="file-manager" :height="height" :showThumbnail="showThumbnail" :ajaxSettings="ajaxSettings">
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
            showThumbnail: false,
            height: "375px"
        };
    },
    provide: {
            filemanager: [DetailsView, NavigationPane, Toolbar]
    }

});