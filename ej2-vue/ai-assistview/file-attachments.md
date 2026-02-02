---
layout: post
title: File Attachment in Vue AI AssistView component | Syncfusion
description: Checkout and learn about file attachment with Vue AI AssistView component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: AI AssistView
documentation: ug
domainurl: ##DomainURL##
---

# Attachments in Vue AI AssistView control


The AI AssistView component supports file attachments, allowing users to include files along with their prompts to provide additional context and enhance interactions. Users can upload documents, images, and other file types to supplement their queries. Enable this functionality using the `enableAttachments` property and customize the behavior through the `attachmentSettings` configuration.

## Enable attachment

Enable file attachment support by setting the [enableAttachments](https://ej2.syncfusion.com/vue/documentation/api/ai-assistview#enableattachments) property to `true`. By default, it is disabled.

{% tabs %}
{% highlight ts tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/file-attachments/enable-attachment/app-composition.vue%}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/file-attachments/enable-attachment/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/file-attachments/enable-attachment" %}

## Configuring attachments

Use the [attachmentSettings](../api/ai-assistview/attachmentSettings) property to customize file attachment behavior, including upload endpoints, file type restrictions, and size limits.

### Setting saveUrl and removeUrl

Set the [saveUrl](https://ej2.syncfusion.com/vue/documentation/api/ai-assistview/attachmentSettings#saveurl) and [removeUrl](https://ej2.syncfusion.com/vue/documentation/api/ai-assistview/attachmentSettings#removeurl) properties to specify server endpoints for handling file uploads and removals. The `saveUrl` processes file uploads, while the `removeUrl` handles file deletion requests.

{% tabs %}
{% highlight ts tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/file-attachments/save-remove-url/app-composition.vue%}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/file-attachments/save-remove-url/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/file-attachments/save-remove-url" %}

### Setting file type

Use the [allowedFileTypes](https://ej2.syncfusion.com/vue/documentation/api/ai-assistview/attachmentSettings#allowedfiletypes) property to specify which file types users can upload. This property accepts file extensions (e.g., '.pdf', '.docx') or MIME types to control the types of files that can be attached.

{% tabs %}
{% highlight ts tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/file-attachments/file-type/app-composition.vue%}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/file-attachments/file-type/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/file-attachments/file-type" %}

### Setting file size

Configure the [maxFileSize](https://ej2.syncfusion.com/vue/documentation/api/ai-assistview/attachmentSettings#maxfilesize) property to define the maximum file size allowed for uploads. Specify the size in bytes. The default value is `2000000` bytes (2 MB). Files exceeding this limit will not be uploaded.

{% tabs %}
{% highlight ts tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/file-attachments/file-size/app-composition.vue%}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/file-attachments/file-size/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/file-attachments/file-size" %}

### Setting maximum count

Restrict how many files can be attached at once using [maximumCount](../api/ai-assistview/attachmentSettings#maximumcount) property. The default value is `10`. If users select more than the allowed count, the maximum count reached error will be displayed.

{% tabs %}
{% highlight ts tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/file-attachments/maximum-count/app-composition.vue%}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/file-attachments/maximum-count/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/file-attachments/maximum-count" %}
