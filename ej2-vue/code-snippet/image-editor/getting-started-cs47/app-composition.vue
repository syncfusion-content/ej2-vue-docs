<template>
<div>
<ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :created="created" :toolbar="toolbar"></ejs-imageeditor>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="addRedact">Add Redact</ejs-button>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="updateRedact">Update Redact</ejs-button>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="selRedact">Select Redact</ejs-button>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="delRedact">Delete Redact</ejs-button>
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
const addRedact = () => {
  let dimension = imageEditorObj.value.ej2Instances.getImageDimension();
  imageEditorObj.value.ej2Instances.drawRedact(RedactType.Blur, dimension?.x, dimension.y, 200, 300);
};
const updateRedact = () => {
  let redacts = imageEditorObj.value.ej2Instances..getRedacts();
  if (redacts.length > 0) {
      redacts[redacts.length - 1].blurIntensity = 100;
      imageEditorObj.value.ej2Instances.updateRedact(redacts[redacts.length - 1]);
   }
};
const selRedact = () => {
    let redacts = imageEditorObj.value.ej2Instances.getRedacts();
    if (redacts.length > 0) {
        imageEditorObj.value.ej2Instances.selectRedact(redacts[redacts.length - 1].id);
    }
};
const delRedact = () => {
  let redacts = imageEditorObj.value.ej2Instances.getRedacts();
  if (redacts.length > 0) {
    imageEditorObj.value.ej2Instances.deleteRedact(redacts[redacts.length - 1].id);
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
</style>