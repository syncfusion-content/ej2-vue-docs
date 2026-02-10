
import Vue from 'vue';
import { UploaderPlugin } from '@syncfusion/ej2-vue-inputs';
Vue.use(UploaderPlugin);

new Vue({
    el: '#app',
    template: `
    <div>
        <ejs-uploader ref="uploadObj" id='defaultfileupload' name="UploadFiles" :asyncSettings= "path" :success= "onUploadSuccess" :failure= "onUploadFailed" ></ejs-uploader>
    </div>
    `,

    data: function () {
        return {
            path: {
                saveUrl: 'https://services.syncfusion.com/vue/production/api/FileUploader/Save',
                removeUrl: 'https://services.syncfusion.com/vue/production/api/FileUploader/Remove'
            }
        }
    },
    methods: {
        onUploadSuccess: function (args) {
            console.log('Uploaded successfully');
        },
        onUploadFailed: function (args) {
            console.log('Upload fails');
        }
    }

});