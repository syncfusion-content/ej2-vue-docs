<template>
<div>
<ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :toolbar="toolbar"></ejs-imageeditor>
</div>
</template>

<script>

import { ImageEditorComponent } from "@syncfusion/ej2-vue-image-editor";

export default {
name: "App",
components: {
"ejs-imageeditor":ImageEditorComponent,
},
  data: function() {
      return {
        toolbar: ['Crop', 'ZoomIn', 'ZoomOut', {text: 'Custom'}]
      };
  }
}
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