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


The `Attachment` support in AI AssistView specifies user to include file attachments along with their prompts in the AI AssistView. This enhances the interaction by allowing users to provide additional context through files. You can enable this feature using the `enableAttachments` property, and customize its behavior using the `attachmentSettings` configuration.

## Enable attachment

You can enable the attachment by using the [enableAttachments](https://ej2.syncfusion.com/vue/documentation/api/ai-assistview#enableattachments) property. By default, it is set to `false`.

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

You can use the [attachmentSettings](https://ej2.syncfusion.com/vue/documentation/api/ai-assistview/attachmentSettings) property to configure the attachments in the AI AssistView.

### Setting saveUrl and removeUrl

You can use the [saveUrl](https://ej2.syncfusion.com/vue/documentation/api/ai-assistview/attachmentSettings#saveurl) and [removeUrl](https://ej2.syncfusion.com/vue/documentation/api/ai-assistview/attachmentSettings#removeurl) property to add the save and remove the URL for the file uploaded in the AI AssistView.

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

You can use the [allowedFileType](https://ej2.syncfusion.com/vue/documentation/api/ai-assistview/attachmentSettings#allowedfiletypes) property to upload the specific file types in the attachment.

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

You can use the [maxFileSize](https://ej2.syncfusion.com/vue/documentation/api/ai-assistview/attachmentSettings#maxfilesize) property to allow the maximum file size of the upload file in the AI AssistView. By default, it is set to `2000000` bytes.

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
