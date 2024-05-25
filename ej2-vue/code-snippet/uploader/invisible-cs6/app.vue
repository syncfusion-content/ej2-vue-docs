<template>
  <div id='upload_container' class='custom_progress'>
    <ejs-uploader ref="uploadObj" id='defaultfileupload' name="UploadFiles" :asyncSettings="path"></ejs-uploader>
  </div>
</template>
<script>
import { UploaderComponent } from '@syncfusion/ej2-vue-inputs';

export default {
  name: "App",
  components: {
    "ejs-uploader": UploaderComponent
  },
  data: function () {
    return {
      path: {
        saveUrl: 'https://services.syncfusion.com/vue/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/vue/production/api/FileUploader/Remove'
      }
    }
  }
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

.custom_progress .e-upload .e-upload-files .e-upload-file-list .e-file-container .e-progress-inner-wrap .e-upload-progress-bar.e-upload-progress {
  background: yellow;
  height: 4px;
}

.custom_progress .e-upload .e-upload-files .e-upload-file-list .e-file-container .e-progress-inner-wrap {
  height: 4px;
  background-color: lightblue;
}
</style>