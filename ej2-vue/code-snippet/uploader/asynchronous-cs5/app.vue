

<template>
  <div>
    <ejs-uploader ref="uploadObj" id='defaultfileupload' name="UploadFiles" :asyncSettings= "path" :autoUpload= 'autoUpload' :uploading="onUploadBegin"></ejs-uploader>
  </div>
</template>
<script>
import Vue from 'vue';
import { UploaderPlugin, UploadingEventArgs } from '@syncfusion/ej2-vue-inputs';
import { getUniqueID } from '@syncfusion/ej2-base';
Vue.use(UploaderPlugin);

export default {
    data: function() {
        return {
            path:  {
                saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
                removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove'
            },
            autoUpload: false
        }
    },
    methods:{
        onUploadBegin: function(args) {
            // check whether the file is uploading from paste.
            if (args.fileData.fileSource === 'paste') {
                let newName: string = getUniqueID(args.fileData.name.substring(0, args.fileData.name.lastIndexOf('.'))) + '.png';
                args.customFormData = [{'fileName': newName}];
            }
        }
    }
}
</script>
<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
</style>


