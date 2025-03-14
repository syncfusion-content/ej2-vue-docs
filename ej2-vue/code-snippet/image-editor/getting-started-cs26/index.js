
import Vue from 'vue';
import { ImageEditorPlugin, ImageFilterOption } from "@syncfusion/ej2-vue-image-editor";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { Browser } from "@syncfusion/ej2-base";

Vue.use(ImageEditorPlugin);
Vue.use(ButtonPlugin);
Vue.use(ImageFilterOption);

new Vue({
  el: '#app',
  template: `
    <div>
      <ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :toolbar="toolbar" :created="created"></ejs-imageeditor>
      <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="chromeClick">Chrome</ejs-button>
      <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="coldClick">Cold</ejs-button>
      <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="warmClick">Warm</ejs-button>
      <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="grayScaleClick">GrayScale</ejs-button>
      <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="sepiaClick">Sepia</ejs-button>
      <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="invertClick">Invert</ejs-button>
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
    chromeClick: function () {
      this.$refs.imageEditorObj.ej2Instances.applyImageFilter('Chrome');
    },
    coldClick: function () {
      this.$refs.imageEditorObj.ej2Instances.applyImageFilter('Cold');
    },
    warmClick: function () {
      this.$refs.imageEditorObj.ej2Instances.applyImageFilter('Warm');
    },
    grayScaleClick: function () {
      this.$refs.imageEditorObj.ej2Instances.applyImageFilter('GrayScale');
    },
    sepiaClick: function () {
      this.$refs.imageEditorObj.ej2Instances.applyImageFilter('Sepia');
    },
    invertClick: function () {
      this.$refs.imageEditorObj.ej2Instances.applyImageFilter('Invert');
    }
  }

});