<template>
    <div>
        <ejs-uploader ref="uploadObj" id='defaultfileupload' name="UploadFiles" :selected="onSelect"
            :showFileList="false"></ejs-uploader>
        <ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px"></ejs-imageeditor>
    </div>
</template>

<script setup>

import { ImageEditorComponent as EjsImageeditor } from "@syncfusion/ej2-vue-image-editor";
import { UploaderComponent as EjsUploader } from '@syncfusion/ej2-vue-inputs';
import { ref } from "vue";

const imageEditorObj = ref(null);
const onSelect = (args) => {
    if (args.filesData.length > 0) {
        const reader = new FileReader();
        reader.onload = () => {
            imageEditorObj.value.open(reader.result);
        };
        reader.readAsDataURL(args.filesData[0].rawFile);
    }
};

</script>

<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/image-editor/index.css";

#image-editor {
    width: 550px !important;
    height: 330px !important;
}
</style>