---
layout: post
title: How to check file size before uploading in Vue Uploader | Syncfusion
description: Check the file size in the Syncfusion Vue Uploader before upload using the uploading event and the bytesToSize format helper method.
control: Check file size before uploading it 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to check file size before uploading in Vue Uploader

By using the [uploading](https://ej2.syncfusion.com/vue/documentation/api/uploader/index-default#uploading) event, you can get the file size before uploading it to the server. The File object contains the file size in bytes only. You can convert the size to standard formats (`KB` or `MB`) using the [bytesToSize](https://ej2.syncfusion.com/vue/documentation/api/uploader/index-default#bytestosize) method.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/uploader/invisible-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/uploader/invisible-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/uploader/invisible-cs3" %}

>You can also explore [Vue File Upload](https://www.syncfusion.com/vue-ui-components/vue-file-upload) feature tour page for its groundbreaking features. You can also explore our [Vue File Upload example](https://ej2.syncfusion.com/vue/demos/#/material/uploader/default.html) to understand how to browse the files which you want to upload to the server.