
import Vue from 'vue';
import { UploaderPlugin } from '@syncfusion/ej2-vue-inputs';
Vue.use(UploaderPlugin);


new Vue({
	el: '#app',
	template: `
  <div id="uploaderContainer">
    <!-- Initialize Uploader -->
<div id="dropArea">
    <span id="drop"> Drop image (JPG, PNG) files here or <button class='e-btn e-control' id="browse">Browse</button></span>
</div>
    <ejs-uploader ref="uploadObj" id='defaultfileupload' name="UploadFiles"  :asyncSettings= "path"></ejs-uploader>
  </div>
`,

  data: function(){
        return {
          path:  {
            saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
            removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove'
          }
        }
    },
    mounted:function {
    document.getElementById('browse').onclick = () => {
        document.getElementsByClassName('e-file-select-wrap')[0].querySelector('button').click();
    };
    }

});