<template>
  <div>
    <ejs-uploader ref="uploadObj" id='defaultfileupload' :selected="onSelect" name="UploadFiles" :autoUpload="autoUpload"
      :asyncSettings="path" :allowedExtensions="extensions"></ejs-uploader>
  </div>
</template>
<script setup>

import { UploaderComponent as EjsUploader } from '@syncfusion/ej2-vue-inputs';

const path = {
  saveUrl: 'https://services.syncfusion.com/vue/production/api/FileUploader/Save',
  removeUrl: 'https://services.syncfusion.com/vue/production/api/FileUploader/Remove'
};
const autoUpload = false;
const extensions = 'image/*';

const onSelect = (args) => {
  if (args.event.type === 'drop') {
    let allImages = ['png', 'jpg', 'jpeg', 'gif', 'tiff', 'bpg'];
    let files = args.filesData;
    let modifiedFiles = [];
    for (let file of files) {
      if (allImages.indexOf(file.type) === -1) {
        file.status = 'File type is not allowed';
        file.statusCode = '0';
      }
      modifiedFiles.push(file);
    }
    args.isModified = true;
  }
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