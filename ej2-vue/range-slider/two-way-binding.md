---
layout: post
title: Two way binding in Vue Range slider component | Syncfusion
description: Learn here all about Two way binding in Syncfusion Vue Range slider component of Syncfusion Essential JS 2 and more.
control: Two way binding 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Two way binding in Vue Range slider component

It can be achieved by using the `v-model` directive in vue. In the following sample, when you change a value in one slider will automatically change the value in the other slider. It updates the other slider using `value` property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/range-slider/two-way-binding-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/range-slider/two-way-binding-cs1" %}