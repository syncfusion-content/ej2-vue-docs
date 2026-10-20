<template>
    <div>
        <ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" :created="created" width="550px"
            :zoomSettings="zoomSettings" :toolbar="toolbar"></ejs-imageeditor>
        <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="zoomIn">Zoom in</ejs-button>
        <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="zoomOut">Zoom out</ejs-button>
    </div>
</template>

<script setup>

import { ImageEditorComponent as EjsImageeditor } from "@syncfusion/ej2-vue-image-editor";
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { Browser } from "@syncfusion/ej2-base";
import { ref } from 'vue';

const imageEditorObj = ref(null);

const toolbar = [];
const zoomSettings = { maxZoomFactor: 30, minZoomFactor: 0.1 };
let zoomLevel = 1;

const created = () => {
    const imageEditor = imageEditorObj.value?.ej2Instances;
    if (!imageEditor) return;
    const imageUrl = Browser.isDevice
        ? "https://ej2.syncfusion.com/vue/documentation/image-editor/images/flower.jpeg"
        : "https://ej2.syncfusion.com/vue/documentation/image-editor/images/bridge.jpeg";
    imageEditor.open(imageUrl);
};

const zoomIn = () => {
    if (zoomLevel < 1) {
        zoomLevel += 0.1;
    } else {
        zoomLevel += 1;
    }
    if (zoomLevel > imageEditorObj.value.zoomSettings.maxZoomFactor) {
        zoomLevel = imageEditorObj.value.zoomSettings.maxZoomFactor;
    }
    imageEditorObj.value.ej2Instances.zoom(zoomLevel); // Zoom in
};

const zoomOut = () => {
    if (zoomLevel <= 1) {
        zoomLevel -= 0.1;
    } else {
        zoomLevel -= 1;
    }
    if (zoomLevel < imageEditorObj.value.zoomSettings.minZoomFactor) {
        zoomLevel = imageEditorObj.value.zoomSettings.minZoomFactor;
    }
    imageEditorObj.value.ej2Instances.zoom(zoomLevel); // Zoom out
};

</script>

<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/image-editor/index.css";

#image-editor {
    width: 550px !important;
    height: 350px !important;
}
</style>