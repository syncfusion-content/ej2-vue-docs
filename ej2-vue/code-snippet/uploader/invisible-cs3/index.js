
import Vue from 'vue';
import { UploaderPlugin } from '@syncfusion/ej2-vue-inputs';
Vue.use(UploaderPlugin);


new Vue({
	el: '#app',
	template: `
  <div>
    <ejs-uploader ref="uploadObj" id='defaultfileupload' name="UploadFiles"  :autoUpload="autoUpload" :asyncSettings= "path" :uploading="onBeforeUpload"></ejs-uploader>
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
    methods: {
onBeforeUpload: function(args): void {
    // get the file size in bytes
    let sizeInBytes: number = args.fileData.size;
    // get the file size in standard format
    alert("File size is: " + this.$refs.uploadObj.bytesToSize(sizeInBytes))
}
    }

});