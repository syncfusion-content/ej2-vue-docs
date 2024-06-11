<template>
    <div>
        <ejs-uploader ref="uploadObj" id='defaultfileupload' name="UploadFiles" :autoUpload="autoUpload"
            :asyncSettings="path"></ejs-uploader>
        <div id="btnContainer">
            <span style='padding-left: 40px;'>
                <button id='first' style='margin-top: 30px' class='e-btn e-control'>Upload first file</button>
            </span>
            <span style=' padding-left: 40px;'>
                <button style='margin-top: 30px' id='full' class='e-btn e-control'>Upload all files</button>
            </span>
        </div>
    </div>
</template>
<script setup>

import { UploaderComponent as EjsUploader } from '@syncfusion/ej2-vue-inputs';
import { onMounted, ref } from 'vue';

const uploadObj = ref(null);

const path = {
    saveUrl: 'https://services.syncfusion.com/vue/production/api/FileUploader/Save',
    removeUrl: 'https://services.syncfusion.com/vue/production/api/FileUploader/Remove'
};
const autoUpload = false;

onMounted(() => {
    document.getElementById('first').onclick = () => {
        uploadObj.value.upload(uploadObj.value.getFilesData()[0]);
    };

    document.getElementById('full').onclick = () => {
        uploadObj.value.upload(uploadObj.value.getFilesData());
    };
});
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";

#container {
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

.e-upload-actions {
    display: none;
}

.e-btn {
    text-transform: none;
}
</style>