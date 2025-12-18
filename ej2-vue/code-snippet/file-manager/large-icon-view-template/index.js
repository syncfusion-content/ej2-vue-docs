
import Vue from "vue";
import { FileManagerPlugin, DetailsView, NavigationPane, Toolbar } from "@syncfusion/ej2-vue-filemanager";

Vue.use(FileManagerPlugin);
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-filemanager id="file-manager" :height="height" :cssClass="cssClass" :largeIconsTemplate="'largeTpl'" :ajaxSettings="ajaxSettings">
            <template v-slot:largeTpl="{ data }">
                <div style="display: flex; flex-direction: column; gap: 2px;">
                    <span><strong>{{ data.name }}</strong></span>
                    <span><strong>Type: </strong>{{ data.isFile ? 'File' : 'Folder' }}</span>
                    <span><strong>Modified: </strong>
                        <template v-if="data.dateModified">
                            {{
                                new Date(data.dateModified).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                                })
                            }}
                        </template>
                    </span>
                </div>
            </template>
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
            height: "375px",
            cssClass: 'fm_template'
        };
    },
    provide: {
        filemanager: [DetailsView, NavigationPane, Toolbar]
    }

});