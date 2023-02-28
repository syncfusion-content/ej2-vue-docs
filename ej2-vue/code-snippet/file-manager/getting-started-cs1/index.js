
import Vue from "vue";
import { FileManagerPlugin } from "@syncfusion/ej2-vue-filemanager";

Vue.use(FileManagerPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-filemanager id="file-manager" :ajaxSettings="ajaxSettings">
        </ejs-filemanager>
    </div>
`,

    data () {
        return {
           ajaxSettings:
            {
                url: "https://ej2-aspcore-service.azurewebsites.net/api/FileManager/FileOperations"
            }
        }
    }

});