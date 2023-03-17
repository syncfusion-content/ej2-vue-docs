

<template>
  <div id="UploaderDropTarget">
         <div id='dropArea' style='height: auto; overflow: auto'>
            <span id='drop'> Drop files here or <a href="" id='browse'><u>Browse</u></a> </span>
        <ejs-uploader id='templateupload' name="UploadFiles" :asyncSettings= "path" ref="uploadObj" :dropArea= "dropElement">
        </ejs-uploader>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { UploaderPlugin } from '@syncfusion/ej2-vue-inputs';
Vue.use(UploaderPlugin);

export default {
    data: function() {
        return {
            path:  {
                saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
                removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove'
            },
            dropElement: '#drop'
        }
    },
     mounted: function () {
        document.getElementById('browse').onclick = () => {
        document.getElementsByClassName('e-file-select-wrap')[0].querySelector('#templateupload').click();
        return false;
    }
}
}
</script>
<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
   #UploaderDropTarget {
        min-height: 50px;
        padding-top: 15px;
        position: relative;
        display: inline-block;
        font-size: 13px;
        top: -3px;
        width: 100%;
    }

.e-file-select-wrap {
    display: none;
}
#dropArea .e-upload {
    border: 0;
    margin-top: 15px;
}
#drop {
    padding-left: 30%;
}
#dropArea {
    min-height: 18px;
    border: 1px dashed #c3c3cc;
    padding-top: 15px;
    margin: 20px auto;
    width: 400px;
}

</style>


