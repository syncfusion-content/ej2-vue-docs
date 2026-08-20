---
layout: post
title: Custom Value in Vue MultiSelect Dropdown | Syncfusion
description: Allow users to add a new custom value to the Syncfusion Vue MultiSelect Dropdown by enabling allowCustomValue, which fires customValueSelection.
control: Custom value 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Custom Value in Vue MultiSelect Dropdown

The MultiSelect allows user to add a new non-present option to the component value when [`allowCustomValue`](https://ej2.syncfusion.com/vue/documentation/api/multi-select/#allowcustomvalue) is enabled. while selecting the new custom value [`customValueSelection`](https://ej2.syncfusion.com/vue/documentation/api/multi-select/#customvalueselection) event will be triggered.

The following sample demonstrates configuration of custom value support with the MultiSelect component.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multi-select/custom-value-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multi-select/custom-value-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multi-select/custom-value-cs1" %}
