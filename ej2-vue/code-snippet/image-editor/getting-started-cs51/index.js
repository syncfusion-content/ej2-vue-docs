import Vue from "vue";
import { ImageEditorPlugin } from "@syncfusion/ej2-vue-image-editor";
import { Browser } from "@syncfusion/ej2-base";

Vue.use(ImageEditorPlugin);

new Vue({
  el: "#app",
  template: `
    <div>
      <ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" @beforeSave="beforeSaved" @saved="saved" :created="created"></ejs-imageeditor>
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
    beforeSaved: function () {
      let imageEditor = this.$refs.imageEditorObj?.ej2Instances;
      if (!imageEditor) return;
      let dimension = imageEditor.getImageDimension();
      imageEditor.drawText(dimension.x, dimension.y, "Syncfusion", "Arial", 40, false, false, "#80330075");
    },
    saved: function () {
      let imageEditor = this.$refs.imageEditorObj?.ej2Instances;
      if (!imageEditor) return;
      let objects = imageEditor.getShapeSettings();
      if (objects.length > 0) {
        imageEditor.deleteShape(objects[objects.length - 1].id);
      }
    }
  }
});