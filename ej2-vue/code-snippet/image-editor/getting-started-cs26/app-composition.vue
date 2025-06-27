<template>
    <div>
        <ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :created="created"
            :toolbar="toolbar"></ejs-imageeditor>
        <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="chromeClick">Chrome</ejs-button>
        <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="coldClick">Cold</ejs-button>
        <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="warmClick">Warm</ejs-button>
        <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="grayScaleClick">GrayScale</ejs-button>
        <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="sepiaClick">Sepia</ejs-button>
        <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="invertClick">Invert</ejs-button>
    </div>
</template>

<script setup>

import { ImageEditorComponent as EjsImageeditor } from "@syncfusion/ej2-vue-image-editor";
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
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
const chromeClick = () => {
    imageEditorObj.value.ej2Instances.applyImageFilter('Chrome');
};
const coldClick = () => {
    imageEditorObj.value.ej2Instances.applyImageFilter('Cold');
};
const warmClick = () => {
    imageEditorObj.value.ej2Instances.applyImageFilter('Warm');
};
const grayScaleClick = () => {
    imageEditorObj.value.ej2Instances.applyImageFilter('GrayScale');
};
const sepiaClick = () => {
    imageEditorObj.value.ej2Instances.applyImageFilter('Sepia');
};
const invertClick = () => {
    imageEditorObj.value.ej2Instances.applyImageFilter('Invert');
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