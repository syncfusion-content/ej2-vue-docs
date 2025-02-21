---
layout: post
title: Two-way binding in Vue Range Slider component | Syncfusion
description: Learn here all about Two way binding in Syncfusion Vue Range Slider component of Syncfusion Essential JS 2 and more.
control: Two way binding 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Two-way binding in Vue Range Slider component

It can be achieved by using the `v-model` directive in vue. In the following sample, when you change a value in one Slider will automatically change the value in the other Slider. It updates the other Slider using the [`value`](https://ej2.syncfusion.com/vue/documentation/api/slider#value) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/range-slider/two-way-binding-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/range-slider/two-way-binding-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/range-slider/two-way-binding-cs1" %}