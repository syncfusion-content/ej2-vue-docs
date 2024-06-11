<template>
<div>
<ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :created="created" :shapeChanging="shapeChanging" :showQuickAccessToolbar=false :toolbar="toolbar"></ejs-imageeditor>
 <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="btnClick">Delete shape</ejs-button>
</div>
</template>

<script setup>

import { ImageEditorComponent as EjsImageeditor } from "@syncfusion/ej2-vue-image-editor";
import { ButtonComponent as EjsButton} from '@syncfusion/ej2-vue-buttons';
import { Browser } from "@syncfusion/ej2-base";
import { ref } from "vue";

const imageEditorObj = ref(null);
const toolbar = ['Annotate','Rectangle','Ellipse', 'Line', 'Arrow', 'Path'];
const id = '';

const created = () => {
    if (Browser.isDevice) {
        imageEditorObj.value.open('flower.png');
    } else {
        imageEditorObj.value.open('bridge.png');
    }
};

const shapeChanging = (event) => {
  if(event.action === 'select') {
    id = event.currentShapeSettings.id;
  }
};

const btnClick = () => {
  imageEditorObj.value.ej2Instances.deleteShape(id);
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