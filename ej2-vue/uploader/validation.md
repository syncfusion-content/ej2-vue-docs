---
layout: post
title: Validation in Vue Uploader | Syncfusion
description: Filter Syncfusion Vue Uploader files by allowed extensions, min, and max file size before they reach the server using API or HTML attributes.
control: Validation 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Validation in Vue Uploader

The Uploader component validates the selected files extension and size using the [allowedExtensions](https://ej2.syncfusion.com/vue/documentation/api/uploader/index-default#allowedextensions),
[minFileSize](https://ej2.syncfusion.com/vue/documentation/api/uploader/index-default#minfilesize) and [maxFileSize](https://ej2.syncfusion.com/vue/documentation/api/uploader/index-default#maxfilesize) properties. The files can be validated before uploading to the server and can be ignored on uploading. Also, you can validate the files by setting the HTML attributes on the original input element. The validation process also occurs on drag-and-drop of the files.

## File type

You can allow only the specific types of files to upload using the [allowedExtensions](https://ej2.syncfusion.com/vue/documentation/api/uploader/index-default#allowedextensions) property. The extensions can be represented as a collection separated by commas. The Uploader component filters the selected or dropped files matched against the specified file types and processes the upload operation. The validation happens when you specify a value to the inline `accept` attribute on the original input element.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/uploader/file-type-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/uploader/file-type-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/uploader/file-type-cs1" %}

## File size

The Uploader component allows you to validate the files based on their size. The validation helps to restrict uploading large files or empty files to the server. The size can be represented in `bytes`. By default, the Uploader component allows you to upload a **minimum file size** of 0 bytes and a **maximum file size** of 28.4 MB using the `minFileSize` and `maxFileSize` properties.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/uploader/file-size-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/uploader/file-size-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/uploader/file-size-cs1" %}

## Maximum files count

You can restrict the maximum number of files to upload using the **selected** event. In the selected event arguments, you can get the currently selected files details using `getFilesData()`. You can modify the files details and assign the modified file list to the `eventArgs.modifiedFilesData`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/uploader/file-count-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/uploader/file-count-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/uploader/file-count-cs1" %}

## Duplicate files

You can validate the duplicate files before uploading to the server using the selected event. Compare the selected files with the existing files data and filter the file list by removing the duplicate files.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/uploader/validation-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/uploader/validation-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/uploader/validation-cs1" %}

>You can also explore [Vue File Upload](https://www.syncfusion.com/vue-components/vue-file-upload) feature tour page for its groundbreaking features. You can also explore our [Vue File Upload example](https://ej2.syncfusion.com/vue/demos/#/material/uploader/default.html) to understand how to browse the files which you want to upload to the server.

## See Also

* [Validate image/* on drop](./how-to/validate-image-on-drop)
* [Determine whether uploader has file input (required validation)](./how-to/determine-whether-uploader-has-file-input)
* [Check file size before uploading it](./how-to/check-file-size-before-uploading-it)
* [Check the MIME type of file before uploading it](./how-to/check-the-mime-type-of-file-before-upload-it)