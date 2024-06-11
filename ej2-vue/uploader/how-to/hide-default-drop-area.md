---
layout: post
title: Hide default drop area in Vue Uploader component | Syncfusion
description: Learn here all about Hide default drop area in Syncfusion Vue Uploader component of Syncfusion Essential JS 2 and more.
control: Hide default drop area 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Hide default drop area in Vue Uploader component

You can achieve this behavior by override the corresponding uploader styles. In the following example, override the below styles to hide the default drop area behavior.

    * .e-upload.e-control
    * .e-upload .e-file-select
    * .e-upload .e-file-drop

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/uploader/hide-drop-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/uploader/hide-drop-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/uploader/hide-drop-cs1" %}

>You can also explore [Vue File Upload](https://www.syncfusion.com/vue-ui-components/vue-file-upload) feature tour page for its groundbreaking features. You can also explore our [Vue File Upload example](https://ej2.syncfusion.com/vue/demos/#/material/uploader/default.html) to understand how to browse the files which you want to upload to the server.