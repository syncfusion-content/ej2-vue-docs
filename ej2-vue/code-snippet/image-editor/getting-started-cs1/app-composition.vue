<template>
<div>
<ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :created="created" :toolbar="toolbar"></ejs-imageeditor>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="btnClick">Text</ejs-button>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="outlineText">Text Outline</ejs-button>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="bgColor">Background Color</ejs-button>
</div>
</template>

<script setup>

import { ImageEditorComponent as EjsImageeditor} from "@syncfusion/ej2-vue-image-editor";
import { ButtonComponent as EjsButton} from '@syncfusion/ej2-vue-buttons';
import { Browser } from "@syncfusion/ej2-base";
import { ref } from "vue";

const imageEditorObj = ref(null);
const toolbar = [];
const created = () => {
    if (Browser.isDevice) {
        imageEditorObj.value.open('flower.jpeg');
    } else {
        imageEditorObj.value.open('bridge.jpeg');
    }
};
const btnClick = () => {
  let dimension = imageEditorObj.value.ej2Instances.getImageDimension();
  imageEditorObj.value.ej2Instances.drawText(dimension.x, dimension.y, 'Syncfusion');
};
const outlineText = () => {
  let dimension = imageEditorObj.value.ej2Instances.getImageDimension();
  imageEditorObj.value.ej2Instances.drawText(dimension.x, dimension.y+100, 'Syncfusion', 'Arial', 70, false, false, '', false, null, '', 'green', 8);
};
const bgColor = () => {
  let dimension = imageEditorObj.value.ej2Instances.getImageDimension();
  imageEditorObj.value.ej2Instances.drawText(dimension.x, dimension.y+150, 'Syncfusion', 'Arial', 70, false, false, '', false, null, 'red', '', null);
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