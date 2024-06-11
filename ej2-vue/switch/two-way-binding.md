---
layout: post
title: Two way binding in Vue Switch component | Syncfusion
description: Learn here all about Two way binding in Syncfusion Vue Switch component of Syncfusion Essential JS 2 and more.
control: Two way binding 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Two way binding in Vue Switch component

It can be achieved by using the `v-model` directive in vue. In the following sample, when you enable or disable a value in one Switch will automatically enable or disable the value in other Switch. It updates the other Switch using `value` property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/radio-button/default-cs11/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/radio-button/default-cs11/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/radio-button/default-cs11" %}