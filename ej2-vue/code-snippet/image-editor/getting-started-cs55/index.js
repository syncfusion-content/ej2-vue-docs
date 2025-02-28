
import Vue from 'vue';
import { ImageEditorPlugin } from "@syncfusion/ej2-vue-image-editor";
import { Browser } from "@syncfusion/ej2-base";

Vue.use(ImageEditorPlugin);

new Vue({
  el: '#app',
  template: `
    <div>
      <ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" :selectionChanging="selectionChanging" width="550px"  :created="created"></ejs-imageeditor>
    </div>
  `,
  data: function () {
    return {};
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
    selectionChanging: function (args) {
      if (args.action === "insert" && args.currentSelectionSettings.type === "Custom") {
        args.currentSelectionSettings.height = 200;
        args.currentSelectionSettings.width = 200;
      }
    }
  }

});