
import Vue from 'vue';
import { UploaderPlugin } from '@syncfusion/ej2-vue-inputs';

Vue.use(UploaderPlugin);


new Vue({
	el: '#app',
	template: `
  <div>
    <ejs-uploader ref="uploadObj" id='defaultfileupload' name="UploadFiles" :asyncSettings= "path" :success="onSuccessHandler"></ejs-uploader>
  </div>
`,

    data: function() {
        return {
            path:  {
                saveUrl: 'api/uploadbox/Save'
            }
        }
    },
    methods:{
        onSuccessHandler: function(args) {
            if (args.e !== null) // Check if the event argument is not null 
            {
                var responseText = args.e.target.responseText;
                if (responseText.trim() !== "") {
    
                    // for JSON and File Datas
                    var jsonResponse = JSON.parse(responseText);
                    if (jsonResponse !== null && jsonResponse.hasOwnProperty("Success"))
                    {
                        var isSuccess = jsonResponse["Success"];
                        if (isSuccess) {
                            // File upload success
                            var message = jsonResponse.hasOwnProperty("Message") ? jsonResponse["Message"] : "File uploaded successfully";
                            // Additional processing as needed
                        }
                    }
    
                    // for string Data
                    var message = responseText;
                    // Additional processing as needed
                }
            }  
        }
    }

});