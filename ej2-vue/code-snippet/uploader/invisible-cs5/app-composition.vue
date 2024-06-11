<template>
  <div>
    <ejs-uploader ref="uploadObj" id='defaultfileupload' name="UploadFiles" :buttons="buttons" :autoUpload="autoUpload"
      :asyncSettings="path"></ejs-uploader>
  </div>
</template>
<script setup>

import { UploaderComponent as EjsUploader } from '@syncfusion/ej2-vue-inputs';
import { createElement } from '@syncfusion/ej2-base';

let uploadEle = createElement('span', { className: 'upload e-icons' });
uploadEle.innerHTML = 'Upload All';
let clearEle = createElement('span', { className: 'remove e-icons' });
clearEle.innerHTML = 'Clear All';

const path = {
  saveUrl: 'https://services.syncfusion.com/vue/production/api/FileUploader/Save',
  removeUrl: 'https://services.syncfusion.com/vue/production/api/FileUploader/Remove'
};
const autoUpload = false;
const buttons = {
  browse: 'Choose file',
  clear: clearEle,
  upload: uploadEle
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

.e-upload .e-upload-actions .e-file-clear-btn,
.e-upload .e-upload-actions .e-file-upload-btn {
  -webkit-tap-highlight-color: transparent;
  background-color: #ddd;
  border-color: #c3c3c3;
  color: #000000;
  box-shadow: none;
  width: 50%;
  margin: 0;
  text-transform: none;
  padding: 8px 0;
}

.upload::before {
  content: '\e60f';
  position: relative;
  font-size: 10px;
  right: 10px;
}

.remove::before {
  content: '\e932';
  position: relative;
  font-size: 10px;
  right: 10px;
}

.e-upload .e-upload-actions {
  width: 100%;
}
</style>