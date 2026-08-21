---
layout: post
title: How to get total size of selected files in Vue Uploader | Syncfusion
description: Calculate the total size of all selected files in the Syncfusion Vue Uploader using the selected event before any upload begins.
control: Get the total size of selected files 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to get total size of selected files in Vue Uploader

You can get the total size of selected files before upload it to designated server. By using [selected](https://ej2.syncfusion.com/vue/documentation/api/uploader/#selected) event you can achieve this behavior.

In the following example, explains about how to calculate total file size before upload.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/uploader/invisible-cs8/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/uploader/invisible-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/uploader/invisible-cs8" %}

>You can also explore [Vue File Upload](https://www.syncfusion.com/vue-ui-components/vue-file-upload) feature tour page for its groundbreaking features. You can also explore our [Vue File Upload example](https://ej2.syncfusion.com/vue/demos/#/material/uploader/default.html) to understand how to browse the files which you want to upload to the server.