
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
      <ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :created="created"></ejs-imageeditor>
      <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="saveImage">Save base64</ejs-button>
    </div>
  `,
  data: function () {
    return {
      base64String: '',
    };
  },
  methods: {
    created: function () {
      let imageEditor = this.$refs.imageEditorObj?.ej2Instances;
      if (!imageEditor) return;
      let imageUrl = Browser.isDevice
        ? "https://ej2.syncfusion.com/react/demos/src/image-editor/images/flower.png"
        : "https://ej2.syncfusion.com/react/demos/src/image-editor/images/bridge.png";
      imageEditor.open(imageUrl);
    },
    saveImage: function (event) {
      let imageData = this.$refs.imageEditorObj.ej2Instances.getImageData();
      const canvas = document.createElement('canvas');
      canvas.width = imageData.width;
      canvas.height = imageData.height;
      const context = canvas.getContext('2d');
      context.putImageData(imageData, 0, 0);
      this.base64String = canvas.toDataURL();
    }
  }
});