<template>
    <div>
        <ejs-uploader ref="uploadObj" id='defaultfileupload' name="UploadFiles" :asyncSettings="path"
            :autoUpload='autoUpload' :uploading="onUploadBegin"></ejs-uploader>
    </div>
</template>
<script>
import { UploaderComponent } from '@syncfusion/ej2-vue-inputs';
import { getUniqueID } from '@syncfusion/ej2-base';

export default {
    name: "App",
    components: {
        "ejs-uploader": UploaderComponent
    },
    data: function () {
        return {
            path: {
                saveUrl: 'https://services.syncfusion.com/vue/production/api/FileUploader/Save',
                removeUrl: 'https://services.syncfusion.com/vue/production/api/FileUploader/Remove'
            },
            autoUpload: false
        }
    },
    methods: {
        onUploadBegin: function (args) {
            // check whether the file is uploading from paste.
            if (args.fileData.fileSource === 'paste') {
                let newName = getUniqueID(args.fileData.name.substring(0, args.fileData.name.lastIndexOf('.'))) + '.png';
                args.customFormData = [{ 'fileName': newName }];
            }
        }
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
</style>