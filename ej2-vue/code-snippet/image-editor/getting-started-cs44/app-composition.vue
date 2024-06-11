<template>
<div>
<ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :created="created" :toolbar="toolbar"></ejs-imageeditor>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="brushscriptBtn">Brush Script MT</ejs-button>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="papyrusBtn">Papyrus</ejs-button>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="timesnewromanBtn">Times New Roman</ejs-button>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="couriernewBtn">Courier New</ejs-button>
</div>
</template>

<script setup>

import { ImageEditorComponent as EjsImageeditor } from "@syncfusion/ej2-vue-image-editor";
import { ButtonComponent as EjsButton} from '@syncfusion/ej2-vue-buttons';
import { Browser } from "@syncfusion/ej2-base";
import { ref } from "vue";

const imageEditorObj = ref(null);
const toolbar = [];
const fontFamily = { default: 'Arial', items: [{id: 'arial', text: 'Arial'}, {id: 'brush script mt', text: 'Brush Script MT'},
{id: 'papyrus', text: 'Papyrus'}, {id: 'times new roman', text: 'Times New Roman'}, {id: 'courier new', text: 'Courier New'}] };

const created = () => {
    if (Browser.isDevice) {
        imageEditorObj.value.open('flower.png');
    } else {
        imageEditorObj.value.open('bridge.png');
    }
};

const couriernewBtn = () => {
  let dimension = imageEditorObj.value.ej2Instances.getImageDimension();
  imageEditorObj.value.ej2Instances.drawText(dimension.x, dimension.y, 'EnterText', 'Courier New');
};

const brushscriptBtn = () => {
  let dimension = imageEditorObj.value.ej2Instances.getImageDimension();
  imageEditorObj.value.ej2Instances.drawText(dimension.x, dimension.y, 'EnterText', 'Brush Script MT');
};

const papyrusBtn = () => {
  let dimension = imageEditorObj.value.ej2Instances.getImageDimension();
  imageEditorObj.value.ej2Instances.drawText(dimension.x, dimension.y, 'EnterText', 'Papyrus');
};

const timesnewromanBtn = () => {
  let dimension = imageEditorObj.value.ej2Instances.getImageDimension();
  imageEditorObj.value.ej2Instances.drawText(dimension.x,dimension.y, 'EnterText', 'Times New Roman');
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