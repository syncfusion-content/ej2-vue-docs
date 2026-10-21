<template>
  <div>
    <ejs-uploader ref="uploadObj" id='defaultfileupload' name="UploadFiles" :asyncSettings="path"
      :sequentialUpload='sequentialUpload'></ejs-uploader>
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
      },
      sequentialUpload: true
    }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/uploader/index.css";
</style>