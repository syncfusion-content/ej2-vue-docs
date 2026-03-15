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
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-lists/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-image-editor/styles/material3.css";


#image-editor {
    width: 550px !important;
    height: 350px !important;
}
</style>