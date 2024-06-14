<template>
    <div>
        <ejs-uploader ref="uploadObj" id='defaultfileupload' name="UploadFiles" :asyncSettings="path"
         :success="onSuccessHandler"></ejs-uploader>
    </div>
</template>
<script>
import { UploaderComponent } from '@syncfusion/ej2-vue-inputs';

export default {
    name: "App",
    components: {
        "ejs-uploader": UploaderComponent
    },
    data: function () {
        return {
            path: {
                saveUrl: 'api/FileUploader/Save'
            }
        }
    },
    methods: {
        onSuccessHandler: function (args) {
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
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
</style>