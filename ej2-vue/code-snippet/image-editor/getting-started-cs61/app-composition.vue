<template>
  <div>
    <div class="control-section">
      <div class="sample-container">
        <ejs-filemanager id="flat_data" :fileSystemData="fileSystemData" height="200px" @fileOpen="fileOpen"></ejs-filemanager>
        <ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px"></ejs-imageeditor>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { FileManagerComponent as EjsFilemanager } from "@syncfusion/ej2-vue-filemanager";
import { ImageEditorComponent as EjsImageeditor} from "@syncfusion/ej2-vue-image-editor";

const fileSystemData = ref([
  {
    dateCreated: new Date("2023-11-15T19:02:02.3419426+05:30"),
    dateModified: new Date("2024-01-08T16:55:20.9464164+05:30"),
    filterPath: "\\",
    hasChild: true,
    id: "0",
    isFile: false,
    name: "Pictures",
    parentId: "0",
    size: 228465,
    type: "folder",
  },
  {
    dateCreated: new Date("2023-11-15T19:02:02.3419426+05:30"),
    dateModified: new Date("2024-01-08T16:55:20.9464164+05:30"),
    filterPath: "\\Pictures\\",
    hasChild: false,
    id: "1",
    isFile: true,
    name: "Flower",
    parentId: "0",
    size: 69632,
    type: ".png",
    imageUrl:
      "https://ej2.syncfusion.com/vue/documentation/image-editor/images/flower.jpeg",
  },
  {
    dateCreated: new Date("2023-11-15T19:02:02.3419426+05:30"),
    dateModified: new Date("2024-01-08T16:55:20.9464164+05:30"),
    filterPath: "\\Pictures\\",
    hasChild: false,
    id: "2",
    isFile: true,
    name: "Bridge",
    parentId: "0",
    size: 48951,
    type: ".png",
    imageUrl:
      "https://ej2.syncfusion.com/vue/documentation/image-editor/images/bridge.jpeg",
  },
]);

const imageEditorObj = ref(null);

const fileOpen = (args) => {
  let file = args.fileDetails;
  if (file.isFile && file.imageUrl) {
    args.cancel = true;
    imageEditorObj.value?.ej2Instances.open(file.imageUrl);
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
@import "../node_modules/@syncfusion/ej2-filemanager/styles/material.css";

#image-editor {
  width: 550px !important;
  height: 350px !important;
}
</style>