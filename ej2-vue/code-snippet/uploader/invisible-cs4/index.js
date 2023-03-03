
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
 // get the file MIME type
    alert("File MIME type is: " + args.fileData.rawFile.type)
}
    }

});