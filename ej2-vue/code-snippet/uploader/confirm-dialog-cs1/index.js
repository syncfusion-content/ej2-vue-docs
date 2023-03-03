
import Vue from 'vue';
import { UploaderPlugin, SelectedEventArgs } from '@syncfusion/ej2-vue-inputs';
import { createElement } from '@syncfusion/ej2-base';
import { DialogPlugin } from '@syncfusion/ej2-vue-popups';
Vue.use(DialogPlugin);
Vue.use(UploaderPlugin);

let removeFile: FileInfo[];


new Vue({
	el: '#app',
	template: `

  <div>
    <ejs-uploader ref="uploadObj" id='defaultfileupload' :removing="onremove" name="UploadFiles"  :asyncSettings= "path"></ejs-uploader>
    <div id="dlgContainer">
     <ejs-dialog ref="dialogObj" :buttons="dlgButtons" :target="dlgContainer" :visible="false" :width='width' :content='dialogContent'>
     </ejs-dialog>
    </div>
  </div>
`,

  data: function(){
        return {
          dlgContainer: "#dlgContainer",
          path:  {
            saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
            removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove'
          },
            allowedExtensions: 'image/*',
            dialogContent: 'Confirm to remove the file?',
            width: '250px',
            dlgButtons: [{ click: this.dlgButtonClick, buttonModel: { content: 'OK', isPrimary: true } },
            { click: this.cancelClick, buttonModel: { content: 'Cancel' }}]
        }
    },
    methods: {
        onremove:function(args: SelectedEventArgs): void {
            this.removeFile=[];
            args.cancel = true;
            this.removeFile.push(args.filesData);
            this.$refs.dialogObj.show();
        },
        dlgButtonClick: function() {
            this.$refs.dialogObj.hide();
            this.$refs.uploadObj.remove(this.removeFile[0], false, true);
            this.removeFile = [];
        },
        cancelClick: function(){
            this.$refs.dialogObj.hide()
        }
    }

});