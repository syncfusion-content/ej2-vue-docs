import Vue from 'vue';
import { ImageEditorPlugin, FrameType, FrameLineStyle } from "@syncfusion/ej2-vue-image-editor";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { Browser } from "@syncfusion/ej2-base";

Vue.use(ImageEditorPlugin);
Vue.use(ButtonPlugin);

new Vue({
  el: '#app',
  template: `
    <div>
      <ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :toolbar="toolbar" :created="created"></ejs-imageeditor>
      <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="matClick">Mat</ejs-button>
      <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="bevelClick">Bevel</ejs-button>
      <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="lineClick">Line</ejs-button>
      <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="insetClick">Inset</ejs-button>
      <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="hookClick">Hook</ejs-button>
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
    matClick: function () {
      this.$refs.imageEditorObj.ej2Instances.drawFrame(FrameType.Mat, 'red', 'blue', 20, 20, 20, 20, FrameLineStyle.Solid, 1);
    },
    bevelClick: function () {
      this.$refs.imageEditorObj.ej2Instances.drawFrame(FrameType.Bevel, 'red', 'blue', 20, 20, 20, 20, FrameLineStyle.Solid, 1);
    },
    lineClick: function () {
      this.$refs.imageEditorObj.ej2Instances.drawFrame(FrameType.Line, 'red', 'blue', 20, 20, 20, 20, FrameLineStyle.Solid, 1);
    },
    insetClick: function () {
      this.$refs.imageEditorObj.ej2Instances.drawFrame(FrameType.Inset, 'red', 'blue', 20, 20, 20, 20, FrameLineStyle.Solid, 1);
    },
    hookClick: function () {
      this.$refs.imageEditorObj.ej2Instances.drawFrame(FrameType.Hook, 'red', 'blue', 20, 20, 20, 20, FrameLineStyle.Solid, 1);
    }
  }

});