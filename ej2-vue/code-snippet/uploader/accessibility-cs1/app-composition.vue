<template>
  <div>
    <ejs-uploader ref="uploadObj" id='defaultfileupload' name="UploadFiles" :asyncSettings="path"></ejs-uploader>
  </div>
</template>
<script setup>

import { UploaderComponent as EjsUploader} from '@syncfusion/ej2-vue-inputs';

const path = {
  saveUrl: 'https://services.syncfusion.com/vue/production/api/FileUploader/Save',
  removeUrl: 'https://services.syncfusion.com/vue/production/api/FileUploader/Remove'
};

</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/uploader/index.css";
</style>