
import Vue from 'vue';
import { UploaderPlugin, SelectedEventArgs } from '@syncfusion/ej2-vue-inputs';
import { DialogPlugin } from '@syncfusion/ej2-vue-popups';
import { createElement, detach } from '@syncfusion/ej2-base';
Vue.use(UploaderPlugin);
Vue.use(DialogPlugin);


new Vue({
	el: '#app',
	template: `
  <div>
    <ejs-uploader ref="uploadObj" id='defaultfileupload' :selected="onSelect" name="UploadFiles" :autoUpload="autoUpload" :asyncSettings= "path" :allowedExtensions="extensions"></ejs-uploader>
  </div>
`,

  data: function(){
        return {
          path:  {
            saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
            removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove'
          },
            autoUpload: false,
            extensions: 'image/*'
        }
    },
    methods: {
          onSelect:function(args: SelectedEventArgs): void {
                if (args.event.type === 'drop') {
            let allImages: Array<string> = ['png', 'jpg', 'jpeg', 'gif', 'tiff', 'bpg'];
            let files = args.filesData;
            let modifiedFiles = [];
            for (let file of files) {
            if (allImages.indexOf(file.type) === -1) {
                file.status = 'File type is not allowed';
                file.statusCode = '0';
            }
            modifiedFiles.push(file);
            }
            args.isModified = true;
        }
        }
    }

});