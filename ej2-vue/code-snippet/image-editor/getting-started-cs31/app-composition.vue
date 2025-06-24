<template>
    <div>
        <ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :created="created"
            :toolbar="toolbar"></ejs-imageeditor>
        <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="brightnessClick">Brightness</ejs-button>
        <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="contrastClick">Contrast</ejs-button>
        <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="saturationClick">Saturation</ejs-button>
    </div>
</template>

<script setup>

import { ImageEditorComponent as EjsImageeditor, ImageFinetuneOption } from "@syncfusion/ej2-vue-image-editor";
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { Browser } from "@syncfusion/ej2-base";
import { ref } from 'vue';

const imageEditorObj = ref(null);
const toolbar = [];

const created = () => {
    const imageEditor = imageEditorObj.value?.ej2Instances;
    if (!imageEditor) return;
    const imageUrl = Browser.isDevice
        ? "https://ej2.syncfusion.com/vue/documentation/image-editor/images/flower.jpeg"
        : "https://ej2.syncfusion.com/vue/documentation/image-editor/images/bridge.jpeg";
    imageEditor.open(imageUrl);
};

const brightnessClick = () => {
    imageEditorObj.value.ej2Instances.finetuneImage(ImageFinetuneOption.Brightness, 10);
};

const contrastClick = () => {
    imageEditorObj.value.ej2Instances.finetuneImage(ImageFinetuneOption.Contrast, 30);
};

const saturationClick = () => {
    imageEditorObj.value.ej2Instances.finetuneImage(ImageFinetuneOption.Saturation, 100);
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