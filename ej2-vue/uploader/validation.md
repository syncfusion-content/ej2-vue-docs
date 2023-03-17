---
layout: post
title: Validation in Vue Uploader component | Syncfusion
description: Learn here all about Validation in Syncfusion Vue Uploader component of Syncfusion Essential JS 2 and more.
control: Validation 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Validation in Vue Uploader component

The uploader component validate the selected files extension and size using the [allowedExtensions](https://ej2.syncfusion.com/vue/documentation/api/uploader/#allowedextensions),
[minFileSize](https://ej2.syncfusion.com/vue/documentation/api/uploader/#minfilesize) and [maxFileSize](https://ej2.syncfusion.com/vue/documentation/api/uploader/#maxfilesize) properties. The files can be validated before uploading to the server and can be ignored on uploading. Also, you can validate the files by setting the HTML attributes to the original input element. The validation process occurs on drag-and-drop the files also.

## File type

You can allow the specific types of files alone to upload using the [allowedExtensions](https://ej2.syncfusion.com/vue/documentation/api/uploader/#allowedextensions) property. The extension can be represented as collection by comma separators. The uploader component filters the selected or dropped files matched against the specified file types and processes the upload operation. The validation happens when you specify value to inline attribute accept to original input element.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/uploader/file-type-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/uploader/file-type-cs1" %}

## File size

The uploader component allows you to validate the files based on its size. The validation helps to restrict uploading large files or empty files to the server. The size can be represented in `bytes`. By default, the uploader component allows you to upload **minimum file size** as 0 byte and **maximum file size** as 28.4 MB using using `minFileSize` and `maxFileSize` properties.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/uploader/file-size-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/uploader/file-size-cs1" %}

## Maximum files count

You can restrict uploading the maximum number of files using the **selected** event. In the selected event arguments, you can get the currently selected files details using the `getFilesData()`. You can modify the files details and assign the modified file list to the `eventArgs.modifiedFilesData`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/uploader/file-count-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/uploader/file-count-cs1" %}

## Duplicate files

You can validate the duplicate files before uploading to server using the selected event. Compare the selected files with the existing files data and filter the file list by removing the duplicate files.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/uploader/validation-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/uploader/validation-cs1" %}

>You can also explore [Vue File Upload](https://www.syncfusion.com/vue-ui-components/vue-file-upload) feature tour page for its groundbreaking features. You can also explore our [Vue File Upload example](https://ej2.syncfusion.com/vue/demos/#/material/uploader/default.html) to understand how to browse the files which you want to upload to the server.

## See Also

* [Validate image/* on drop](./how-to/validate-image-on-drop)
* [Determine whether uploader has file input (required validation)](./how-to/determine-whether-uploader-has-file-input)
* [Check file size before uploading it](./how-to/check-file-size-before-uploading-it)
* [Check the MIME type of file before uploading it](./how-to/check-the-mime-type-of-file-before-upload-it)
