<template>
    <div>
        <div class="control-section">
            <div id='container' class="fileupload">
                <ejs-uploader ref="uploadObj" id='defaultfileupload' name="UploadFiles">
                </ejs-uploader>
                <ejs-button id="openBtn" v-on:click="btnClick">Browse...</ejs-button>
            </div>
            <div id='target' class="control-section">
                <ejs-dialog ref="uploadDialog" id="dialog" v-bind:visible="false" :header='dialogHeader' :animationSettings='animationSettings' :showCloseIcon='showCloseIcon' :open="dialogOpen" :close="dialogClose" :target='target'
                :width='dialogWidth'>
                    <ejs-filemanager ref="filemanagerObj" id="filemanager" :ajaxSettings='ajaxSettings' v-bind:allowMultiSelection="false" :fileOpen="onFileOpen" >
                    </ejs-filemanager>
                </ejs-dialog>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { provide, ref } from "vue";

    import { UploaderComponent as EjsUploader } from '@syncfusion/ej2-vue-inputs';
    import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
    import { DialogComponent as EjsDialog} from '@syncfusion/ej2-vue-popups';
    import { FileManagerComponent as EjsFilemanager, NavigationPane, Toolbar, DetailsView } from "@syncfusion/ej2-vue-filemanager";

    const uploadDialog = ref(null);
    const filemanagerObj = ref(null);
    const uploadObj = ref(null);
    let hostUrl = 'https://ej2-aspcore-service.azurewebsites.net/';
    const ajaxSettings = {
        url: hostUrl + 'api/FileManager/FileOperations',
        getImageUrl: hostUrl + 'api/FileManager/GetImage',
        uploadUrl: hostUrl + 'api/FileManager/Upload',
        downloadUrl: hostUrl + 'api/FileManager/Download'
    };
    const dialogHeader = 'Open';
    const showCloseIcon = true;
    const target = '#target';
    const animationSettings = { effect: 'None' };
    const dialogWidth = '850px';
    const btnClick = function() {
        uploadDialog.value.show();
    };
    const dialogOpen = function() {
        var fileObj = filemanagerObj.value.ej2Instances;
        fileObj.refreshLayout();
        document.getElementById('container').style.display = 'none';
    };
    const dialogClose = function() {
        var fileObj = filemanagerObj.value.ej2Instances;
        fileObj.path = "/";
        document.getElementById('container').style.display = 'block';
    };
    const onFileOpen = function(args) {
        let file = args.fileDetails;
        if (file.isFile) {
            args.cancel = true;
            uploadObj.value.files = [{name: file.name, size: file.size, type: file.type }];
            uploadDialog.value.hide();
        }
    };

    provide('filemanager',  [DetailsView, NavigationPane, Toolbar]);

</script>

<style>
    @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-icons/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-layouts/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-grids/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-vue-filemanager/styles/material.css";

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
</style>