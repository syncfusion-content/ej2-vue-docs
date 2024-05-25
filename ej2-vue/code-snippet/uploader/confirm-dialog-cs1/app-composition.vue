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
<script setup>

import { UploaderComponent as EjsUploader } from '@syncfusion/ej2-vue-inputs';
import { DialogComponent as EjsDialog } from '@syncfusion/ej2-vue-popups';
import { ref } from 'vue';

let removeFile = [];
const dialogObj = ref(null);
const uploadObj = ref(null);
const dlgContainer = "#dlgContainer";
const path = {
  saveUrl: 'https://services.syncfusion.com/vue/production/api/FileUploader/Save',
  removeUrl: 'https://services.syncfusion.com/vue/production/api/FileUploader/Remove'
};
const dialogContent = 'Confirm to remove the file?';
const width = '250px';

const onremove = (args) => {
  removeFile = [];
  args.cancel = true;
  removeFile.push(args.filesData);
  dialogObj.value.ej2Instances.show();
};
const dlgButtonClick = () => {
  dialogObj.value.ej2Instances.hide();
  uploadObj.value.ej2Instances.remove(removeFile[0], false, true);
  removeFile = [];
};
const cancelClick = () => {
  dialogObj.value.ej2Instances.hide()
};
const dlgButtons = [{ click: dlgButtonClick, buttonModel: { content: 'OK', isPrimary: true } },
{ click: cancelClick, buttonModel: { content: 'Cancel' } }];

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
}
</style>