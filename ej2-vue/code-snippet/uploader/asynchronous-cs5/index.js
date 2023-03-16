
import Vue from 'vue';
import { UploaderPlugin, UploadingEventArgs } from '@syncfusion/ej2-vue-inputs';
import { getUniqueID } from '@syncfusion/ej2-base';
Vue.use(UploaderPlugin);


new Vue({
	el: '#app',
	template: `
  <div>
    <ejs-uploader ref="uploadObj" id='defaultfileupload' name="UploadFiles" :asyncSettings= "path" :autoUpload= 'autoUpload' :uploading="onUploadBegin"></ejs-uploader>
  </div>
`,

    data: function() {
        return {
            path:  {
                saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
                removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove'
            },
            autoUpload: false
        }
    },
    methods:{
        onUploadBegin: function(args) {
            // check whether the file is uploading from paste.
            if (args.fileData.fileSource === 'paste') {
                let newName: string = getUniqueID(args.fileData.name.substring(0, args.fileData.name.lastIndexOf('.'))) + '.png';
                args.customFormData = [{'fileName': newName}];
            }
        }
    }

});