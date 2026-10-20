<template>
  <div>
    <ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px"
      :uploadSettings="uploadSettings"></ejs-imageeditor>
    <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="loadInvalidImage">Load Invalid Image</ejs-button>
  </div>
</template>

<script setup>

import { ImageEditorComponent as EjsImageeditor } from "@syncfusion/ej2-vue-image-editor";
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { ref } from "vue";

const imageEditorObj = ref(null);
const uploadSettings = {
  minFileSize: 1024,     // Minimum file size in bytes (1 KB)
  maxFileSize: 90 * 1024  // Maximum file size in bytes (90 KB)
};
const loadInvalidImage = () => {
  imageEditorObj.value.ej2Instances.open('https://ej2.syncfusion.com/vue/documentation/image-editor/images/bridge.jpeg');
};

</script>

<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/image-editor/index.css";

#image-editor {
  width: 550px !important;
  height: 350px !important;
}
</style>