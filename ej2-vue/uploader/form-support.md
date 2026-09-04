---
layout: post
title: Form Support in Vue Uploader | Syncfusion
description: Submit selected files with the Syncfusion Vue Uploader inside an HTML form by disabling auto upload and posting files to the form action.
control: Form support 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Form Support in Vue Uploader

The Uploader component works with HTML forms like a default file input.
The following configuration is required to make the Uploader work inside a form:

    *   `saveUrl` and `removeUrl` must be null.
    *   `autoUpload` must be disabled.
    *   The `name` attribute must be added to the input element.

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