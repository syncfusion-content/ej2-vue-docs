---
layout: post
title: How to achieve invisible upload in Vue Uploader | Syncfusion
description: Hide the Syncfusion Vue Uploader UI and process files invisibly by handling the selected event to upload without showing the drop area.
control: Achieve invisible upload 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to achieve invisible upload in Vue Uploader

You can achieve the invisible upload feature by using the [selected](https://ej2.syncfusion.com/vue/documentation/api/uploader/index-default#selected) event in the Uploader component. The following example explains how to achieve the invisible upload in the Uploader component.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/uploader/invisible-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/uploader/invisible-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/uploader/invisible-cs2" %}

>You can also explore [Vue File Upload](https://www.syncfusion.com/vue-ui-components/vue-file-upload) feature tour page for its groundbreaking features. You can also explore our [Vue File Upload example](https://ej2.syncfusion.com/vue/demos/#/material/uploader/default.html) to understand how to browse the files which you want to upload to the server.