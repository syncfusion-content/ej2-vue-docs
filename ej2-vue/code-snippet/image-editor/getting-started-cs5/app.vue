

<template>
<div>
<ejs-imageeditor id="image-editor"  ref="imageEditorObj" height="350px" width="550px" :created="created"></ejs-imageeditor>
 <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="btnClick">Click</ejs-button>
</div>
</template>

<script>
import Vue from 'vue';
import { ImageEditorPlugin } from "@syncfusion/ej2-vue-image-editor";

Vue.use(ImageEditorPlugin);

export default {
  data: function() {
      return {};
  },
  methods: {
    created: function() {
        if (Browser.isDevice) {
            this.$refs.imageEditorObj.open('images/flower.png');
        } else {
            this.$refs.imageEditorObj.open('images/bridge.png');
        }
    },
    btnClick: function(event) {
      this.$refs.imageEditorObj.ej2Instances.drawLine(10, 10, 80, 80, 2, "#000");
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


