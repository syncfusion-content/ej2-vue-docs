<template>
    <div class="col-lg-8 control-section uploader chunk">
        <div class="control_wrapper">
            <ejs-uploader id='validation' name="UploadFiles" :autoUpload="autoUpload" :asyncSettings="path" ref="uploadObj"
                :selected="onFileSelect">
            </ejs-uploader>
        </div>
    </div>
</template>
<script setup>

import { UploaderComponent as EjsUploader } from '@syncfusion/ej2-vue-inputs';
import { isNullOrUndefined, enableRipple } from '@syncfusion/ej2-base';
import {ref} from 'vue';

enableRipple(true);

const uploadObj=ref(null);
const path = {
    saveUrl: 'https://services.syncfusion.com/vue/production/api/FileUploader/Save',
    removeUrl: 'https://services.syncfusion.com/vue/production/api/FileUploader/Remove'
};
const autoUpload = false;


const onFileSelect = (args) => {
    let existingFiles = uploadObj.value.getFilesData();
    for (let i = 0; i < args.filesData.length; i++) {
        for (let j = 0; j < existingFiles.length; j++) {
            if (!isNullOrUndefined(args.filesData[i])) {
                if (existingFiles[j].name == args.filesData[i].name) {
                    args.filesData.splice(i, 1);
                }
            }
        }
    }
    existingFiles = existingFiles.concat(args.filesData);
    args.modifiedFilesData = existingFiles;
    args.isModified = true;
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";

#container {
    visibility: hidden;
    padding-left: 5%;
    width: 100%;
}

#loader {
    color: #008cff;
    font-family: 'Helvetica Neue', 'calibiri';
    font-size: 14px;
    height: 40px;
    left: 45%;
    position: absolute;
    top: 45%;
    width: 30%;
}
</style>