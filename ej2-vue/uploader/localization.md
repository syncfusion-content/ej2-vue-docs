---
layout: post
title: Localization in Vue Uploader | Syncfusion
description: Localize every static string of the Syncfusion Vue Uploader such as Browse, Clear, Upload, and status text using the L10n load method.
control: Localization 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Localization in Vue Uploader

The Localization library allows you to localize the static text content of the Uploader. The static text contains the default text content of action buttons, file status, clear icon title, tooltips, and text content of the drag area. Define the [locale](https://ej2.syncfusion.com/vue/documentation/api/uploader/index-default#locale) object for a culture and assign it to the L10n load method.

The following is the list of keys and their values used in the Uploader.

| Key | Description |
|------------------------|---------|
| Browse | To customize the browse button text.|
| Clear | To customize the clear button text.|
| Upload | To customize the upload button text. |
| dropFilesHint | To customize the drop area text. |
| uploadFailedMessage | To customize the status text when the file fails to upload.|
| uploadSuccessMessage | To customize the status text when the file is uploaded successfully.|
| removedSuccessMessage | To customize the status text when the file is removed successfully from the server.|
| removedFailedMessage | To customize the status text while the file fails to be removed.|
| inProgress | To customize the status text while the upload is in progress.|
| pauseUpload | To customize the status text while the uploading is paused.|
| fileUploadCancel | To customize the status text when uploading is cancelled.|
| readyToUploadMessage | To customize the status text when the file is selected and ready to upload.|
| invalidMaxFileSize | To customize the status text when the file size is greater than the maximum file size.|
| invalidFileType | To customize the status text when the file type is invalid.|
| invalidMinFileSize | To customize the status text when the file size is less than the minimum file size. |
| remove | To customize the tooltip text for the remove icon. |
| cancel | To customize the tooltip text for the cancel icon. |
| delete | To customize the tooltip text for the delete icon. |
| totalFiles | To customize the tooltip text for total files. |
| size | To customize the tooltip text for size. |

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/uploader/localization-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/uploader/localization-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/uploader/localization-cs1" %}

>You can also explore [Vue File Upload](https://www.syncfusion.com/vue-ui-components/vue-file-upload) feature tour page for its groundbreaking features. You can also explore our [Vue File Upload example](https://ej2.syncfusion.com/vue/demos/#/material/uploader/default.html) to understand how to browse the files which you want to upload to the server.