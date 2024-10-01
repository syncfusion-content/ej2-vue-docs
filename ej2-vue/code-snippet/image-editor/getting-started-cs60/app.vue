<template>
<div>
<ejs-uploader ref="uploadObj" id='defaultfileupload' name="UploadFiles" :selected="onSelect"></ejs-uploader>
<ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" :toolbar="toolbar"></ejs-imageeditor>
</div>
</template>

<script>

import { ImageEditorComponent } from "@syncfusion/ej2-vue-image-editor";
import { UploaderComponent } from '@syncfusion/ej2-vue-inputs';
import { Browser } from "@syncfusion/ej2-base";

export default {
name: "App",
components: {
"ejs-imageeditor":ImageEditorComponent,
"ejs-uploader": UploaderComponent
},
  data: function() {
      return {
        toolbar: []
      };
  },
  methods: {
    onSelect: function (args) {
      if (args.filesData.length > 0) {
        const reader = new FileReader();
        reader.onload = () => {
            this.$refs.imageEditorObj.ej2Instances.open(reader.result);
        };
        reader.readAsDataURL(args.filesData[0].rawFile);
    }
    },
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
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-image-editor/styles/material.css";


#image-editor {
    width: 550px !important;
    height: 350px !important;
}
</style>