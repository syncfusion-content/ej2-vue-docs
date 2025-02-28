
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
      <ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :toolbar="toolbar" :created="created"></ejs-imageeditor>
      <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="rectangleClick">Rectangle</ejs-button>
      <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="ellipseClick">Ellipse</ejs-button>
      <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="lineClick">Line</ejs-button>
      <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="pathClick">Path</ejs-button>
      <ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click.native="arrowClick">Arrow</ejs-button>
    </div>
  `,
  data: function () {
    return {
      toolbar: []
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
    rectangleClick: function () {
      let dimension = this.$refs.imageEditorObj.ej2Instances.getImageDimension();
      this.$refs.imageEditorObj.ej2Instances.drawRectangle(dimension.x + 10, dimension.y + 60, 150, 70);
      this.$refs.imageEditorObj.ej2Instances.drawRectangle(dimension.x + 250, dimension.y + 60, 150, 70, null, '', '', null, null, 8);
    },
    ellipseClick: function () {
      let dimension = this.$refs.imageEditorObj.ej2Instances.getImageDimension();
      this.$refs.imageEditorObj.ej2Instances.drawEllipse(dimension.x, dimension.y + 200);
    },
    lineClick: function () {
      let dimension = this.$refs.imageEditorObj.ej2Instances.getImageDimension();
      this.$refs.imageEditorObj.ej2Instances.drawLine(dimension.x + 300, dimension.y + 30);
    },
    pathClick: function () {
      let dimension = this.$refs.imageEditorObj.ej2Instances.getImageDimension();
      this.$refs.imageEditorObj.ej2Instances.drawPath([{ x: dimension.x, y: dimension.y }, { x: dimension.x + 50, y: dimension.y + 50 }, { x: dimension.x + 20, y: dimension.y + 50 }], 8);
    },
    arrowClick: function () {
      let dimension = this.$refs.imageEditorObj.ej2Instances.getImageDimension();
      this.$refs.imageEditorObj.ej2Instances.drawArrow(dimension.x + 150, dimension.y + 150, dimension.x + 300, dimension.y + 150, 10);
    }
  }

});