---
layout: post
title: File Source in Vue Uploader | Syncfusion
description: Pick files for the Syncfusion Vue Uploader by selecting, dragging, dropping, pasting from the clipboard, or uploading a whole directory.
control: File source 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# File Source in Vue Uploader

## Paste to upload

The Uploader component allows you to upload the files using the select or drop files option from the file explorer.  It also supports pasting to upload the image files. You can upload any image currently copied in the clipboard.

> When you paste the image, it will be saved on the server with the filename `image.png`. The file name can
be renamed on the server end. You can generate a random name for the file using the [getUniqueID](https://ej2.syncfusion.com/vue/documentation/api/uploader/index-default#getuniqueid) method.
Refer to the following example.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/uploader/asynchronous-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/uploader/asynchronous-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/uploader/asynchronous-cs5" %}

### Save action for paste to upload

```c#
public void Save()
{
    var httpPostedFile = System.Web.HttpContext.Current.Request.Files["UploadFiles"];
    var fileSave = System.Web.HttpContext.Current.Server.MapPath("UploadedFiles");
    var fileSavePath = Path.Combine(fileSave, httpPostedFile.FileName);
    if (!System.IO.File.Exists(fileSavePath))
    {
        httpPostedFile.SaveAs(fileSavePath);
        var newName = System.Web.HttpContext.Current.Request.Form["fileName"];
        var filePath = Path.Combine(fileSavePath.Substring(0, fileSavePath.LastIndexOf("//")), newName);
        // Rename the file
        System.IO.File.Move(fileSavePath, newName);
        HttpResponse Response = System.Web.HttpContext.Current.Response;
        Response.Clear();
        Response.ContentType = "application/json; charset=utf-8";
        Response.StatusDescription = fileSavePath;
        Response.End();
    }
}
```

## Directory upload

The Uploader component allows you to upload all files in the folders to the server by using the [directoryUpload](https://ej2.syncfusion.com/vue/documentation/api/uploader/index-default#directoryupload) property. When this property is enabled, the Uploader component processes the files by iterating through the files and sub-directories in a directory. It allows you to select only folders instead of files to upload.

> The directory upload is available only in browsers that support **HTML5 directory**. The Uploader will process directory upload by dragging and dropping in the Edge browser. Refer to the following example to upload files to the server.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/uploader/asynchronous-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/uploader/asynchronous-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/uploader/asynchronous-cs6" %}

### Save action for directory upload

```c#
public void Save() {
    var httpPostedFile = HttpContext.Current.Request.Files["UploadFiles"];
    var fileSave = HttpContext.Current.Server.MapPath("UploadedFiles");
    // split the folders by using file name
    string[] folders = httpPostedFile.FileName.Split('/');
    string fileSavePath = "";
    if (folders.Length > 1)
    {
        for (var i = 0; i < folders.Length - 1; i++)
        {
            var newFolder = Path.Combine(fileSave, folders[i]);
            // create folder
            Directory.CreateDirectory(newFolder);
            fileSave = newFolder;
        }
        fileSavePath = Path.Combine(fileSave, folders[folders.Length - 1]);
    }
    else
    {
        fileSavePath = Path.Combine(fileSave, httpPostedFile.FileName);
    }
    if (!System.IO.File.Exists(fileSavePath))
    {
        // save file in the corresponding server location
        httpPostedFile.SaveAs(fileSavePath);
        HttpResponse Response = System.Web.HttpContext.Current.Response;
        Response.Clear();
        Response.ContentType = "application/json; charset=utf-8";
        // Sending the file path to client side
        Response.StatusDescription = fileSavePath;
        Response.End();
    }
}
```

## Drag and drop

The Uploader component allows you to drag and drop the files to upload. You can drag the files from the file explorer and drop them into the drop area. By default, the Uploader component acts as the drop area element. The drop area gets highlighted when you drag the files over it.

### Custom drop area

The Uploader component allows you to set an external target element as the drop area using the [dropArea](https://ej2.syncfusion.com/vue/documentation/api/uploader/index-default#droparea) property. The element can be represented as an HTML element or the element's id.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/uploader/draganddrop-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/uploader/draganddrop-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/uploader/draganddrop-cs1" %}

### Customize drop area

You can customize the appearance of the drop area by overriding the default drop area styles. In the following example, the drop area's styles such as `#dropArea` and `#dropArea .e-upload` are customized for this purpose.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/uploader/custom-drop-area-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/uploader/custom-drop-area-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/uploader/custom-drop-area-cs1" %}

>You can also explore [Vue File Upload](https://www.syncfusion.com/vue-ui-components/vue-file-upload) feature tour page for its groundbreaking features. You can also explore our [Vue File Upload example](https://ej2.syncfusion.com/vue/demos/#/material/uploader/default.html) to understand how to browse the files which you want to upload to the server.

## See Also

* [Achieve file upload programmatically](./how-to/achieve-file-upload-programmatically)
* [Validate image/* on drop](./how-to/validate-image-on-drop)