
import Vue from 'vue';
import { ImageEditorPlugin } from "@syncfusion/ej2-vue-image-editor";
import { Browser } from "@syncfusion/ej2-base";

Vue.use(ImageEditorPlugin);


new Vue({
  el: '#app',
  template: `
    <div>
      <ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :toolbar="toolbar" :created="created" :toolbarItemClicked="toolbarItemClicked"></ejs-imageeditor>
    </div>
  `,
  data: function () {
    return {
      toolbar: ['Crop', 'CustomSelection', 'SquareSelection', 'ZoomIn', 'ZoomOut', { text: 'Rotate' }]
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
    toolbarItemClicked: function (args) {
      if (args.item.text === 'Rotate') {
        this.$refs.imageEditorObj.ej2Instances.rotate(90);
      }
    }
  }

});