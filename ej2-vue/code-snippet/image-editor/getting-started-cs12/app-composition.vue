<template>
    <div>
        <ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :toolbar="toolbar"
            :created="created"></ejs-imageeditor>
        <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="btnClick">Square selection</ejs-button>
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
    const imageUrl = Browser.isDevice
        ? "https://ej2.syncfusion.com/vue/documentation/image-editor/images/flower.jpeg"
        : "https://ej2.syncfusion.com/vue/documentation/image-editor/images/bridge.jpeg";
    imageEditor.open(imageUrl);
};

const btnClick = () => {
    imageEditorObj.value.ej2Instances.select("Square");
};

</script>

<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/image-editor/index.css";

#image-editor {
    width: 550px !important;
    height: 350px !important;
}
</style>