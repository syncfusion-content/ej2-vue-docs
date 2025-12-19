
import Vue from "vue";
import { FileManagerPlugin, DetailsView, NavigationPane, Toolbar } from "@syncfusion/ej2-vue-filemanager";

Vue.use(FileManagerPlugin);

const demoNavigationPaneTemplate = Vue.component("navigationPaneTemplate", {
  template: `
    <div class="e-nav-pane-node" style="display:inline-flex;align-items:center;">
      <span class="folder-name" style="margin-left:8px;">{{ data?.name }}</span>
    </div>
  `,
  data() {
    return { data: {} };
  }
});
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-filemanager id="file-manager" :height="height" :navigationPaneTemplate="navigationPaneTemplate" :ajaxSettings="ajaxSettings">
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
            navigationPaneTemplate: function () {
                return { template: demoNavigationPaneTemplate };
            }
        };
    },
    provide: {
        filemanager: [DetailsView, NavigationPane, Toolbar]
    }

});