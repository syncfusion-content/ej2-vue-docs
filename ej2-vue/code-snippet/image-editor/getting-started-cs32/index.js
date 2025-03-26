
import Vue from 'vue';
import { ImageEditorPlugin, ImageFinetunePlugin } from "@syncfusion/ej2-vue-image-editor";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { Browser } from "@syncfusion/ej2-base";

Vue.use(ImageEditorPlugin);
Vue.use(ButtonPlugin);

new Vue({
  el: '#app',
  template: `
    <div>
      <ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :quickAccessToolbarOpen="quickAccessToolbarOpen" :created="created"></ejs-imageeditor>
    </div>
  `,
  data: function () {
    return {};
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
    quickAccessToolbarOpen: function (args) {
      args.toolbarItems = ['Clone'];
    }
  }
});