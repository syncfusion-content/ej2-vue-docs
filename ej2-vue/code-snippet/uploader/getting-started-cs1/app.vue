<template>
    <div>
        <div id="modalTarget" class="control-section; position:relative" style="height:350px;">
            <ejs-uploader ref="uploadObj" id='defaultfileupload' name="UploadFiles"></ejs-uploader>
        </div>
    </div>
</template>
<script>
import { UploaderComponent } from '@syncfusion/ej2-vue-inputs';

export default {
    name: "App",
    components: {
        "ejs-uploader": UploaderComponent,
    },
    data: function () {
        return {}
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
</style>