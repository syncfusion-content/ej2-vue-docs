
import Vue from 'vue';
import { ImageEditorPlugin } from "@syncfusion/ej2-vue-image-editor";
import { Browser } from "@syncfusion/ej2-base";

Vue.use(ImageEditorPlugin);

new Vue({
  el: '#app',
  template: `
    <div>
      <ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :toolbarItemClicked="toolbarItemClicked" :toolbar="toolbar" :created="created"></ejs-imageeditor>
    </div>
  `,
  data: function () {
    return {
      toolbar: [{ text: 'Custom' }]
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
    toolbarItemClicked: function (args) {
      if (args.item.text === 'Custom') {
        this.$refs.imageEditorObj.rotate(90);
      }
    }
  }
});