---
layout: post
title: Check file size before uploading it in Vue Uploader component | Syncfusion
description: Learn here all about Check file size before uploading it in Syncfusion Vue Uploader component of Syncfusion Essential JS 2 and more.
control: Check file size before uploading it 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Check file size before uploading it in Vue Uploader component

By using [uploading](https://ej2.syncfusion.com/vue/documentation/api/uploader/#uploading) event, you can get the file size before upload it to server. File object contains the file size in bytes only. You can convert the size to standard formats (`KB` or `MB`) using [bytesToSize](https://ej2.syncfusion.com/vue/documentation/api/uploader/#bytestosize) method.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/uploader/invisible-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/uploader/invisible-cs3" %}

>You can also explore [Vue File Upload](https://www.syncfusion.com/vue-ui-components/vue-file-upload) feature tour page for its groundbreaking features. You can also explore our [Vue File Upload example](https://ej2.syncfusion.com/vue/demos/#/material/uploader/default.html) to understand how to browse the files which you want to upload to the server.
