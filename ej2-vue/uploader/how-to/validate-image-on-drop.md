---
layout: post
title: Validate image on drop in Vue Uploader component | Syncfusion
description: Learn here all about Validate image on drop in Syncfusion Vue Uploader component of Syncfusion Essential JS 2 and more.
control: Validate image on drop 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Validate image on drop in Vue Uploader component

The uploader component allows you to upload all type of images by setting `image/*` to [allowedExtensions](https://ej2.syncfusion.com/vue/documentation/api/uploader/#allowedextensions) property or directly you can set it to accept attribute of uploader element.

By default, the behavior is working with select a file using browse button. But, this behavior doesn’t support on drag and drop the files. You can handle this behavior manually using [selected](https://ej2.syncfusion.com/vue/documentation/api/uploader/#selected) event by filtering the file types from application.

In the following example, validated image files using images/*. You are able to drag and drop the image files with extension of png, jpg, bpg, gif and tiff to upload it.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/uploader/invisible-cs11/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/uploader/invisible-cs11" %}

>You can also explore [Vue File Upload](https://www.syncfusion.com/vue-ui-components/vue-file-upload) feature tour page for its groundbreaking features. You can also explore our [Vue File Upload example](https://ej2.syncfusion.com/vue/demos/#/material/uploader/default.html) to understand how to browse the files which you want to upload to the server.
