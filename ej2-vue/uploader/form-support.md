---
layout: post
title: Form support in Vue Uploader component | Syncfusion
description: Learn here all about Form support in Syncfusion Vue Uploader component of Syncfusion Essential JS 2 and more.
control: Form support 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Form support in Vue Uploader component

The uploader component works with HTML form like default file input.
The following configuration is must to make the uploader work inside the form.

    *   `saveUrl` and `removeUrl` must be null.
    *   `autoUpload` must be disabled.
    *   `name` attribute must be added in input element.

The selected or dropped files are received as a collection in form action when the form is submitted. The form action handles the server-side operations that manage the file upload process. When you reset the form, the file list and data will be cleared.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/uploader/formsupport-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/uploader/formsupport-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/uploader/formsupport-cs1" %}

>You can also explore [Vue File Upload](https://www.syncfusion.com/vue-ui-components/vue-file-upload) feature tour page for its groundbreaking features. You can also explore our [Vue File Upload example](https://ej2.syncfusion.com/vue/demos/#/material/uploader/default.html) to understand how to browse the files which you want to upload to the server.