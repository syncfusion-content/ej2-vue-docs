<template>
  <div>
    <ejs-uploader ref="uploadObj" id='defaultfileupload' :removing="onremove" name="UploadFiles"
      :asyncSettings="path"></ejs-uploader>
    <div id="dlgContainer">
      <ejs-dialog ref="dialogObj" :buttons="dlgButtons" :target="dlgContainer" :visible="false" :width='width'
        :content='dialogContent'>
      </ejs-dialog>
    </div>
  </div>
</template>
<script>
import { UploaderComponent } from '@syncfusion/ej2-vue-inputs';
import { DialogComponent } from '@syncfusion/ej2-vue-popups';

export default {
  name: "App",
  components: {
    "ejs-uploader": UploaderComponent,
    "ejs-dialog": DialogComponent
  },
  data: function () {
    return {
      dlgContainer: "#dlgContainer",
      path: {
        saveUrl: 'https://services.syncfusion.com/vue/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/vue/production/api/FileUploader/Remove'
      },
      allowedExtensions: 'image/*',
      dialogContent: 'Confirm to remove the file?',
      width: '250px',
      removeFile: [],
      dlgButtons: [{ click: this.dlgButtonClick, buttonModel: { content: 'OK', isPrimary: true } },
      { click: this.cancelClick, buttonModel: { content: 'Cancel' } }]
    }
  },
  methods: {
    onremove: function (args) {
      this.removeFile = [];
      args.cancel = true;
      this.removeFile.push(args.filesData);
      this.$refs.dialogObj.show();
    },
    dlgButtonClick: function () {
      this.$refs.dialogObj.hide();
      this.$refs.uploadObj.remove(this.removeFile[0], false, true);
      this.removeFile = [];
    },
    cancelClick: function () {
      this.$refs.dialogObj.hide()
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

#dlgContainer {
  min-height: 350px;
  width: 100%;
}</style>