
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
      <ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :shapeChanging="shapeChanging" :created="created"></ejs-imageeditor>
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
        ? "https://ej2.syncfusion.com/vue/documentation/image-editor/images/flower.jpeg"
        : "https://ej2.syncfusion.com/vue/documentation/image-editor/images/bridge.jpeg";
      imageEditor.open(imageUrl);
    },
    shapeChanging: function (args) {
      if (args.currentShapeSettings.type === 'Text') {
        args.currentShapeSettings.color = 'red';
        args.currentShapeSettings.fontFamily = 'Times New Roman';
      }
    }
  }
});