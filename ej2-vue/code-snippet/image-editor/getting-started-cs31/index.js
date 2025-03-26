
import Vue from 'vue';
import { ImageEditorPlugin, ImageFinetuneOption } from "@syncfusion/ej2-vue-image-editor";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { Browser } from "@syncfusion/ej2-base";

Vue.use(ImageEditorPlugin);
Vue.use(ButtonPlugin);
new Vue({
  el: '#app',
  template: `
    <div>
      <ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :toolbar="toolbar" :created="created"></ejs-imageeditor>
      <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="brightnessClick">Brightness</ejs-button>
      <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="contrastClick">Contrast</ejs-button>
      <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="saturationClick">Saturation</ejs-button>
    </div>
  `,
  data: function () {
    return {
      toolbar: []
    };
  },
  methods: {
    created: function () {
      let imageEditor = this.$refs.imageEditorObj.ej2Instances;
      if (!imageEditor) return;
      let imageUrl = Browser.isDevice
        ? "flower.png"
        : "bridge.png";
      imageEditor.open(imageUrl);
    },
    brightnessClick: function () {
      this.$refs.imageEditorObj.ej2Instances.finetuneImage(ImageFinetuneOption.Brightness, 10);
    },
    contrastClick: function () {
      this.$refs.imageEditorObj.ej2Instances.finetuneImage(ImageFinetuneOption.Contrast, 30);
    },
    saturationClick: function () {
      this.$refs.imageEditorObj.ej2Instances.finetuneImage(ImageFinetuneOption.Saturation, 100);
    }
  }

});