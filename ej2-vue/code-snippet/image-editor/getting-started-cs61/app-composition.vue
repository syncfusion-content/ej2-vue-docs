<template>
<div>
    <ejs-treeview id='treeview' ref="treeViewObj" :fields="fields" :nodeClicked='clicked'></ejs-treeview>
  <ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px"></ejs-imageeditor>
</div>
</template>

<script setup>

import { ImageEditorComponent as EjsImageeditor} from "@syncfusion/ej2-vue-image-editor";
import { TreeViewComponent  } from "@syncfusion/ej2-vue-navigations";
import { Browser } from "@syncfusion/ej2-base";
import { ref } from "vue";

const imageEditorObj = ref(null);
const clicked = () => {
    let file = args.fileDetails;
      let fileName = file.name;
      let filePath = file.filterPath.replace(/\\/g, '/') + fileName;
      let basePath = document.getElementById('filemanager')?.ej2_instances[0];
      let imagePath = `${basePath.ajaxSettings.getImageUrl}?path=${filePath}`;
      if (file.isFile) {
        args.cancel = true;
        imageEditorObj.value.ej2Instances.open(imagePath);
      }
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