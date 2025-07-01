<template>
  <div>
    <ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :toolbar="toolbar"
      :created="onCreated"></ejs-imageeditor>
    <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="btnClick">Draw Text</ejs-button>
    <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="undoClick">Undo</ejs-button>
    <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="redoClick">Redo</ejs-button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ImageEditorComponent as EjsImageeditor } from "@syncfusion/ej2-vue-image-editor";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { Browser } from "@syncfusion/ej2-base";

const imageEditorObj = ref(null);
const toolbar = [];

const onCreated = () => {
  const imageEditor = imageEditorObj.value?.ej2Instances;
  if (!imageEditor) return;
  const imageUrl = Browser.isDevice
    ? "https://ej2.syncfusion.com/vue/documentation/image-editor/images/flower.jpeg"
    : "https://ej2.syncfusion.com/vue/documentation/image-editor/images/bridge.jpeg";
  imageEditor.open(imageUrl);
};

const btnClick = () => {
  const imageEditor = imageEditorObj.value?.ej2Instances;
  if (imageEditor) {
    const dimension = imageEditor.getImageDimension();
    imageEditor.drawText(dimension.x, dimension.y);
  }
};

const undoClick = () => {
  imageEditorObj.value?.ej2Instances.undo();
};

const redoClick = () => {
  imageEditorObj.value?.ej2Instances.redo();
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
</style>