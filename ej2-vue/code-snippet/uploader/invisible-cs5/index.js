
import Vue from 'vue';
import { UploaderPlugin, SelectedEventArgs } from '@syncfusion/ej2-vue-inputs';
import { createElement } from '@syncfusion/ej2-base';
Vue.use(UploaderPlugin);
let uploadEle = createElement('span', { className: 'upload e-icons' });
uploadEle.innerHTML = 'Upload All';
let clearEle = createElement('span', { className: 'remove e-icons' });
clearEle.innerHTML = 'Clear All';


new Vue({
	el: '#app',
	template: `
  <div>
    <ejs-uploader ref="uploadObj" id='defaultfileupload' name="UploadFiles" :buttons="buttons" :autoUpload="autoUpload" :asyncSettings= "path"></ejs-uploader>
  </div>
`,

  data: function(){
        return {
          path:  {
            saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
            removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove'
          },
        autoUpload: false,
        buttons: {
        browse: 'Choose file',
        clear: clearEle,
        upload: uploadEle
        }
        }
    }

});