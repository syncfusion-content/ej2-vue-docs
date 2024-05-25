<template>
    <div>
        <ejs-uploader id='preloadFiles' ref="uploadObj" name="UploadFiles" :asyncSettings="path">
            <e-files>
                <e-uploadedfiles name='Nature' size=11000 type='.png'></e-uploadedfiles>
                <e-uploadedfiles name='TypeScript Succintly' size=20000 type='.pdf'></e-uploadedfiles>
                <e-uploadedfiles name='ASP.NET Webhooks' size=35000 type='.docx'></e-uploadedfiles>
            </e-files>
        </ejs-uploader>
    </div>
</template>
<script setup>

import { UploaderComponent as EjsUploader ,FilesDirective as EFiles,UploadedfilesDirective as EUploadedfiles} from '@syncfusion/ej2-vue-inputs';

const path = {
    saveUrl: 'https://services.syncfusion.com/vue/production/api/FileUploader/Save',
    removeUrl: 'https://services.syncfusion.com/vue/production/api/FileUploader/Remove'
};

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
</style>