
import Vue from 'vue';
import { UploaderPlugin } from '@syncfusion/ej2-vue-inputs';
Vue.use(UploaderPlugin);


new Vue({
	el: '#app',
	template: `
  <div>
    <div id='droparea'  >
            Drop files here to upload
    </div>
    <ejs-uploader ref="uploadObj" id='defaultfileupload' name="UploadFiles"  :dropArea = "dropElement"></ejs-uploader>
  </div>
`,

    data: function() {
        return {
        dropElement: '#droparea'
        }
    }

});