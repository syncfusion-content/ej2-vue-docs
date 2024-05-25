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
<script>
import { UploaderComponent ,FilesDirective,UploadedfilesDirective} from '@syncfusion/ej2-vue-inputs';

export default {
    name: "App",
    components: {
        "ejs-uploader": UploaderComponent,
        "e-files": FilesDirective,
        "e-uploadedfiles": UploadedfilesDirective
    },
    data: function () {
        return {
            path: {
                saveUrl: 'https://services.syncfusion.com/vue/production/api/FileUploader/Save',
                removeUrl: 'https://services.syncfusion.com/vue/production/api/FileUploader/Remove'
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