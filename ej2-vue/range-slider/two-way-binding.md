---
layout: post
title: Two Way Binding in Vue Range Slider | Syncfusion
description: Sync values between two Syncfusion Vue Range Slider components with the v-model directive for live two-way data binding.
control: Two way binding 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Two Way Binding in Vue Range Slider

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