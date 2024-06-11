<template>
<div>
<ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :toolbar="toolbar"></ejs-imageeditor>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="matClick">Mat</ejs-button>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="bevelClick">Bevel</ejs-button>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="lineClick">Line</ejs-button>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="insetClick">Inset</ejs-button>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="hookClick">Hook</ejs-button>
</div>
</template>

<script>

import { ImageEditorComponent, FrameType, FrameLineStyle  } from "@syncfusion/ej2-vue-image-editor";
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { Browser } from "@syncfusion/ej2-base";

export default {
name: "App",
components: {
"ejs-imageeditor":ImageEditorComponent,
"ejs-button":ButtonComponent
},
  data: function() {
      return {
        toolbar: []
      };
  },
  methods: {
    matClick: function() {
      this.$refs.imageEditorObj.ej2Instances.drawFrame(FrameType.Mat, 'red', 'blue', 20, 20, 20, 20, FrameLineStyle.Solid, 1);
    },
    bevelClick: function() {
      this.$refs.imageEditorObj.ej2Instances.drawFrame(FrameType.Bevel, 'red', 'blue', 20, 20, 20, 20, FrameLineStyle.Solid, 1);
    },
    lineClick: function() {
      this.$refs.imageEditorObj.ej2Instances.drawFrame(FrameType.Line, 'red', 'blue', 20, 20, 20, 20, FrameLineStyle.Solid, 1);
    },
    insetClick: function() {
      this.$refs.imageEditorObj.ej2Instances.drawFrame(FrameType.Inset, 'red', 'blue', 20, 20, 20, 20, FrameLineStyle.Solid, 1);
    },
    hookClick: function() {
      this.$refs.imageEditorObj.ej2Instances.drawFrame(FrameType.Hook, 'red', 'blue', 20, 20, 20, 20, FrameLineStyle.Solid, 1);
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