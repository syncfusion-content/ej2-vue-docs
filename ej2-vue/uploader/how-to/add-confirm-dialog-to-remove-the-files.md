---
layout: post
title: How to add confirm dialog to remove files in Vue Uploader | Syncfusion
description: Confirm removal in the Syncfusion Vue Uploader with the Syncfusion Dialog and the remove method to avoid accidental file deletion.
control: Add confirm dialog to remove the files 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to add confirm dialog to remove files in Vue Uploader

You can customize the uploader component for use confirm dialog before remove the files. In the following example, used ej2 dialog as confirm dialog which is used for making confirmation on removing the files by using [remove](https://ej2.syncfusion.com/vue/documentation/api/uploader/#remove) method.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/uploader/confirm-dialog-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/uploader/confirm-dialog-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/uploader/confirm-dialog-cs1" %}

>You can also explore [Vue File Upload](https://www.syncfusion.com/vue-ui-components/vue-file-upload) feature tour page for its groundbreaking features. You can also explore our [Vue File Upload example](https://ej2.syncfusion.com/vue/demos/#/material/uploader/default.html) to understand how to browse the files which you want to upload to the server.