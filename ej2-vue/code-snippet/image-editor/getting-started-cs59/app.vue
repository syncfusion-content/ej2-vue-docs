<template>
  <div>
    <ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px"
      :created="created"></ejs-imageeditor>
    <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="saveImage">Save base64</ejs-button>
  </div>
</template>

<script>

import { ImageEditorComponent } from "@syncfusion/ej2-vue-image-editor";
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { Browser } from "@syncfusion/ej2-base";

var base64String = '';
export default {
  name: "App",
  components: {
    "ejs-imageeditor": ImageEditorComponent,
    "ejs-button": ButtonComponent
  },
  data: function () {
    return {
      base64String
    };
  },
  methods: {
    created() {
      let imageEditor = this.$refs.imageEditorObj?.ej2Instances;
      if (!imageEditor) return;
      let imageUrl = Browser.isDevice
        ? 'https://ej2.syncfusion.com/vue/documentation/image-editor/images/flower.jpeg'
        : 'https://ej2.syncfusion.com/vue/documentation/image-editor/images/bridge.jpeg';
      imageEditor.open(imageUrl);
    },
    saveImage: function () {
      let imageData = this.$refs.imageEditorObj.ej2Instances.getImageData();
      const canvas = document.createElement('canvas');
      canvas.width = imageData.width;
      canvas.height = imageData.height;
      const context = canvas.getContext('2d');
      context.putImageData(imageData, 0, 0);
      base64String = canvas.toDataURL();
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