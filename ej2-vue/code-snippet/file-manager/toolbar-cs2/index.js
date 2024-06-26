
import Vue from "vue";
import { FileManagerPlugin, DetailsView, NavigationPane, Toolbar } from "@syncfusion/ej2-vue-filemanager";

Vue.use(FileManagerPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-filemanager id="file-manager"  ref="file_instance" :toolbarSettings="toolbarSettings" :ajaxSettings="ajaxSettings" :toolbarClick="toolbarClick" :toolbarCreate="toolbarCreate">
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
            //Custom item added along with default items
            toolbarSettings: {items: ["NewFolder", "Custom", "Upload", "Delete", "Download", "Rename", "SortBy", "Refresh", "Selection", "View", "Details"]}
        };
    },
    provide: {
            filemanager: [DetailsView, NavigationPane, Toolbar]
    },
    methods: {
        // Alert displayed for custom toolbar item in toolbarClick event
        toolbarClick: function(args){
            if (args.item.text === "Custom") {
                alert("You have clicked custom toolbar item")
            }
        },
        toolbarCreate: function(args) {
             for(let i: number = 0; i<args.items.length; i++) {
                if(args.items[i].id === this.$refs.file_instance.$el.id +"_tb_custom") {
                    args.items[i].prefixIcon= "e-icons e-fe-tick";
                }
            }
        }
    }

});