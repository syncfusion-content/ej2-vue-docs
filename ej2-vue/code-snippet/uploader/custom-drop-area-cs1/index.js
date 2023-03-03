
import Vue from 'vue';
import { UploaderPlugin } from '@syncfusion/ej2-vue-inputs';
Vue.use(UploaderPlugin);


new Vue({
	el: '#app',
	template: `
  <div id="UploaderDropTarget">
         <div id='dropArea' style='height: auto; overflow: auto'>
            <span id='drop'> Drop files here or <a href="" id='browse'><u>Browse</u></a> </span>
        <ejs-uploader id='templateupload' name="UploadFiles" :asyncSettings= "path" ref="uploadObj" :dropArea= "dropElement">
        </ejs-uploader>
    </div>
  </div>
`,

    data: function() {
        return {
            path:  {
                saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
                removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove'
            },
            dropElement: '#drop'
        }
    },
     mounted: function () {
        document.getElementById('browse').onclick = () => {
        document.getElementsByClassName('e-file-select-wrap')[0].querySelector('#templateupload').click();
        return false;
    }
}

});