<template>
<div>
<ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :created="created" :toolbarTemplate="toolbarTemplate">
</ejs-imageeditor>
</div>
</template>

<script setup>

import { ImageEditorComponent as EjsImageeditor } from "@syncfusion/ej2-vue-image-editor";
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { Browser, getComponent } from "@syncfusion/ej2-base";
import {createApp, ref} from 'vue';

const imageEditorObj = ref(null);
const app = createApp({});

const HeadTemplate = app.Component("HeaderTemplate", {
    components: {
        "ejs-button": ButtonComponent
    },
    template:
        ` <ejs-button :isPrimary="true" v-on:click='btnClick'>Custom</ejs-button>`,
        data() {
            return {
                imageEditorObj: getComponent(document.getElementById('image-editor'), 'image-editor'),
            }
        },
        methods: {
            btnClick: function(){
                this.imageEditorObj.freeHandDraw(true);
            }
        }
});

const toolbarTemplate = () => {
    return {
        template : HeadTemplate
    }
};

const created = () => {
    if (Browser.isDevice) {
        imageEditorObj.value.open('flower.png');
    } else {
        imageEditorObj.value.open('bridge.png');
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