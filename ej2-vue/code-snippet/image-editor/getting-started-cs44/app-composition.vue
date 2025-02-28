<template>
  <div>
    <ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px"
      :created="created"></ejs-imageeditor>
  </div>
</template>

<script setup>

import { ImageEditorComponent as EjsImageeditor } from "@syncfusion/ej2-vue-image-editor";
import { Browser } from "@syncfusion/ej2-base";
import { ref } from "vue";

const imageEditorObj = ref(null);
const fontFamily = {
  default: 'Arial', items: [{ id: 'arial', text: 'Arial' }, { id: 'brush script mt', text: 'Brush Script MT' },
  { id: 'papyrus', text: 'Papyrus' }, { id: 'times new roman', text: 'Times New Roman' }, { id: 'courier new', text: 'Courier New' }]
};

const created = () => {
  const imageEditor = imageEditorObj.value?.ej2Instances;
  if (!imageEditor) return;
  const imageUrl = Browser.isDevice
    ? "https://ej2.syncfusion.com/react/demos/src/image-editor/images/flower.png"
    : "https://ej2.syncfusion.com/react/demos/src/image-editor/images/bridge.png";
  imageEditor.open(imageUrl);
  imageEditor.fontFamily = fontFamily;
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