<template>
  <div>
    <ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px"
      :created="created"></ejs-imageeditor>
    <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="fitwidth">Fit Width</ejs-button>
    <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="fitheight">Fit Height</ejs-button>
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
    };
  },
  methods: {
    created() {
      let imageEditor = this.$refs.imageEditorObj?.ej2Instances;
      if (!imageEditor) return;
      let imageUrl = Browser.isDevice
        ? "https://ej2.syncfusion.com/vue/documentation/image-editor/images/flower.jpeg"
        : "https://ej2.syncfusion.com/vue/documentation/image-editor/images/bridge.jpeg";
      imageEditor.open(imageUrl);
    },
    fitwidth: function () {
      let imageEditorObj = this.$refs.imageEditorObj.ej2Instances;
      imageEditorObj.zoom(1); // Reset zoom to original size before applying Fit Width
      const containerWidth = imageEditorObj.upperCanvas.width;
      const { width: oldWidth } = imageEditorObj.getImageDimension();
      let imageWidth = oldWidth, zoomFactor = 0.1, newZoom = 1;
      while (imageWidth < containerWidth) {
          newZoom++;
          imageWidth = oldWidth * (1 + zoomFactor);
          zoomFactor += 0.1;
      }
      imageEditorObj.zoom(newZoom);
    },
    fitheight: function () {
      let imageEditorObj = this.$refs.imageEditorObj.ej2Instances;
      imageEditorObj.zoom(1); // Reset zoom to original size before applying Fit Height
      const containerHeight = imageEditorObj.upperCanvas.height;
      const { height: oldHeight } = imageEditorObj.getImageDimension();
      let imageHeight = oldHeight, zoomFactor = 0.1, newZoom = 1;
      while (imageHeight < containerHeight) {
          newZoom++;
          imageHeight = oldHeight * (1 + zoomFactor);
          zoomFactor += 0.1;
      }
      imageEditorObj.zoom(newZoom);
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