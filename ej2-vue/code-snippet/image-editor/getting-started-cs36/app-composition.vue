<template>
    <div>
        <ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :created="created"
            :toolbar="toolbar"></ejs-imageeditor>
    </div>
</template>

<script setup>

import { ImageEditorComponent as EjsImageeditor } from "@syncfusion/ej2-vue-image-editor";
import { Browser } from "@syncfusion/ej2-base";
import { ref } from "vue";

const imageEditorObj = ref(null);
const toolbar = ['Annotate', 'Finetune', 'Filter', 'Confirm', 'Reset', 'Save', 'ZoomIn', 'ZoomOut'];

const created = () => {
    const imageEditor = imageEditorObj.value?.ej2Instances;
    if (!imageEditor) return;
    const imageUrl = Browser.isDevice
        ? "https://ej2.syncfusion.com/vue/documentation/image-editor/images/flower.jpeg"
        : "https://ej2.syncfusion.com/vue/documentation/image-editor/images/bridge.jpeg";
    imageEditor.open(imageUrl);
};

</script>

<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/image-editor/index.css";

#image-editor {
    width: 550px !important;
    height: 350px !important;
}
</style>