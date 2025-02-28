<template>
    <div>
        <ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :toolbar="toolbar">
        </ejs-imageeditor>
        <ejs-button id="open-btn" cssClass="e-primary" @click="openImage">Open Image</ejs-button>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { ImageEditorComponent as EjsImageeditor } from "@syncfusion/ej2-vue-image-editor";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";

const imageEditorObj = ref(null);
const toolbar = ref([]);

const openImage = () => {
    if (imageEditorObj.value) {
        imageEditorObj.value.open('https://ej2.syncfusion.com/react/demos/src/image-editor/images/bridge.png');
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