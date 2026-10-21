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
        imageEditorObj.value.open('https://ej2.syncfusion.com/vue/documentation/image-editor/images/bridge.jpeg');
    }
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/image-editor/index.css";

#image-editor {
    width: 550px !important;
    height: 350px !important;
}
</style>