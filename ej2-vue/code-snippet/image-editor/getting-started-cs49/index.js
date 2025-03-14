
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
      <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="saveBlob">Save Blob</ejs-button>
      <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="setImage">Open Image</ejs-button>
    </div>
  `,
  data: function () {
    return {
      blobUrl: '',
    };
  },
  methods: {
    created: function () {
      let imageEditor = this.$refs.imageEditorObj.ej2Instances;
      if (!imageEditor) return;
      let imageUrl = Browser.isDevice
        ? "flower.jpeg"
        : "bridge.jpeg";
      imageEditor.open(imageUrl);
    },
    saveBlob: function () {
      let imageData = this.$refs.imageEditorObj.ej2Instances.getImageData();
      let canvas = document.createElement('canvas');
      let ctx = canvas.getContext('2d');
      canvas.width = imageData.width;
      canvas.height = imageData.height;
      ctx.putImageData(imageData, 0, 0);
      canvas.toBlob((blob) => {
        this.blobUrl = URL.createObjectURL(blob);
      });
    },
    setImage: function () {
      this.$refs.imageEditorObj.ej2Instances.open(this.blobUrl);
    }
  }

});