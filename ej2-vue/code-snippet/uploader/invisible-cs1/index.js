
import Vue from 'vue';
import { UploaderPlugin } from '@syncfusion/ej2-vue-inputs';
Vue.use(UploaderPlugin);


new Vue({
	el: '#app',
	template: `
  <div>
    <ejs-uploader ref="uploadObj" id='defaultfileupload' name="UploadFiles"  :autoUpload="autoUpload" :asyncSettings= "path"></ejs-uploader>
    <div id="btnContainer">
        <span style='padding-left: 40px;'>
        <button id='first' style='margin-top: 30px' class='e-btn e-control'>Upload first file</button>
    </span>
    <span style=' padding-left: 40px;'>
        <button style='margin-top: 30px' id='full' class='e-btn e-control'>Upload all files</button>
    </span>
  </div>
  </div>
`,

  data: function(){
        return {
          path:  {
            saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
            removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove'
          },
            autoUpload: false
        }
    },
    mounted: function() {
       document.getElementById('first').onclick = (args) => {
    this.$refs.uploadObj.upload(this.$refs.uploadObj.getFilesData()[0]);
};

document.getElementById('full').onclick = (args) => {
    this.$refs.uploadObj.upload(this.$refs.uploadObj.getFilesData());
};
    }

});