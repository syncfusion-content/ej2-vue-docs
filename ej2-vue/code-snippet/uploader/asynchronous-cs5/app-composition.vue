<template>
    <div>
        <ejs-uploader ref="uploadObj" id='defaultfileupload' name="UploadFiles" :asyncSettings="path"
            :autoUpload='autoUpload' :uploading="onUploadBegin"></ejs-uploader>
    </div>
</template>
<script setup>

import { UploaderComponent as EjsUploader} from '@syncfusion/ej2-vue-inputs';
import { getUniqueID } from '@syncfusion/ej2-base';

const path = {
    saveUrl: 'https://services.syncfusion.com/vue/production/api/FileUploader/Save',
    removeUrl: 'https://services.syncfusion.com/vue/production/api/FileUploader/Remove'
};
const autoUpload = false;

const onUploadBegin = (args) => {
    // check whether the file is uploading from paste.
    if (args.fileData.fileSource === 'paste') {
        let newName = getUniqueID(args.fileData.name.substring(0, args.fileData.name.lastIndexOf('.'))) + '.png';
        args.customFormData = [{ 'fileName': newName }];
    }
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
</style>