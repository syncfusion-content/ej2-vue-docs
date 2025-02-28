import Vue from 'vue';
import { ImageEditorPlugin } from "@syncfusion/ej2-vue-image-editor";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { Browser } from "@syncfusion/ej2-base";

Vue.use(ImageEditorPlugin);
Vue.use(ButtonPlugin);

new Vue({
  el: '#app',
  template: `
    <div>
      <ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px"></ejs-imageeditor>
      <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="saveAsByteArray">
        Save as Byte Array
      </ejs-button>
      <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="loadFromByteArray">
        Load from Byte Array
      </ejs-button>
    </div>
  `,
  data: function () {
    return {
      byteArray: null
    };
  },
  mounted() {
    this.initializeImageEditor();
  },
  methods: {
    initializeImageEditor() {
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
      if (!this.byteArray) return;
      const blob = new Blob([this.byteArray], { type: 'image/png' });
      const url = URL.createObjectURL(blob);
      this.$refs.imageEditorObj.ej2Instances.open(url);
    }
  }
});