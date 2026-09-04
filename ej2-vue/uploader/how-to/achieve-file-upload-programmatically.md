---
layout: post
title: Achieve file upload programmatically in Vue Uploader | Syncfusion
description: Trigger a Syncfusion Vue Uploader file upload programmatically by combining the upload and getFilesData public methods on the component.
control: Achieve file upload programmatically 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to achieve file upload programmatically in Vue Uploader

You can upload a file programmatically using the [upload](https://ej2.syncfusion.com/vue/documentation/api/uploader/index-default#upload) method. The selected files' data can be retrieved from the [getFilesData](https://ej2.syncfusion.com/vue/documentation/api/uploader/index-default#getfilesdata) public method of the Uploader.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/uploader/invisible-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/uploader/invisible-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/uploader/invisible-cs1" %}

>You can also explore [Vue File Upload](https://www.syncfusion.com/vue-ui-components/vue-file-upload) feature tour page for its groundbreaking features. You can also explore our [Vue File Upload example](https://ej2.syncfusion.com/vue/demos/#/material/uploader/default.html) to understand how to browse the files which you want to upload to the server.