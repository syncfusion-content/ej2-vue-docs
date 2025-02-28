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
    </div>
  `,
  data: function () {
    return {
      fontFamily: {
        default: "Arial",
        items: [
          { id: "arial", text: "Arial" },
          { id: "brush script mt", text: "Brush Script MT" },
          { id: "papyrus", text: "Papyrus" },
          { id: "times new roman", text: "Times New Roman" },
          { id: "courier new", text: "Courier New" }
        ]
      }
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
      imageEditor.fontFamily = this.fontFamily;
    },
  }

});