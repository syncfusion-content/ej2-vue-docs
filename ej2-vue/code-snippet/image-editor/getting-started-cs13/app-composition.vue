<template>
  <div>
    <ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :created="created"
      :toolbar="toolbar"></ejs-imageeditor>
    <div class="button-group">
      <ejs-button id="contains" cssClass="e-primary" @click="contains">Fit to Width (Aspect Ratio)</ejs-button>
      <ejs-button id="cover" cssClass="e-primary" @click="cover">Cover (Aspect Ratio)</ejs-button>
      <ejs-button id="stretch" cssClass="e-primary" @click="stretch">Stretch / Shrink</ejs-button>
    </div>
  </div>
</template>

<script setup>
import { ImageEditorComponent as EjsImageeditor } from "@syncfusion/ej2-vue-image-editor";
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { ref } from "vue";

const imageEditorObj = ref(null);
const toolbar = [];

const created = () => {
  const imageEditor = imageEditorObj.value?.ej2Instances;
  if (!imageEditor) return;
  imageEditor.open('https://ej2.syncfusion.com/vue/documentation/image-editor/images/bridge.jpeg');
};
const contains = () => {
  if (imageEditorObj.value) {
    imageEditorObj.value.open('https://ej2.syncfusion.com/vue/documentation/image-editor/images/bridge.jpeg', true, { backgroundColor: '', width: 550, height: null, isAspectRatio: true });
  }
};
const cover = () => {
  if (imageEditorObj.value) {
    imageEditorObj.value.open('https://ej2.syncfusion.com/vue/documentation/image-editor/images/bridge.jpeg', true, { backgroundColor: '', width: 550, height: 550, isAspectRatio: true });
  }
};
const stretch = () => {
  if (imageEditorObj.value) {
    imageEditorObj.value.open('https://ej2.syncfusion.com/vue/documentation/image-editor/images/bridge.jpeg', true, { backgroundColor: '', width: 350, height: 350, isAspectRatio: false });
  }
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-image-editor/styles/material.css";

#image-editor {
  width: 550px !important;
  height: 350px !important;
}

.button-group {
  margin-top: 10px;
}

.button-group .e-btn {
  margin-right: 5px;
}
</style>