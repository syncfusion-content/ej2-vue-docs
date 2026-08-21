---
layout: post
title: Two-Way Binding in Vue Toggle Switch Button | Syncfusion
description: Learn how to enable two-way binding in the Syncfusion Vue Toggle Switch Button using the v-model directive so one switch's value updates another switch automatically.
control: Two way binding 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Two-Way Binding in Vue Toggle Switch Button

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