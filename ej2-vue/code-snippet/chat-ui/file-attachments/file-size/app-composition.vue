<template>
  <div id='container' style="height: 380px; width: 450px; margin: 0 auto;">
    <br>
    <ejs-chatui :user="currentUser" :enableAttachments="true" :attachmentSettings="attachmentSettings"></ejs-chatui>
  </div>
</template>

<script setup>
import { ChatUIComponent as EjsChatui } from "@syncfusion/ej2-vue-interactive-chat";
const currentUser = {
  id: "user1",
  user: "Albert"
};
const attachmentSettings = {
  saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
  removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove',
  maxFileSize: 4000000
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
</style>
