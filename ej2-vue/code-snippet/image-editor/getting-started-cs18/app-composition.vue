<template>
<div>
<ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :created="created" :toolbarUpdating="toolbarUpdating"></ejs-imageeditor>
</div>
</template>

<script setup>

import { ImageEditorComponent as EjsImageeditor} from "@syncfusion/ej2-vue-image-editor";
import { Browser } from "@syncfusion/ej2-base";
import {ref} from 'vue';

const imageEditorObj = ref(null);

const created = () => {
    if (Browser.isDevice) {
        imageEditorObj.value.open('flower.png');
    } else {
        imageEditorObj.value.open('bridge.png');
    }
};

const toolbarUpdating = (args) => {
    if (args.toolbarType === 'pen') {
        args.toolbarItems.forEach(item => {
            if (item.align === 'Center' && (item.tooltipText === 'Stroke Width' || item.tooltipText === 'Remove' || item.type === 'Separator')) {
                item.visible = false;
            }
        });
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