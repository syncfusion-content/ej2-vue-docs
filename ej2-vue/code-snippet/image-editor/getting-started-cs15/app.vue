<template>
<div>
<ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :toolbar="toolbar"></ejs-imageeditor>
 <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="btnClick">Circle crop</ejs-button>
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
        toolbar: []
      };
  },
  methods: {
    btnClick: function() {
      this.$refs.imageEditorObj.ej2Instances.select("Circle");
      this.$refs.imageEditorObj.ej2Instances.crop();
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