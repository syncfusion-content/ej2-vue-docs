
import Vue from 'vue';
import { ImageEditorPlugin } from "@syncfusion/ej2-vue-image-editor";
import { Browser } from "@syncfusion/ej2-base";

Vue.use(ImageEditorPlugin);

new Vue({
  el: '#app',
  template: `
  <div>
    <ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :selectionChanging="selectionChanging" :created="created"></ejs-imageeditor>
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
        ? "flower.jpeg"
        : "bridge.jpeg";
      imageEditor.open(imageUrl);
    },
    selectionChanging: function (args) {
      if (args.action == "resize") {
        args.currentSelectionSettings = args.previousSelectionSettings;
      }
    }
  }

});