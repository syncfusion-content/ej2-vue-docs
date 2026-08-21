---
layout: post
title: How to update dynamic content in Vue Badge | Syncfusion
description: Update Vue Badge content dynamically using Vue data binding so the badge value refreshes in real time as underlying data changes.
control: Dynamic Badge content 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to update dynamic content in Vue Badge

Badges in real-time needs to be updated dynamically based on the requirements. In this sample, using Vue data binding, the badges content will be updated dynamically. Click the increment button to change the Badge value.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/badge/dynamic-badge-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/badge/dynamic-badge-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/badge/dynamic-badge-cs1" %}