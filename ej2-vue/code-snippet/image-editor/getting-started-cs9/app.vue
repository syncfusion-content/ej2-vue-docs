<template>
  <div>
    <ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :toolbar="toolbar">
    </ejs-imageeditor>
    <ejs-button id="open-btn" cssClass="e-primary" @click="openImage">Open Image</ejs-button>
  </div>
</template>

<script>
import { ImageEditorComponent } from "@syncfusion/ej2-vue-image-editor";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { Browser } from "@syncfusion/ej2-base";

export default {
  name: "App",
  components: {
    "ejs-imageeditor": ImageEditorComponent,
    "ejs-button": ButtonComponent
  },
  data() {
    return {
      toolbar: []
    };
  },
  methods: {
    openImage() {
      this.$refs.imageEditorObj.open('https://ej2.syncfusion.com/vue/documentation/image-editor/images/bridge.jpeg');
    }
  }
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/image-editor/index.css";

#image-editor {
  width: 550px !important;
  height: 350px !important;
}
</style>