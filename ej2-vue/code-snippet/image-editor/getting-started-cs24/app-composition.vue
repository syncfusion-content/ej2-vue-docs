<template>
<div>
<ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :created="created" :toolbar="toolbar"></ejs-imageeditor>
 <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="drawShpae">Draw shape</ejs-button>
 <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="deleteShape">Delete shape</ejs-button>
</div>
</template>

<script setup>

import { ImageEditorComponent as EjsImageeditor } from "@syncfusion/ej2-vue-image-editor";
import { ButtonComponent as EjsButton} from '@syncfusion/ej2-vue-buttons';
import { Browser } from "@syncfusion/ej2-base";
import { ref } from "vue";

const imageEditorObj = ref(null);
const toolbar = [];

const created = () => {
    const imageEditor = imageEditorObj.value?.ej2Instances;
    if (!imageEditor) return;
    let imageUrl = Browser.isDevice
        ? "https://ej2.syncfusion.com/vue/documentation/image-editor/images/flower.jpeg"
        : "https://ej2.syncfusion.com/vue/documentation/image-editor/images/bridge.jpeg";
    imageEditor.open(imageUrl);
};

const drawShpae = () => {
  let dimension = imageEditorObj.value.ej2Instances.getImageDimension();
  imageEditorObj.value.ej2Instances.drawEllipse(dimension.x +100, dimension.y + 100);
};

const deleteShape = () => {
  imageEditorObj.value.ej2Instances.deleteShape("shape_1");
};

</script>

<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/image-editor/index.css";

#image-editor {
    width: 550px !important;
    height: 350px !important;
}
</style>