

<template>
  <div>
    <ejs-uploader ref="uploadObj" id='defaultfileupload' name="UploadFiles" :selected = "onSelect" :asyncSettings= "path"></ejs-uploader>
  </div>
</template>
<script>
import Vue from 'vue';
import { UploaderPlugin, SelectedEventArgs } from '@syncfusion/ej2-vue-inputs';
Vue.use(UploaderPlugin);
let initial: boolean = true;
export default {
  data: function(){
        return {
          path:  {
            saveUrl: 'https://services.syncfusion.com/vue/production/api/FileUploader/Save',
            removeUrl: 'https://services.syncfusion.com/vue/production/api/FileUploader/Remove'
          }
        }
    },
    methods: {
 onSelect: function(args: SelectedEventArgs): void {
    if (initial) { initial = false; return; }
    args.isModified = true;
    let oldFiles: FileInfo[] = this.$refs.uploadObj.getFilesData();
    let filesData: FileInfo[] = args.filesData.concat(oldFiles);
    let modifiedData: FileInfo[] = this.sortFileList(filesData);
    args.modifiedFilesData = modifiedData;
},

 sortFileList: function(filesData: FileInfo[]): FileInfo[] {
    let files: FileInfo[] = filesData;
    let fileNames: string[] = [];
    for (let i: number = 0; i < files.length; i++) {
        fileNames.push(files[i].name);
    }
    let sortedFileNames: string[] = fileNames.sort();
    let sortedFilesData: FileInfo[] = [];
    let index: number = 0;
    for (let name of sortedFileNames) {
        for (let i: number = 0; i < files.length; i++) {
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
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
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


