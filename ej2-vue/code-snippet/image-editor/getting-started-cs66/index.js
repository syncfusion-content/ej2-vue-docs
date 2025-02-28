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
      <ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :toolbar="toolbar" :created="created" v-on:toolbarItemClicked="onToolbarItemClick"></ejs-imageeditor>
    </div>
  `,
  data: function () {
    return {
      toolbar: [
        {
          id: 'rotate-left',
          prefixIcon: 'e-icons e-anti-clock-wise',
          tooltipText: 'Rotate Left',
          align: 'Left',
        },
        {
          id: 'rotate-right',
          prefixIcon: 'e-icons e-clock-wise',
          tooltipText: 'Rotate Right',
          align: 'Left',
        },
        {
          id: 'annotate',
          prefixIcon: 'e-icons e-annotation',
          tooltipText: 'Annotate',
          align: 'Center',
          disabled: true,
        },
        {
          id: 'save',
          prefixIcon: 'e-icons e-save',
          tooltipText: 'Save',
          align: 'Right',
        },
      ],
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
    onToolbarItemClick: function (args) {
      let imageEditor = this.$refs.imageEditorObj?.ej2Instances;
      if (!imageEditor) return;
      if (args.item.id === 'rotate-left') {
        imageEditor.rotate(-90);
      } else if (args.item.id === 'rotate-right') {
        imageEditor.rotate(90);
      } else if (args.item.id === 'save') {
        imageEditor.export('PNG');
      }
    },
  }
});
