

<template>
<div>
<ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :created="created" :toolbar="toolbar" :zoomSettings="zoomSettings"></ejs-imageeditor>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="btn1Click">Click</ejs-button>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="btn2Click">Click</ejs-button>
</div>
</template>

<script>
import Vue from 'vue';
import { ImageEditorPlugin } from "@syncfusion/ej2-vue-image-editor";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { Browser } from "@syncfusion/ej2-base";

Vue.use(ImageEditorPlugin);
Vue.use(ButtonPlugin);

export default {
  data: function() {
      return {
        toolbar: [],
        zoomSettings: {maxZoomFactor: 30, minZoomFactor: 0.1},
        zoomLevel: 1
      };
  },
  methods: {
     created: function() {
        if (Browser.isDevice) {
            this.$refs.imageEditorObj.open('https://ej2.syncfusion.com/demos/src/image-editor/images/flower.png');
        } else {
            this.$refs.imageEditorObj.open('https://ej2.syncfusion.com/demos/src/image-editor/images/bridge.png');
        }
    },
    btn1Click: function(event) {
      if (this.zoomLevel < 1) {
        this.zoomLevel += 0.1;
      } else {
        this.zoomLevel += 1;
      }
      if (this.zoomLevel > this.$refs.imageEditorObj.zoomSettings.maxZoomFactor) {
        this.zoomLevel = this.$refs.imageEditorObj.zoomSettings.maxZoomFactor;
      }
      this.$refs.imageEditorObj.ej2Instances.zoom(this.zoomLevel); // Zoom in
    },
    btn2Click: function(event) {
      if (this.zoomLevel <= 1) {
        this.zoomLevel -= 0.1;
      } else {
        this.zoomLevel -= 1;
      }
      if (this.zoomLevel < this.$refs.imageEditorObj.zoomSettings.minZoomFactor) {
        this.zoomLevel = this.$refs.imageEditorObj.zoomSettings.minZoomFactor;
      }
      this.$refs.imageEditorObj.ej2Instances.zoom(this.zoomLevel); // Zoom out
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


