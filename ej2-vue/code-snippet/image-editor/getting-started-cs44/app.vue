<template>
<div>
<ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :toolbar="toolbar"></ejs-imageeditor>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="brushscriptBtn">Brush Script MT</ejs-button>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="papyrusBtn">Papyrus</ejs-button>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="timesnewromanBtn">Times New Roman</ejs-button>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="couriernewBtn">Courier New</ejs-button>
</div>
</template>

<script>

import { ImageEditorComponent } from "@syncfusion/ej2-vue-image-editor";
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { Browser } from "@syncfusion/ej2-base";

export default {
name: "App",
components: {
"ejs-imageeditor":ImageEditorComponent,
"ejs-button":ButtonComponent
},
  data: function() {
      return {
        toolbar: [],
        fontFamily: { default: 'Arial', items: [{id: 'arial', text: 'Arial'}, {id: 'brush script mt', text: 'Brush Script MT'},
        {id: 'papyrus', text: 'Papyrus'}, {id: 'times new roman', text: 'Times New Roman'}, {id: 'courier new', text: 'Courier New'}] }
      };
  },
  methods: {
    couriernewBtn: function() {
      let dimension = this.$refs.imageEditorObj.ej2Instances.getImageDimension();
      this.$refs.imageEditorObj.ej2Instances.drawText(dimension.x, dimension.y, 'EnterText', 'Courier New');
    },

    brushscriptBtn: function() {
      let dimension = this.$refs.imageEditorObj.ej2Instances.getImageDimension();
      this.$refs.imageEditorObj.ej2Instances.drawText(dimension.x, dimension.y, 'EnterText', 'Brush Script MT');
    },

    papyrusBtn: function() {
      let dimension = this.$refs.imageEditorObj.ej2Instances.getImageDimension();
      this.$refs.imageEditorObj.ej2Instances.drawText(dimension.x, dimension.y, 'EnterText', 'Papyrus');
    },

    timesnewromanBtn: function() {
      let dimension = this.$refs.imageEditorObj.ej2Instances.getImageDimension();
      this.$refs.imageEditorObj.ej2Instances.drawText(dimension.x,dimension.y, 'EnterText', 'Times New Roman');
    }
  }
}
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