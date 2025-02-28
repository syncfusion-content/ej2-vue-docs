<template>
  <div>
    <ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px"
      :created="onCreated"></ejs-imageeditor>
    <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="drawShapes">Draw Shapes</ejs-button>
    <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="bringForward">Bring Forward</ejs-button>
    <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="sendBackward">Send Backward</ejs-button>
    <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="bringToFront">Bring To Front</ejs-button>
    <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="sendToBack">Send To Back</ejs-button>
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
    return {};
  },
  methods: {
    onCreated() {
      let imageEditor = this.$refs.imageEditorObj?.ej2Instances;
      if (!imageEditor) return;
      let imageUrl = Browser.isDevice
        ? 'https://ej2.syncfusion.com/react/demos/src/image-editor/images/flower.png'
        : 'https://ej2.syncfusion.com/react/demos/src/image-editor/images/bridge.png';
      imageEditor.open(imageUrl);
    },
    drawShapes: function () {
      let dimension = this.$refs.imageEditorObj.ej2Instances.getImageDimension();
      this.$refs.imageEditorObj.ej2Instances.drawRectangle(dimension.x + 10, dimension.y + 10, 150, 70, null, null, 'red');
      this.$refs.imageEditorObj.ej2Instances.drawRectangle(dimension.x + 20, dimension.y + 20, 150, 70, null, null, 'red');
      this.$refs.imageEditorObj.ej2Instances.drawRectangle(dimension.x + 30, dimension.y + 30, 150, 70, null, null, 'green');
      this.$refs.imageEditorObj.ej2Instances.drawRectangle(dimension.x + 40, dimension.y + 40, 150, 70, null, null, 'red');
    },
    bringForward: function () {
      this.$refs.imageEditorObj.ej2Instances.bringForward('shape_3');
    },
    sendBackward: function () {
      this.$refs.imageEditorObj.ej2Instances.sendBackward('shape_3');
    },
    bringToFront: function () {
      this.$refs.imageEditorObj.ej2Instances.bringToFront('shape_3');
    },
    sendToBack: function () {
      this.$refs.imageEditorObj.ej2Instances.sendToBack('shape_3');
    },
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