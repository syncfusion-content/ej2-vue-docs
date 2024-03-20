---
layout: post
title: Add additional data on upload in Vue Uploader component | Syncfusion
description: Learn here all about Add additional data on upload in Syncfusion Vue Uploader component of Syncfusion Essential JS 2 and more.
control: Add additional data on upload 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Add additional data on upload in Vue Uploader component

The uploader component allows you to add the additional data on file upload which is used to get in the server end. By using [uploading](https://ej2.syncfusion.com/vue/documentation/api/uploader/#uploading) event and its customFormData argument, you can achieve this behavior.

In the following code snippet, explains about how to add additional data on file upload.

```
<template>
  <div>
    <ejs-uploader ref="uploadObj" id='defaultfileupload' :uploading="onFileUpload" name="UploadFiles"  :autoUpload="autoUpload" :asyncSettings= "path"></ejs-uploader>
  </div>
</template>
<script>
import Vue from 'vue';
import { UploaderPlugin, SelectedEventArgs } from '@syncfusion/ej2-vue-inputs';
import { createElement } from '@syncfusion/ej2-base';
Vue.use(UploaderPlugin);

export default {
  data: function(){
        return {
          path:  {
            saveUrl: 'https://services.syncfusion.com/vue/production/api/FileUploader/Save',
            removeUrl: 'https://services.syncfusion.com/vue/production/api/FileUploader/Remove'
          },
            autoUpload: false,
            allowedExtensions: 'image/*'
        }
    },
    methods: {
        onFileUpload:function(args) {
            // add addition data as key-value pair.
            args.customFormData = [{'name': 'Syncfusion INC'}];
        }
    }
}
</script>
<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
 #container {
    visibility: hidden;
    padding-left: 5%;
    width: 100%;
}
#loader {
    color: #008cff;
    font-family: 'Helvetica Neue','calibiri';
    font-size: 14px;
    height: 40px;
    left: 45%;
    position: absolute;
    top: 45%;
    width: 30%;
}

</style>
```

## Server side for adding additional data

```c#
    // Get the additional data in server end by corresponding key.
    var data = HttpContext.Current.Request.Form["name"];
```

>You can also explore [Vue File Upload](https://www.syncfusion.com/vue-ui-components/vue-file-upload) feature tour page for its groundbreaking features. You can also explore our [Vue File Upload example](https://ej2.syncfusion.com/vue/demos/#/material/uploader/default.html) to understand how to browse the files which you want to upload to the server.
