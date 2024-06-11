---
layout: post
title: Chip customization in Vue Multi select component | Syncfusion
description: Learn here all about Chip customization in Syncfusion Vue Multi select component of Syncfusion Essential JS 2 and more.
control: Chip customization 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Chip customization in Vue Multi select component

The MultiSelect allows the user to customize the selected chip element through the [`tagging`](https://ej2.syncfusion.com/vue/documentation/api/multi-select/#tagging) event. In that event, you can set the custom classes to chip element via that event argument of `setClass` method.

The following sample demonstrates chip-customization with the MultiSelect component.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multi-select/chip-customization-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multi-select/chip-customization-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multi-select/chip-customization-cs1" %}
