<template>
    <div>
        <div class="control-section">
            <div id='container' class="fileupload">
                <ejs-uploader ref="uploadObj" id='defaultfileupload' name="UploadFiles">
                </ejs-uploader>
                <ejs-button id="openBtn" v-on:click="btnClick">Browse...</ejs-button>
            </div>
            <div id='target' class="control-section">
                <ejs-dialog
                    ref="uploadDialog"
                    id="dialog"
                    v-bind:visible="false"
                    :header="dialogHeader"
                    :animationSettings="animationSettings"
                    :showCloseIcon="showCloseIcon"
                    :open="dialogOpen"
                    :close="dialogClose"
                    :target="target"
                    :width="dialogWidth">
                    <div>
                        <ejs-filemanager ref="filemanagerObj" id="filemanager" :ajaxSettings='ajaxSettings' v-bind:allowMultiSelection="false" :fileOpen="onFileOpen" ></ejs-filemanager>
                    <div>
                </ejs-dialog>
            </div>
        </div>
    </div>
</template>
<script>

import { UploaderComponent } from '@syncfusion/ej2-vue-inputs';
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { DialogComponent } from '@syncfusion/ej2-vue-popups';
import { FileManagerComponent, NavigationPane, Toolbar, DetailsView } from "@syncfusion/ej2-vue-filemanager";

let hostUrl = 'https://ej2-aspcore-service.azurewebsites.net/';

export default {
name: "App",
components: {
    "ejs-uploader":UploaderComponent,
    "ejs-button":ButtonComponent,
    "ejs-dialog":DialogComponent,
    "ejs-filemanager":FileManagerComponent,
    },
    data () {
        return {
            dialogHeader: 'Open',
            showCloseIcon: true,
            target: '#target',
            animationSettings: { effect: 'None' },
            dialogWidth: '850px',
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
        btnClick: function() {
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
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-icons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-layouts/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-grids/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-filemanager/styles/tailwind3.css";

   .fileupload {
        max-width: 500px;
        margin: auto;
    }
    #openBtn {
        position: absolute;
        top: 25px;
        margin-left: 13px;
        margin-top: 91px;
    }
    #target {
        height: 550px;
    }
    #dialog {
        top: 20px !important;
        max-height: 500px !important;
        left: 30px !important;
    }
    .fileupload .e-upload .e-file-select-wrap .e-css.e-btn {
        visibility:hidden;
    }
</style>
