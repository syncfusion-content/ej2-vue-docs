<template>
    <div>
        <ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :toolbar="toolbar"
            :created="created"></ejs-imageeditor>
        <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="rectangleClick">Rectangle</ejs-button>
        <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="ellipseClick">Ellipse</ejs-button>
        <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="lineClick">Line</ejs-button>
        <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="pathClick">Path</ejs-button>
        <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="arrowClick">Arrow</ejs-button>
    </div>
</template>

<script setup>

import { ImageEditorComponent as EjsImageeditor } from "@syncfusion/ej2-vue-image-editor";
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { Browser } from "@syncfusion/ej2-base";
import { ref } from "vue";

const toolbar = [];
const imageEditorObj = ref(null);

const created = () => {
    const imageEditor = imageEditorObj.value?.ej2Instances;
    if (!imageEditor) return;
    let imageUrl = Browser.isDevice
        ? "https://ej2.syncfusion.com/vue/documentation/image-editor/images/flower.jpeg"
        : "https://ej2.syncfusion.com/vue/documentation/image-editor/images/bridge.jpeg";
    imageEditor.open(imageUrl);
};

const rectangleClick = () => {
    let dimension = imageEditorObj.value.ej2Instances.getImageDimension();
    imageEditorObj.value.ej2Instances.drawRectangle(dimension.x + 10, dimension.y + 60, 150, 70);
    imageEditorObj.value.ej2Instances.drawRectangle(dimension.x + 250, dimension.y + 60, 150, 70, null, '', '', null, null, 8);
};

const ellipseClick = () => {
    let dimension = imageEditorObj.value.ej2Instances.getImageDimension();
    imageEditorObj.value.ej2Instances.drawEllipse(dimension.x, dimension.y + 200);
};

const lineClick = () => {
    let dimension = imageEditorObj.value.ej2Instances.getImageDimension();
    imageEditorObj.value.ej2Instances.drawLine(dimension.x + 300, dimension.y + 30);
};

const pathClick = () => {
    let dimension = imageEditorObj.value.ej2Instances.getImageDimension();
    imageEditorObj.value.ej2Instances.drawPath([{ x: dimension.x, y: dimension.y }, { x: dimension.x + 50, y: dimension.y + 50 }, { x: dimension.x + 20, y: dimension.y + 50 }], 8);
};

const arrowClick = () => {
    let dimension = imageEditorObj.value.ej2Instances.getImageDimension();
    imageEditorObj.value.ej2Instances.drawArrow(dimension.x + 150, dimension.y + 150, dimension.x + 300, dimension.y + 150, 10);
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