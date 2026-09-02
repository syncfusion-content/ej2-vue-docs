---
layout: post
title: Chip Customization in Vue MultiSelect Dropdown | Syncfusion
description: Customize the selected chip element in the Syncfusion Vue MultiSelect Dropdown via the tagging event and the setClass method for custom CSS.
control: Chip customization 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Chip Customization in Vue MultiSelect Dropdown

The MultiSelect allows the user to customize the selected chip element through the [tagging](https://ej2.syncfusion.com/vue/documentation/api/multi-select#tagging) event. In that event, you can set custom classes on the chip element via the `setClass` method of the event argument.

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
