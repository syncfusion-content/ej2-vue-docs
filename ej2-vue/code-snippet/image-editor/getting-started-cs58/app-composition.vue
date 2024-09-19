<template>
<div id="target" class="control-section">
<ejs-dialog id="dialog" ref="dialog" :target='target' :width='width' :animationSettings='animationSettings' :visible='visible' :content='contentTemplate' :closeOnEscape='closeOnEscape'>
</ejs-dialog>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="btnClick">Open dialog</ejs-button>
</div>
</template>

<script setup>

import { ImageEditorComponent as EjsImageeditor} from "@syncfusion/ej2-vue-image-editor";
import { DialogComponent as EjsDialog } from '@syncfusion/ej2-vue-popups';
import { ButtonComponent as EjsButton} from '@syncfusion/ej2-vue-buttons';
import { Browser } from "@syncfusion/ej2-base";
import { ref } from "vue";

const app = createApp();
var contentTemplateVue = app.component("contentTemplate", {
    template: '<div><ejs-imageeditor id="image-editor" :created="created"></ejs-imageeditor></div>',
    data() {
        return {
            data: {}
        };
    }
});

const imageEditorObj = ref(null);
const target = '#target';
const height = '75%';
const width = '435px';
const created = () => {
    if (Browser.isDevice) {
        imageEditorObj.value.open('flower.jpeg');
    } else {
        imageEditorObj.value.open('bridge.jpeg');
    }
};
const btnClick = () => {
  dialog.value.ej2Instances.show();
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