---
layout: post
title: How to validate image on drop in Vue Uploader | Syncfusion
description: Validate Syncfusion Vue Uploader image types on drag and drop by filtering the file extension in the selected event.
control: Validate image on drop 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to validate image on drop in Vue Uploader

The Uploader component allows you to upload all types of images by setting `image/*` to the [allowedExtensions](https://ej2.syncfusion.com/vue/documentation/api/uploader/index-default#allowedextensions) property, or you can directly set it to the accept attribute of the Uploader element.

By default, this behavior works when selecting a file using the browse button. However, it is not supported on drag and drop of files. You can handle this behavior manually using the [selected](https://ej2.syncfusion.com/vue/documentation/api/uploader/index-default#selected) event by filtering the file types in the application.

In the following example, image files are validated using `image/*`. You are able to drag and drop the image files with the extensions png, jpg, bmp, gif, and tiff to upload them.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/uploader/invisible-cs11/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/uploader/invisible-cs11/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/uploader/invisible-cs11" %}

>You can also explore [Vue File Upload](https://www.syncfusion.com/vue-ui-components/vue-file-upload) feature tour page for its groundbreaking features. You can also explore our [Vue File Upload example](https://ej2.syncfusion.com/vue/demos/#/material/uploader/default.html) to understand how to browse the files which you want to upload to the server.