<template>
    <div>
        <ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px"
            :created="created"></ejs-imageeditor>
        <ejs-button cssClass="e-img-button" :isPrimary="true" @click="saveImage">Save Image</ejs-button>
        <ejs-button cssClass="e-img-button" :isPrimary="true" @click="setImage" v-if="false">Load Base64</ejs-button>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { ImageEditorComponent as EjsImageeditor } from "@syncfusion/ej2-vue-image-editor";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { Browser } from "@syncfusion/ej2-base";

const imageEditorObj = ref(null);
const base64String = ref("");

const created = () => {
    if (imageEditorObj.value) {
        const instance = imageEditorObj.value.ej2Instances;
        const imageUrl = Browser.isDevice
            ? "https://ej2.syncfusion.com/vue/documentation/image-editor/images/flower.jpeg"
            : "https://ej2.syncfusion.com/vue/documentation/image-editor/images/bridge.jpeg";
        instance.open(imageUrl);
    }
};

const saveImage = () => {
    if (imageEditorObj.value) {
        const instance = imageEditorObj.value.ej2Instances;
        const imageData = instance.getImageData();
        const canvas = document.createElement("canvas");
        canvas.width = imageData.width;
        canvas.height = imageData.height;

        const context = canvas.getContext("2d");
        if (context) {
            context.putImageData(imageData, 0, 0);
            base64String.value = canvas.toDataURL();
        }
    }
};

const setImage = () => {
    if (imageEditorObj.value && base64String.value) {
        imageEditorObj.value.ej2Instances.open(base64String.value);
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