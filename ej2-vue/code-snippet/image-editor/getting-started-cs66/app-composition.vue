<template>
    <div>
        <ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :created="onCreated"
            :toolbar="toolbar" v-on:toolbarItemClicked="onToolbarItemClick">
        </ejs-imageeditor>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { ImageEditorComponent as EjsImageeditor } from '@syncfusion/ej2-vue-image-editor';
import { Browser } from '@syncfusion/ej2-base';

const imageEditorObj = ref(null);
const toolbar = ref([
    {
        id: 'rotate-left',
        prefixIcon: 'e-icons e-anti-clock-wise',
        tooltipText: 'Rotate Left',
        align: 'Left',
    },
    {
        id: 'rotate-right',
        prefixIcon: 'e-icons e-clock-wise',
        tooltipText: 'Rotate Right',
        align: 'Left',
    },
    {
        id: 'annotate',
        prefixIcon: 'e-icons e-annotation',
        tooltipText: 'Annotate',
        align: 'Center',
        disabled: true,
    },
    {
        id: 'save',
        prefixIcon: 'e-icons e-save',
        tooltipText: 'Save',
        align: 'Right',
    },
]);

const onCreated = () => {
    let imageEditor = imageEditorObj.value?.ej2Instances;
    if (!imageEditor) return;
    let imageUrl = Browser.isDevice
        ? 'https://ej2.syncfusion.com/react/demos/src/image-editor/images/flower.png'
        : 'https://ej2.syncfusion.com/react/demos/src/image-editor/images/bridge.png';
    imageEditor.open(imageUrl);
};

const onToolbarItemClick = (args) => {
    let imageEditor = imageEditorObj.value?.ej2Instances;
    if (!imageEditor) return;
    if (args.item.id === 'rotate-left') {
        imageEditor.rotate(-90);
    } else if (args.item.id === 'rotate-right') {
        imageEditor.rotate(90);
    } else if (args.item.id === 'save') {
        imageEditor.export('PNG');
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