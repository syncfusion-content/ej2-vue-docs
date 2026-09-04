---
layout: post
title: Determine if uploader has file input in Vue Uploader | Syncfusion
description: Validate the Syncfusion Vue Uploader has a file selected by adding the required attribute to the input and a data-required-message hint.
control: Determine whether uploader has file input 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to determine if uploader has file input in Vue Uploader

By setting the **required** attribute on the Uploader input element, you can validate whether the file input has any value in it. In the following sample, the required attribute is set on the Uploader input element, and the validation failure message is displayed using the `data-required-message` attribute.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/uploader/invisible-cs7/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/uploader/invisible-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/uploader/invisible-cs7" %}

>You can also explore [Vue File Upload](https://www.syncfusion.com/vue-ui-components/vue-file-upload) feature tour page for its groundbreaking features. You can also explore our [Vue File Upload example](https://ej2.syncfusion.com/vue/demos/#/material/uploader/default.html) to understand how to browse the files which you want to upload to the server.