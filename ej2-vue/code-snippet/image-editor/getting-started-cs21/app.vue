<template>
  <div>
    <ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :zoomSettings="zoomSettings"
      :toolbar="toolbar" :created="onCreated"></ejs-imageeditor>
    <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="zoomIn">Zoom in</ejs-button>
    <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="zoomOut">Zoom out</ejs-button>
  </div>
</template>

<script>

import { ImageEditorComponent } from "@syncfusion/ej2-vue-image-editor";
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { Browser } from "@syncfusion/ej2-base";

export default {
  name: "App",
  components: {
    "ejs-imageeditor": ImageEditorComponent,
    "ejs-button": ButtonComponent
  },
  data: function () {
    return {
      toolbar: [],
      zoomSettings: { maxZoomFactor: 30, minZoomFactor: 0.1 },
      zoomLevel: 1
    };
  },
  methods: {
    onCreated() {
      let imageEditor = this.$refs.imageEditorObj?.ej2Instances;
      if (!imageEditor) return;
      let imageUrl = Browser.isDevice
        ? 'https://ej2.syncfusion.com/vue/documentation/image-editor/images/flower.jpeg'
        : 'https://ej2.syncfusion.com/vue/documentation/image-editor/images/bridge.jpeg';
      imageEditor.open(imageUrl);
    },
    zoomIn: function () {
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
    zoomOut: function () {
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