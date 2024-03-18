<template>
  <div>
    <ejs-uploader ref="uploadObj" id='defaultfileupload' name="UploadFiles" :asyncSettings= "path" :success= "onUploadSuccess" :failure= "onUploadFailed" ></ejs-uploader>
  </div>
</template>
<script setup>
import { UploaderComponent as EjsUploader } from '@syncfusion/ej2-vue-inputs';

const path =  {
                saveUrl: 'https://services.syncfusion.com/vue/production/api/FileUploader/Save',
                removeUrl: 'https://services.syncfusion.com/vue/production/api/FileUploader/Remove'
            };
const onUploadSuccess = (() => {
      console.log('Uploaded successfully');
});
const onUploadFailed = (() => {
      console.log('Upload fails');
});
      
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
</style>