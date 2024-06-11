<template>
    <div class="col-lg-8 control-section uploader chunk">
        <div class="control_wrapper">
            <ejs-uploader id='validation' name="UploadFiles" :asyncSettings="path" ref="uploadObj" minFileSize=10000
                maxFileSize=4000000>
            </ejs-uploader>
        </div>
    </div>
</template>
<script setup>

import { UploaderComponent as EjsUploader } from '@syncfusion/ej2-vue-inputs';

const path = {
    saveUrl: 'https://services.syncfusion.com/vue/production/api/FileUploader/Save',
    removeUrl: 'https://services.syncfusion.com/vue/production/api/FileUploader/Remove'
};

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