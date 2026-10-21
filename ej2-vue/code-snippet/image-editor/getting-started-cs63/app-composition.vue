<template>
  <div>
    <ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px"
      :uploadSettings="uploadSettings"></ejs-imageeditor>
    <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="loadImage">Load PNG Image</ejs-button>
  </div>
</template>

<script setup>

import { ImageEditorComponent as EjsImageeditor } from "@syncfusion/ej2-vue-image-editor";
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { ref } from "vue";

const imageEditorObj = ref(null);
const uploadSettings = {
  allowedExtensions: ".png, .svg"
};
const loadImage = () => {
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