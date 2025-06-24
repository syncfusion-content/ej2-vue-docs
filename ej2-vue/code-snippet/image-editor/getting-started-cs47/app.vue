<template>
  <div>
    <ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :toolbar="toolbar"
      :created="onCreated"></ejs-imageeditor>
    <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="addRedact">Add Redact</ejs-button>
    <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="updateRedact">Update Redact</ejs-button>
    <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="selRedact">Select Redact</ejs-button>
    <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="delRedact">Delete Redact</ejs-button>
  </div>
</template>

<script>

import { ImageEditorComponent, RedactType } from "@syncfusion/ej2-vue-image-editor";
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
      toolbar: []
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
    addRedact: function () {
      let dimension = this.$refs.imageEditorObj.ej2Instances.getImageDimension();
      this.$refs.imageEditorObj.ej2Instances.drawRedact(RedactType.Blur, dimension.x + 180, dimension.y + 240, 200, 300);
    },
    updateRedact: function () {
      let redacts = this.$refs.imageEditorObj.ej2Instances.getRedacts();
      if (redacts.length > 0) {
        redacts[redacts.length - 1].blurIntensity = 100;
        this.$refs.imageEditorObj.ej2Instances.updateRedact(redacts[redacts.length - 1]);
      }
    },
    selRedact: function () {
      let redacts = this.$refs.imageEditorObj.ej2Instances.getRedacts();
      if (redacts.length > 0) {
        this.$refs.imageEditorObj.ej2Instances.selectRedact(redacts[redacts.length - 1].id);
      }
    },
    delRedact: function () {
      let redacts = this.$refs.imageEditorObj.ej2Instances.getRedacts();
      if (redacts.length > 0) {
        this.$refs.imageEditorObj.ej2Instances.deleteRedact(redacts[redacts.length - 1].id);
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