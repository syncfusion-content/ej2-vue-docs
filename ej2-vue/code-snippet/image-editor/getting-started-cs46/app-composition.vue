<template>
    <div>
        <ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :created="created"></ejs-imageeditor>
        <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="drawShapes">Draw Shapes</ejs-button>
        <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="bringForward">Bring Forward</ejs-button>
        <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="sendBackward">Send Backward</ejs-button>
        <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="bringToFront">Bring To Front</ejs-button>
        <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="sendToBack">Send To Back</ejs-button>
    </div>
</template>

<script setup>

import { ImageEditorComponent as EjsImageeditor } from "@syncfusion/ej2-vue-image-editor";
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { Browser } from "@syncfusion/ej2-base";
import { ref } from "vue";

const imageEditorObj = ref(null);

const created = () => {
    const imageEditor = imageEditorObj.value?.ej2Instances;
    if (!imageEditor) return;
    let imageUrl = Browser.isDevice
        ? "https://ej2.syncfusion.com/vue/documentation/image-editor/images/flower.jpeg"
        : "https://ej2.syncfusion.com/vue/documentation/image-editor/images/bridge.jpeg";
    imageEditor.open(imageUrl);
};

const drawShapes = () => {
    let dimension = imageEditorObj.value.ej2Instances.getImageDimension();
    imageEditorObj.value.ej2Instances.drawRectangle(dimension.x + 10, dimension.y + 10, 150, 70, null, null, 'red');
    imageEditorObj.value.ej2Instances.drawRectangle(dimension.x + 20, dimension.y + 20, 150, 70, null, null, 'red');
    imageEditorObj.value.ej2Instances.drawRectangle(dimension.x + 30, dimension.y + 30, 150, 70, null, null, 'green');
    imageEditorObj.value.ej2Instances.drawRectangle(dimension.x + 40, dimension.y + 40, 150, 70, null, null, 'red');
};

const bringForward = () => {
    imageEditorObj.value.ej2Instances.bringForward('shape_3');
};

const sendBackward = () => {
    imageEditorObj.value.ej2Instances.sendBackward('shape_3');
};

const bringToFront = () => {
    imageEditorObj.value.ej2Instances.bringToFront('shape_3');
};

const sendToBack = () => {
    imageEditorObj.value.ej2Instances.sendToBack('shape_3');
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