---
layout: post
title: How to add additional data on upload in Vue Uploader | Syncfusion
description: Pass extra form fields to the server with each Syncfusion Vue Uploader upload by setting customFormData in the uploading event.
control: Add additional data on upload 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to add additional data on upload in Vue Uploader

The Uploader component allows you to add additional data on file upload, which can be received on the server end. By using the [uploading](https://ej2.syncfusion.com/vue/documentation/api/uploader/index-default#uploading) event and its `customFormData` argument, you can achieve this behavior.

The following code snippet explains how to add additional data on file upload.

```
<template>
  <div>
    <ejs-uploader ref="uploadObj" id='defaultfileupload' :uploading="onFileUpload" name="UploadFiles"  :autoUpload="autoUpload" :asyncSettings= "path"></ejs-uploader>
  </div>
</template>
<script>

import { UploaderComponent, SelectedEventArgs } from '@syncfusion/ej2-vue-inputs';
import { createElement } from '@syncfusion/ej2-base';

export default {
  data: function() {
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
        onFileUpload: function(args) {
            // add additional data as key-value pair.
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
    // Get the additional data on the server end by its corresponding key.
    var data = HttpContext.Current.Request.Form["name"];
```

>You can also explore [Vue File Upload](https://www.syncfusion.com/vue-ui-components/vue-file-upload) feature tour page for its groundbreaking features. You can also explore our [Vue File Upload example](https://ej2.syncfusion.com/vue/demos/#/material/uploader/default.html) to understand how to browse the files which you want to upload to the server.