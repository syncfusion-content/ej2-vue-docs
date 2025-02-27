
import Vue from "vue";
import { UploaderPlugin } from '@syncfusion/ej2-vue-inputs';
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { DialogPlugin } from '@syncfusion/ej2-vue-popups';
import { FileManagerPlugin, NavigationPane, Toolbar, DetailsView, FileManagerComponent } from "@syncfusion/ej2-vue-filemanager";

Vue.use(FileManagerPlugin);
Vue.use(DialogPlugin);
Vue.use(UploaderPlugin);
Vue.use(ButtonPlugin);

let hostUrl = 'https://ej2-aspcore-service.azurewebsites.net/';


new Vue({
	el: '#app',
	template: `
    <div>
        <div class="control-section">
            <div id='container' class="fileupload">
                <ejs-uploader ref="uploadObj" id='defaultfileupload' name="UploadFiles">
                </ejs-uploader>
                <ejs-button id="openBtn" v-on:click.native="btnClick">Browse...</ejs-button>
            </div>
            <div id='target' class="control-section">
                <ejs-dialog ref="uploadDialog" id="dialog" v-bind:visible="false" :header='dialogHeader' :animationSettings='animationSettings' :showCloseIcon='showCloseIcon' :open="dialogOpen" :close="dialogClose" :target='target'
                :width='dialogWidth'>
                    <ejs-filemanager ref="filemanagerObj" :height="height" id="filemanager" :ajaxSettings='ajaxSettings' v-bind:allowMultiSelection="false" :fileOpen="onFileOpen" >
                    </ejs-filemanager>
                </ejs-dialog>
            </div>
        </div>
    </div>
`,

    data () {
        return {
            dialogHeader: 'Open',
            showCloseIcon: true,
            target: '#target',
            animationSettings: { effect: 'None' },
            dialogWidth: '850px',
            height: "375px",
            ajaxSettings:  {
                url: hostUrl + 'api/FileManager/FileOperations',
                getImageUrl: hostUrl + 'api/FileManager/GetImage',
                uploadUrl: hostUrl + 'api/FileManager/Upload',
                downloadUrl: hostUrl + 'api/FileManager/Download'
            }
        };
    },
    provide: {
            filemanager: [DetailsView, NavigationPane, Toolbar]
    },
    methods:{
        btnClick: function(event) {
            this.$refs.uploadDialog.show();
        },
        // Uploader will be hidden, if Dialog is opened
        dialogOpen: function() {
            var fileObj = this.$refs.filemanagerObj.ej2Instances;
            fileObj.refreshLayout();
            document.getElementById('container').style.display = 'none';
        },
        // Uploader will be shown, if Dialog is closed
        dialogClose: function() {
            var fileObj = this.$refs.filemanagerObj.ej2Instances;
            fileObj.path = "/";
            document.getElementById('container').style.display = 'block';
        },
        // File Manager's fileOpen event function
        onFileOpen: function(args) {
            let file = args.fileDetails;
            if (file.isFile) {
                args.cancel = true;
                this.$refs.uploadObj.files = [{name: file.name, size: file.size, type: file.type }];
                this.$refs.uploadDialog.hide();
            }
        }
    }

});