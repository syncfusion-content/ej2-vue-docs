<template>
  <div>
    <ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px"
      :toolbarTemplate="customToolbar" @created="onCreated"></ejs-imageeditor>
  </div>
</template>

<script>
import { ImageEditorComponent as EjsImageeditor } from "@syncfusion/ej2-vue-image-editor";
import { Browser } from "@syncfusion/ej2-base";

export default {
  components: {
    EjsImageeditor,
  },
  data() {
    return {
      imageEditorObj: null,
      customToolbar: `
        <div class="e-toolbar">
          <button id="freeHandDrawButton" class="e-btn e-primary">Freehand Draw</button>
        </div>
      `,
    };
  },
  methods: {
    enableFreeHandDraw() {
      const imageEditor = this.imageEditorObj?.ej2Instances;
      if (imageEditor) {
        imageEditor.freeHandDraw(true);
      }
    },
    onCreated() {
      const imageEditor = this.$refs.imageEditorObj?.ej2Instances;
      if (!imageEditor) return;

      this.imageEditorObj = this.$refs.imageEditorObj;

      const imageUrl = Browser.isDevice
        ? "https://ej2.syncfusion.com/vue/documentation/image-editor/images/flower.jpeg"
        : "https://ej2.syncfusion.com/vue/documentation/image-editor/images/bridge.jpeg";

      imageEditor.open(imageUrl);

      this.$nextTick(() => {
        const button = document.getElementById("freeHandDrawButton");
        if (button) {
          button.addEventListener("click", this.enableFreeHandDraw);
        }
      });
    },
  },
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-image-editor/styles/material.css";

#image-editor {
  width: 550px !important;
  height: 350px !important;
}
</style>