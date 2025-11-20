
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
      <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="fitwidth">Fit Width</ejs-button>
      <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="fitheight">Fit Height</ejs-button>
    </div>
  `,
  data: function () {
    return {
    };
  },
  methods: {
    created: function () {
      let imageEditor = this.$refs.imageEditorObj.ej2Instances;
      if (!imageEditor) return;
      let imageUrl = Browser.isDevice
        ? "https://ej2.syncfusion.com/vue/documentation/image-editor/images/flower.jpeg"
        : "https://ej2.syncfusion.com/vue/documentation/image-editor/images/bridge.jpeg";
      imageEditor.open(imageUrl);
    },
    btnClick: function () {
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
    btnClick: function () {
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

});