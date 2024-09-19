<template>
<div>
<ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px"></ejs-imageeditor>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="saveImage">open Image</ejs-button>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="setImage">Save base64</ejs-button>
</div>
</template>

<script>

import { ImageEditorComponent } from "@syncfusion/ej2-vue-image-editor";
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';

var base64String = '';
export default {
name: "App",
components: {
"ejs-imageeditor":ImageEditorComponent,
"ejs-button":ButtonComponent
},
  data: function() {
      return {
        base64String
      };
  },
  methods: {
    saveImage: function() {
      let imageData = this.$refs.imageEditorObj.ej2Instances.getImageData();
      const canvas = document.createElement('canvas');
      canvas.width = imageData.width;
      canvas.height = imageData.height;
      // Get the 2D rendering context of the canvas
      const context = canvas.getContext('2d');
      // Put the ImageData onto the canvas
      context.putImageData(imageData, 0, 0);
      // Convert the canvas content to a Base64 encoded URL
      base64String = canvas.toDataURL();
    },
    setImage: function() {
      if (base64String) {
          this.$refs.imageEditorObj.ej2Instances.open(base64String);
      }
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