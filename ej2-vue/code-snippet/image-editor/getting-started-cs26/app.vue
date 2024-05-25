<template>
<div>
<ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :created="created" :toolbar="toolbar"></ejs-imageeditor>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="chromeClick">Chrome</ejs-button>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="coldClick">Cold</ejs-button>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="warmClick">Warm</ejs-button>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="grayScaleClick">GrayScale</ejs-button>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="sepiaClick">Sepia</ejs-button>
<ejs-button cssClass="e-img-button" :isPrimary="true" v-on:click="invertClick">Invert</ejs-button>
</div>
</template>

<script>

import { ImageEditorComponent } from "@syncfusion/ej2-vue-image-editor";
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
     created: function() {
        if (Browser.isDevice) {
            this.$refs.imageEditorObj.open('flower.png');
        } else {
            this.$refs.imageEditorObj.open('bridge.png');
        }
    },
    chromeClick: function() {
      this.$refs.imageEditorObj.ej2Instances.applyImageFilter('Chrome');
    },
    coldClick: function() {
      this.$refs.imageEditorObj.ej2Instances.applyImageFilter('Cold');
    },
    warmClick: function() {
      this.$refs.imageEditorObj.ej2Instances.applyImageFilter('Warm');
    },
    grayScaleClick: function() {
      this.$refs.imageEditorObj.ej2Instances.applyImageFilter('GrayScale');
    },
    sepiaClick: function() {
      this.$refs.imageEditorObj.ej2Instances.applyImageFilter('Sepia');
    },
    invertClick: function() {
      this.$refs.imageEditorObj.ej2Instances.applyImageFilter('Invert');
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