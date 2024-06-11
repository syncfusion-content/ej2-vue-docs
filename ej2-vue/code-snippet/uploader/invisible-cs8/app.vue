<template>
  <div>
    <ejs-uploader ref="uploadObj" id='defaultfileupload' name="UploadFiles" :selected = "onSelect" :asyncSettings= "path"></ejs-uploader>
  </div>
</template>
<script>

import { UploaderComponent } from '@syncfusion/ej2-vue-inputs';
 
let initial = true;
export default {
name: "App",
components: {
"ejs-uploader":UploaderComponent
},
  data: function(){
        return {
          path:  {
            saveUrl: 'https://services.syncfusion.com/vue/production/api/FileUploader/Save',
            removeUrl: 'https://services.syncfusion.com/vue/production/api/FileUploader/Remove'
          }
        }
    },
    methods: {
 onSelect: function(args) {
    if (initial) { initial = false; return; }
    args.isModified = true;
    let oldFiles = this.$refs.uploadObj.getFilesData();
    let filesData = args.filesData.concat(oldFiles);
    let modifiedDataleInfo = this.sortFileList(filesData);
    args.modifiedFilesData = modifiedDataleInfo;
},

 sortFileList: function(filesData){
    let files= filesData;
    let fileNames = [];
    for (let i = 0; i < files.length; i++) {
        fileNames.push(files[i].name);
    }
    let sortedFileNames = fileNames.sort();
    let sortedFilesData = [];

    for (let name of sortedFileNames) {
        for (let i = 0; i < files.length; i++) {
            if (name === files[i].name) {
                sortedFilesData.push(files[i]);
            }
        }
    }
    return sortedFilesData;
}

    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
 #container {
        visibility: hidden;
        padding-left: 5%;
        width: 100%;
    }
    #loader {
        color: #008cff;
        font-family: 'Helvetica Neue','calibiri';
        font-size: 14px;
        height: 40px;
        left: 45%;
        position: absolute;
        top: 45%;
        width: 30%;
    }
</style>