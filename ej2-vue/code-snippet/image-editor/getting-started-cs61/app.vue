<template>
    <div>
        <ejs-filemanager id="file-manager" :ajaxSettings="ajaxSettings" height="350px" width="550px" :fileOpen='fileOpen'></ejs-filemanager>
    <ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" ></ejs-imageeditor>
</div >
</template >

<script>

import { ImageEditorComponent } from "@syncfusion/ej2-vue-image-editor";
import { FileManagerComponent, DetailsView, NavigationPane, Toolbar } from "@syncfusion/ej2-vue-filemanager";
export default {
name: "App",
components: {
"ejs-imageeditor":ImageEditorComponent,
 "ejs-filemanager": FileManagerComponent
},
    data() {
      var hostUrl = 'https://ej2-aspcore-service.azurewebsites.net/';
      return {
        ajaxSettings:
      {
        url: hostUrl + 'api/FileManager/FileOperations',
        getImageUrl: hostUrl + 'api/FileManager/GetImage',
        uploadUrl: hostUrl + 'api/FileManager/Upload',
        downloadUrl: hostUrl + 'api/FileManager/Download'
      },
      };
  },
  methods: {
    fileOpen: function(args) {
      let file = args.fileDetails;
      let fileName = file.name;
      let filePath = file.filterPath.replace(/\\/g, '/') + fileName;
      let basePath = document.getElementById('filemanager')?.ej2_instances[0];
      let imagePath = `${basePath.ajaxSettings.getImageUrl}?path=${filePath}`;
      if (file.isFile) {
        args.cancel = true;
        this.$refs.imageEditorObj.ej2Instances.open(imagePath);
      }
    }
  },  
  provide: {
    filemanager: [DetailsView, NavigationPane, Toolbar]
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