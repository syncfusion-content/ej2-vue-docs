---
layout: post
title: Async in Vue Uploader component | Syncfusion
description: Learn here all about Async in Syncfusion Vue Uploader component of Syncfusion Essential JS 2 and more.
control: Async 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Async in Vue Uploader component

The uploader component allows you to upload the files asynchronously. The upload process requires save and remove action URL to manage the upload process in the server.

    *   The save action is necessary to handle the upload operation
    *   The remove action is optional, can handle the removed files from server

The File can be uploaded automatically or manually. For more information, you can refer to the [Auto Upload](https://ej2.syncfusion.com/vue/documentation/api/uploader/#autoupload) section from the documentation.

## Multiple file upload

By Default, the uploader component allows you to select and upload multiple files simultaneously. The selected files are organized in a list for every file selection until you clear it by clicking clear button that is shown in footer.

You can enable the multiple file selection by using `multiple` API.

The following example explains about [multiple](https://ej2.syncfusion.com/vue/documentation/api/uploader/#multiple) file upload settings.

In the following example, explains about multiple file upload settings.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/uploader/asynchronous-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/uploader/asynchronous-cs1" %}

## Single file upload

You can select and upload a single file by disabling the multiple file selection property. The file list item is removed for every selection and it always maintain a single file to upload.

The following example explains about single file upload settings.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/uploader/asynchronous-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/uploader/asynchronous-cs2" %}

## Save Action

The save action handler upload the files that needs to be specified in the [saveUrl](https://ej2.syncfusion.com/vue/documentation/api/uploader/asyncSettingsModel/#saveurl) property.
The save handler receives the submitted files and manages the save process in server. After uploading the files to server location, the color of the selected file name changes to green and the remove icon is changed as bin icon.

    *   When the file is uploaded successfully, the event “success” triggers to handle the operation after upload.
    *   When the file is failed to upload, the event “failure” triggers with information, which cause this failure.

You can cancel the upload process by setting the upload event argument **eventargs.cancel** to true.

```
<template>
  <div>
    <ejs-uploader ref="uploadObj" id='defaultfileupload' name="UploadFiles" :asyncSettings= "path" ></ejs-uploader>
  </div>
</template>
<script>
import Vue from 'vue';
import { UploaderPlugin } from '@syncfusion/ej2-vue-inputs';
Vue.use(UploaderPlugin);

export default {
    data: function() {
        return {
            path:  {
                saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save'
            }
        }
    }
}
</script>
```

### Server-side configuration for save action

This section explains how to handle the server-side action for saving the file from server.

```c#
[AcceptVerbs("Post")]
public void Save()
{
    try
    {
        if (HttpContext.Current.Request.Files.AllKeys.Length > 0)
        {
            var httpPostedFile = HttpContext.Current.Request.Files["UploadFiles"];

            if (httpPostedFile != null)
            {
                var fileSave = HttpContext.Current.Server.MapPath("UploadedFiles");
                var fileSavePath = Path.Combine(fileSave, httpPostedFile.FileName);
                if (!File.Exists(fileSavePath))
                {
                    httpPostedFile.SaveAs(fileSavePath);
                    HttpResponse Response = HttpContext.Current.Response;
                    Response.Clear();
                    Response.ContentType = "application/json; charset=utf-8";
                    Response.StatusDescription = "File uploaded succesfully";
                    Response.End();
                }
                else
                {
                    HttpResponse Response = HttpContext.Current.Response;
                    Response.Clear();
                    Response.Status = "400 File already exists";
                    Response.StatusCode = 400;
                    Response.StatusDescription = "File already exists";
                    Response.End();
                }
            }
        }
    }
    catch (Exception e)
    {
        HttpResponse Response = System.Web.HttpContext.Current.Response;
        Response.Clear();
        Response.ContentType = "application/json; charset=utf-8";
        Response.StatusCode = 400;
        Response.Status = "400 No Content";
        Response.StatusDescription = e.Message;
        Response.End();
    }
}

```

### Server-side configure save action to returned response

The following example demonstrates how the server-side action for saving the file in server to returned response in JSON, String and File type data's.

```c#
[AcceptVerbs("Post")]
public IActionResult Save()
{
    // for JSON Data
    try
     {
        // Process uploaded data
        var responseData = new
        {
            Success = true,
            Message = "Files uploaded successfully",
            // Additional data can be added here
        };

        return Json(responseData);
     }
     catch (Exception e)
     {
         var errorResponse = new
         {
            Success = false,
            Message = "File upload failed: " + e.Message
         };

         return Json(errorResponse);
     }

    // for String Data
    try
    {
        // Process string data
        var data = "success";
        // Return the string data
        return Content(data);
    }
    catch (Exception)
    {
        var data = "failed";
        return Content(data);
    }

    // for File Data
    try
    {
        // Example: Retrieve file path for stream.txt
        var filePath = "stream.txt"; // Example file path
        
        // Get full file path
        var fullPath = Path.GetFullPath(filePath);

        // Return the file
        return PhysicalFile(fullPath, "text/plain");
    }
    catch (Exception e)
    {
        // Handle file retrieval failure
        return Content("Failed to retrieve file response: " + e.Message, "text/plain");
    }
}

```

## Remove Action

The remove action is optional. Specify the URL to handle remove process from server. The remove handler receives the posted files and handle the remove operation in server.

    *   When the files are removed successfully from server, the success event triggers to denote the process has completed.
    *   When remove action fails, the event “failure” triggers with information, which cause failure in remove process.

> You can differentiate the file operation whether the success event triggers from save or remove action in its arguments **eventArgs.operation**.

You can remove the files which is not uploaded locally by clicking the remove icon. In this case, the success or failure events will not be triggered.

```
<template>
  <div>
    <ejs-uploader ref="uploadObj" id='defaultfileupload' name="UploadFiles" :asyncSettings= "path" ></ejs-uploader>
  </div>
</template>
<script>
import Vue from 'vue';
import { UploaderPlugin } from '@syncfusion/ej2-vue-inputs';
Vue.use(UploaderPlugin);

export default {
    data: function() {
        return {
            path:  {
                saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
                removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove'
            }
        }
    }
}
</script>
```

### Server-side configuration for remove action

This section explains how to handle the server-side action for removing the file from server.

```c#
[AcceptVerbs("Post")]
public void Remove()
{
    try
    {
        var fileSave = "";
        if (HttpContext.Current.Request.Form["cancel-uploading"] != null)
        {
            fileSave = HttpContext.Current.Server.MapPath("UploadingFiles");
        }
        else
        {
            fileSave = HttpContext.Current.Server.MapPath("UploadedFiles");
        }
        var fileName = HttpContext.Current.Request.Files["UploadFiles"].FileName;
        var fileSavePath = Path.Combine(fileSave, fileName);
        if (File.Exists(fileSavePath))
        {
            File.Delete(fileSavePath);
        }
    }
    catch (Exception e)
    {
        HttpResponse Response = HttpContext.Current.Response;
        Response.Clear();
        Response.Status = "404 File not found";
        Response.StatusCode = 404;
        Response.StatusDescription = "File not found";
        Response.End();
    }
}

```

## Auto Upload

By default, the uploader processes the files to upload once the files are selected and added in upload queue. To upload manually, disable the [autoUpload](https://ej2.syncfusion.com/vue/documentation/api/uploader/#autoupload) &nbsp;property. When you disable this property, you can use the action buttons to call upload all or clear all actions manually. You can change those buttons text using the [buttons](https://ej2.syncfusion.com/vue/documentation/api/uploader/#buttons) &nbsp;property in the Uploader component.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/uploader/asynchronous-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/uploader/asynchronous-cs3" %}

## Sequential Upload

By default, the uploader component process multiple files to upload simultaneously. When you enable the [sequentialUpload](https://ej2.syncfusion.com/vue/documentation/api/uploader/#sequentialupload) property, the selected files will process sequentially (one after the other) to the server. If the file uploaded successfully or failed, the next file will upload automatically in this sequential upload. This feature helps to reduce the upload traffic and reduce the failure of file upload.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/uploader/sequential-upload-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/uploader/sequential-upload-cs1" %}

## Preloaded Files

The uploader component allows you to preloaded the list of files that are uploaded in the server. The preloaded files are useful to view and remove the files from server that can be achieved by the [files](https://ej2.syncfusion.com/vue/documentation/api/uploader/#files) property. By default, the files are configured with uploaded successfully state on rendering file list. By default, the files are configured with uploaded successfully state on rendering file list. The following properties are mandatory to configure the preloaded files:

    *   Name
    *   Size
    *   Type

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/uploader/asynchronous-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/uploader/asynchronous-cs4" %}

## Adding additional HTTP headers with upload action

The Uploader component allows you to add the additional headers with `save` and `remove` action requests using the `uploading` and `removing` events, which helps to send validation token on file upload. Access the current request and set the request header within these events.

The following code block shows how to add the additional headers with save and remove action request.

```
<template>
  <div>
  <ejs-uploader id='preloadFiles' ref="uploadObj" name="UploadFiles" :asyncSettings= "path"
  :uploading= "addHeaders" :removing= "addHeaders" ></ejs-uploader>
  </div>
</template>
<script>  
import Vue from 'vue';
import { UploaderPlugin } from '@syncfusion/ej2-vue-inputs';
Vue.use(UploaderPlugin);

export default {
    data: function() {
        return {
            path:  {
                saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
                removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove'
            }
        }
    },
    methods: {
         addHeaders: function (args) {
            args.currentRequest.setRequestHeader('custom-header', 'Syncfusion');
        }
    }
}
</script>
<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
</style>

```

>You can also explore [Vue File Upload](https://www.syncfusion.com/vue-ui-components/vue-file-upload) feature tour page for its groundbreaking features. You can also explore our [Vue File Upload example](https://ej2.syncfusion.com/vue/demos/#/material/uploader/default.html) to understand how to browse the files which you want to upload to the server.

## See Also

* [How to add additional data on upload](./how-to/add-additional-data-on-upload)
* [How to add confirm dialog to remove the files](./how-to/add-confirm-dialog-to-remove-the-files)
* [Check the MIME type of file before uploading it](./how-to/check-the-mime-type-of-file-before-upload-it)
* [How to open and edit the uploaded files](./how-to/open-and-edit-the-uploaded-files)
