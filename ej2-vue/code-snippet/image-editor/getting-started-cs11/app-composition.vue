<template>
  <div>
    <ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :created="created"
      :toolbar="toolbar" :showQuickAccessToolbar="false"></ejs-imageeditor>
    <div class="button-group">
      <ejs-button cssClass="e-img-button" id="text" :isPrimary="true" v-on:click="drawText" :disabled="isButtonDisabled">Draw Text</ejs-button>
      <div class="e-btn-group">
        <input type="checkbox" id="checkbold" @change="toggleFontStyle('bold', $event.target.checked)" />
        <label class="e-btn" for="checkbold"><span class="e-icons e-bold"></span>Bold</label>
        <input type="checkbox" id="checkitalic" @change="toggleFontStyle('italic', $event.target.checked)" />
        <label class="e-btn" for="checkitalic"><span class="e-icons e-italic"></span>Italic</label>
        <input type="checkbox" id="checkline" @change="toggleFontStyle('underline', $event.target.checked)" />
        <label class="e-btn" for="checkline"><span class="e-icons e-underline"></span>Underline</label>
        <input type="checkbox" id="checkstrikethrough" @change="toggleFontStyle('strikethrough', $event.target.checked)" />
        <label class="e-btn" for="checkstrikethrough"><span class="e-icons e-strikethrough"></span>Strikethrough</label>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ImageEditorComponent as EjsImageeditor } from "@syncfusion/ej2-vue-image-editor";
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { Browser } from "@syncfusion/ej2-base";
import { ref } from "vue";

const imageEditorObj = ref(null);
const toolbar = [];
const isButtonDisabled = ref(false);
const created = () => {
  const imageEditor = imageEditorObj.value?.ej2Instances;
  if (!imageEditor) return;
  let imageUrl = Browser.isDevice
    ? "https://ej2.syncfusion.com/vue/documentation/image-editor/images/flower.jpeg"
    : "https://ej2.syncfusion.com/vue/documentation/image-editor/images/bridge.jpeg";
  imageEditor.open(imageUrl);
};
const drawText = () => {
  if (!isButtonDisabled.value) {
    let dimension = imageEditorObj.value.ej2Instances.getImageDimension();
    imageEditorObj.value.ej2Instances.drawText(dimension.x, dimension.y, 'Syncfusion');
    isButtonDisabled.value = true;
  }
};
const toggleFontStyle = (style, isChecked) => {
  let shapes = imageEditorObj.value.getShapeSettings();
  if (shapes && shapes[0]) {
    if (isChecked) {
      if (!shapes[0].fontStyle.includes(style)) {
        shapes[0].fontStyle.push(style);
      }
    } else {
      shapes[0].fontStyle = shapes[0].fontStyle.filter(item => item !== style);
    }
    imageEditorObj.value.updateShape(shapes[0]);
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

#text {
  margin-bottom: 5px;
  margin-right: 10px;
}

.button-group {
  margin-top: 10px;
}

.button-group .e-btn .e-icons {
  margin-right: 5px;
}
</style>