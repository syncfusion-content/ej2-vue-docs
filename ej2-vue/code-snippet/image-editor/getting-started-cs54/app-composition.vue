<template>
    <div>
        <ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px"
            :shapeChanging="shapeChanging" :created="created"></ejs-imageeditor>
    </div>
</template>

<script setup>

import { ImageEditorComponent as EjsImageeditor } from "@syncfusion/ej2-vue-image-editor";
import { Browser } from "@syncfusion/ej2-base";
import { ref } from "vue";

const imageEditorObj = ref(null);

const created = () => {
    const imageEditor = imageEditorObj.value?.ej2Instances;
    if (!imageEditor) return;
    let imageUrl = Browser.isDevice
        ? "https://ej2.syncfusion.com/react/demos/src/image-editor/images/flower.png"
        : "https://ej2.syncfusion.com/react/demos/src/image-editor/images/bridge.png";
    imageEditor.open(imageUrl);
};

const shapeChanging = (args) => {
    if (args.action == "insert" && args.currentShapeSettings?.type === 'FreehandDraw') {
        args.currentShapeSettings.strokeColor = 'red';
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