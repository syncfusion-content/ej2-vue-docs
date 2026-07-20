
import Vue from "vue";
import { FileManagerPlugin } from "@syncfusion/ej2-vue-filemanager";

Vue.use(FileManagerPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-filemanager id="file-manager" :ajaxSettings="ajaxSettings" :height="height">
        </ejs-filemanager>
    </div>
`,

    data () {
        return {
           ajaxSettings:
            {
                url: "https://physical-service.syncfusion.com/api/FileManager/FileOperations",
                getImageUrl: "https://physical-service.syncfusion.com/api/FileManager/GetImage"
            },
            height: "375px"
        }
    }

});