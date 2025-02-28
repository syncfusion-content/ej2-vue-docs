
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
      <ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :toolbar="toolbar" :created="created"></ejs-imageeditor>
      <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="btnClick">Text</ejs-button>
      <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="outlineText">Text Outline</ejs-button>
      <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="bgColor">Background Color</ejs-button>
    </div>
  `,
  data: function () {
    return {
      toolbar: []
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
    btnClick: function (event) {
      let dimension = this.$refs.imageEditorObj.ej2Instances.getImageDimension();
      this.$refs.imageEditorObj.ej2Instances.drawText(dimension.x, dimension.y);
    },
    outlineText: function (event) {
      let dimension = this.$refs.imageEditorObj.ej2Instances.getImageDimension();
      this.$refs.imageEditorObj.ej2Instances.drawText(dimension.x, dimension.y + 100, 'Syncfusion', 'Arial', 70, false, false, '', false, null, '', 'green', 8);
    },
    bgColor: function (event) {
      let dimension = this.$refs.imageEditorObj.ej2Instances.getImageDimension();
      this.$refs.imageEditorObj.ej2Instances.drawText(dimension.x, dimension.y + 150, 'Syncfusion', 'Arial', 70, false, false, '', false, null, 'red', '', null);
    }
  }

});