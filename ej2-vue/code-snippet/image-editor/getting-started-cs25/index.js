
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
      <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="hueClick">Hue</ejs-button>
      <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="exposureClick">Exposure</ejs-button>
      <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="blurClick">Blur</ejs-button>
      <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="opacityClick">Opacity</ejs-button>
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
    hueClick: function () {
      this.$refs.imageEditorObj.ej2Instances.finetuneImage(ImageFinetuneOption.Hue, 20);
    },
    exposureClick: function () {
      this.$refs.imageEditorObj.ej2Instances.finetuneImage(ImageFinetuneOption.Exposure, 20);
    },
    blurClick: function () {
      this.$refs.imageEditorObj.ej2Instances.finetuneImage(ImageFinetuneOption.Blur, 20);
    },
    opacityClick: function () {
      this.$refs.imageEditorObj.ej2Instances.finetuneImage(ImageFinetuneOption.Opacity, 70);
    }
  }

});