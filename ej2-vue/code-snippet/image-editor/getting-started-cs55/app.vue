<template>
<div>
<ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :selectionChanging="selectionChanging"></ejs-imageeditor>
</div>
</template>

<script>

import { ImageEditorComponent } from "@syncfusion/ej2-vue-image-editor";
import { Browser } from "@syncfusion/ej2-base";

export default {
name: "App",
components: {
"ejs-imageeditor":ImageEditorComponent
},
  data: function() {
      return {
      };
  },
  methods: {
    selectionChanging: function(args) {
      if (args.action === "insert" && args.currentSelectionSettings.type === "Custom") {
        args.currentSelectionSettings.height = 200;
        args.currentSelectionSettings.width = 200;
      }
    }
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