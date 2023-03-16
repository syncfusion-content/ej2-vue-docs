
import Vue from 'vue';
import { UploaderPlugin } from '@syncfusion/ej2-vue-inputs';
Vue.use(UploaderPlugin);


new Vue({
	el: '#app',
	template: `
  <div>
  <ejs-uploader id='preloadFiles' ref="uploadObj" name="UploadFiles" :asyncSettings= "path" >
    <e-files>
        <e-uploadedfiles name='Nature' size=11000 type='.png'></e-uploadedfiles>
        <e-uploadedfiles name='TypeScript Succintly' size=20000 type='.pdf'></e-uploadedfiles>
        <e-uploadedfiles name='ASP.NET Webhooks' size=35000 type='.docx'></e-uploadedfiles>
    </e-files>
    </ejs-uploader>
  </div>
`,

    data: function() {
        return {
            path:  {
                saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
                removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove'
            }
        }
    }

});