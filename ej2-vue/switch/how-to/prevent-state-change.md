---
layout: post
title: Prevent State Change in Vue Switch component | Syncfusion
description: Learn here all about Prevent State Change in Syncfusion Vue Switch component of Syncfusion Essential JS 2 and more.
control: Prevent State Change 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Prevent State Change in Vue Switch component

The [beforeChange](https://ej2.syncfusion.com/vue/documentation/api/switch/#beforechange) event is triggered before the switch's state is altered. This event provides an opportunity to intercept and potentially cancel the change action before it is applied. It allows for implementing conditional logic or validating the change prior to it being rendered on the UI.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/switch/before-change-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/switch/before-change-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/switch/before-change-cs1" %}