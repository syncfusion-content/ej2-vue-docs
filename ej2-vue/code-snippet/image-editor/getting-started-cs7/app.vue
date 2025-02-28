<template>
  <div>
    <ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px"
      :created="created"></ejs-imageeditor>
    <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="saveAsByteArray">Save as Byte Array</ejs-button>
    <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="loadFromByteArray">Load from Byte
      Array</ejs-button>
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
  data() {
    return {
      byteArray: null
    };
  },
  methods: {
    created() {
      let imageEditor = this.$refs.imageEditorObj?.ej2Instances;
      if (!imageEditor) return;
      let imageUrl = Browser.isDevice
        ? 'https://ej2.syncfusion.com/react/demos/src/image-editor/images/flower.png'
        : 'https://ej2.syncfusion.com/react/demos/src/image-editor/images/bridge.png';
      imageEditor.open(imageUrl);
    },
    saveAsByteArray() {
      let imageEditor = this.$refs.imageEditorObj?.ej2Instances;
      if (!imageEditor) return;
      let imageData = imageEditor.getImageData();
      let canvas = document.createElement('canvas');
      let ctx = canvas.getContext('2d');
      if (!ctx) return;
      canvas.width = imageData.width;
      canvas.height = imageData.height;
      ctx.putImageData(imageData, 0, 0);
      canvas.toBlob((blob) => {
        if (blob) {
          const reader = new FileReader();
          reader.readAsArrayBuffer(blob);
          reader.onloadend = () => {
            this.byteArray = new Uint8Array(reader.result);
          };
        }
      }, 'image/png');
    },
    loadFromByteArray() {
      if (!this.byteArray) { return; }
      const blob = new Blob([this.byteArray], { type: 'image/png' });
      const url = URL.createObjectURL(blob);
      this.$refs.imageEditorObj.ej2Instances.open(url);
    }
  }
};
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