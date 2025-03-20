<template>
    <div>
        <ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px"
            :created="created"></ejs-imageeditor>
        <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="getBlob">Save Blob</ejs-button>
        <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="setImage">Load Blob</ejs-button>
    </div>
</template>

<script setup>

import { ImageEditorComponent as EjsImageeditor } from "@syncfusion/ej2-vue-image-editor";
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { Browser } from "@syncfusion/ej2-base";
import { ref } from "vue";

const imageEditorObj = ref(null);
let blobUrl;

const created = () => {
    const imageEditor = imageEditorObj.value?.ej2Instances;
    if (!imageEditor) return;
    const imageUrl = Browser.isDevice
        ? "https://ej2.syncfusion.com/react/demos/src/image-editor/images/flower.png"
        : "https://ej2.syncfusion.com/react/demos/src/image-editor/images/bridge.png";
    imageEditor.open(imageUrl);
};
const getBlob = () => {
    let imageData = imageEditorObj.value.ej2Instances.getImageData();
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');
    canvas.width = imageData.width;
    canvas.height = imageData.height;
    ctx.putImageData(imageData, 0, 0);
    canvas.toBlob((blob) => {
        blobUrl = URL.createObjectURL(blob);
    });
};
const setImage = () => {
    if (blobUrl) {
        imageEditorObj.value.ej2Instances.open(blobUrl);
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