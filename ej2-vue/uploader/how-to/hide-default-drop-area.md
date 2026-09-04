---
layout: post
title: How to hide default drop area in Vue Uploader | Syncfusion
description: Hide the Syncfusion Vue Uploader default drop area by overriding the e-upload, e-file-select, and e-file-drop styles in your CSS.
control: Hide default drop area 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to hide default drop area in Vue Uploader

You can achieve this behavior by overriding the corresponding Uploader styles. In the following example, the below styles are overridden to hide the default drop area behavior.

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