---
layout: post
title: Check MIME type before upload in Vue Uploader | Syncfusion
description: Read the file MIME type in the Syncfusion Vue Uploader before upload using the uploading event and show it in an alert dialog.
control: Check the mime type of file before upload it 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to check MIME type before upload in Vue Uploader

By using [uploading](https://ej2.syncfusion.com/vue/documentation/api/uploader/#uploading) event, you can get the file MIME type before uploading it to server. In the below sample, file MIME type is shown in the alert box before file start to upload.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/uploader/invisible-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/uploader/invisible-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/uploader/invisible-cs4" %}

>You can also explore [Vue File Upload](https://www.syncfusion.com/vue-ui-components/vue-file-upload) feature tour page for its groundbreaking features. You can also explore our [Vue File Upload example](https://ej2.syncfusion.com/vue/demos/#/material/uploader/default.html) to understand how to browse the files which you want to upload to the server.