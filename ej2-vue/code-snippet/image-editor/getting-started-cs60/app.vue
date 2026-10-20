<template>
  <div>
    <ejs-uploader ref="uploadObj" id='defaultfileupload' name="UploadFiles" :selected="onSelect"
      :showFileList="false"></ejs-uploader>
    <ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px"></ejs-imageeditor>
  </div>
</template>

<script>

import { ImageEditorComponent } from "@syncfusion/ej2-vue-image-editor";
import { UploaderComponent } from '@syncfusion/ej2-vue-inputs';

export default {
  name: "App",
  components: {
    "ejs-imageeditor": ImageEditorComponent,
    "ejs-uploader": UploaderComponent
  },
  data: function () {
    return {};
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
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/image-editor/index.css";

#image-editor {
  width: 550px !important;
  height: 330px !important;
}
</style>