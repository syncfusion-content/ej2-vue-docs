<template>
<div>
<ejs-imageeditor id="image-editor" height="350px" width="550px"></ejs-imageeditor>
</div>
</template>

<script>
import { ImageEditorComponent } from "@syncfusion/ej2-vue-image-editor";

export default {
  name: "App",
  components: {
    'ejs-imageeditor': ImageEditorComponent
  },
  data: function() {
      return {};
  }
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/image-editor/index.css";

#image-editor {
    width: 550px !important;
    height: 350px !important;
}
</style>