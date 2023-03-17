

<template>
    <div class="col-lg-8 control-section uploader chunk">
        <div class="control_wrapper">
            <ejs-uploader id='chunkupload' name="UploadFiles" :asyncSettings= "path" ref="uploadObj">
            </ejs-uploader>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import { UploaderPlugin } from '@syncfusion/ej2-vue-inputs';
Vue.use(UploaderPlugin);

export default {
 data: function(){
        return {
          path:  {
            saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
            removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove',
            chunkSize: 500000,
             // set count for automatic retry when chunk upload failed
            retryCount: 5,
            // set time delay for automatic retry when chunk upload failed
            retryAfterDelay: 3000
          }
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
.chunk .control_wrapper {
    max-width: 450px;
    min-width: 245px;
    margin: auto;
}
#chunkupload .e-upload.e-control {
    position: relative;
    margin: 15px 0;
}

.control-section .uploader.col-lg-8 {
    padding: 20px;
}
</style>


