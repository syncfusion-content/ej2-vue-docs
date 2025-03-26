<template>
    <div>
        <ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px"
            @created="created"></ejs-imageeditor>
        <ejs-button cssClass="e-img-button" :isPrimary="true" @click="saveAsByteArray">
            Save as Byte Array
        </ejs-button>
        <ejs-button cssClass="e-img-button" :isPrimary="true" @click="loadFromByteArray">
            Load from Byte Array
        </ejs-button>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { ImageEditorComponent as EjsImageeditor } from "@syncfusion/ej2-vue-image-editor";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { Browser } from "@syncfusion/ej2-base";

const imageEditorObj = ref(null);
const byteArray = ref(null);

const created = () => {
    const imageEditor = imageEditorObj.value?.ej2Instances;
    if (!imageEditor) return;
    const imageUrl = Browser.isDevice
        ? "https://ej2.syncfusion.com/react/demos/src/image-editor/images/flower.png"
        : "https://ej2.syncfusion.com/react/demos/src/image-editor/images/bridge.png";
    imageEditor.open(imageUrl);
};

const saveAsByteArray = () => {
    const imageEditor = imageEditorObj.value?.ej2Instances;
    if (!imageEditor) return;
    const imageData = imageEditor.getImageData();
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = imageData.width;
    canvas.height = imageData.height;
    ctx.putImageData(imageData, 0, 0);
    canvas.toBlob((blob) => {
        if (blob) {
            const reader = new FileReader();
            reader.readAsArrayBuffer(blob);
            reader.onloadend = () => {
                byteArray.value = new Uint8Array(reader.result);
            };
        }
    }, "image/png");
};

const loadFromByteArray = () => {
    if (!byteArray.value) return;
    const blob = new Blob([byteArray.value], { type: "image/png" });
    const url = URL.createObjectURL(blob);
    imageEditorObj.value.ej2Instances.open(url);
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