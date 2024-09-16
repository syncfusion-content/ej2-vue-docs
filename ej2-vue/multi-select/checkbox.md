---
layout: post
title: Checkbox in Vue MultiSelect component | Syncfusion
description: Learn here all about checkbox support in Syncfusion Essential Vue Multiselect component, it's elements and more.
control: Checkbox 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Checkbox in Vue MultiSelect Component

The MultiSelect has built-in support to select multiple values through checkbox, when [`mode`](https://ej2.syncfusion.com/vue/documentation/api/multi-select/#mode) property set as `CheckBox`.

To use checkbox, inject the `CheckBoxSelection` module in the MultiSelect.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/multi-select/checkbox/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multi-select/checkbox/default-cs1" %}

## Select All

The MultiSelect component has in-built support to select the all list items using `Select All` options in the header.

When the [`showSelectAll`](https://ej2.syncfusion.com/vue/documentation/api/multi-select/#showselectall) property is set to true, by default Select All text will show. You can customize the name attribute of the Select All option by using [`selectAllText`](https://ej2.syncfusion.com/vue/documentation/api/multi-select/#selectalltext).

For the unSelect All option, by default unSelect All text will show. You can customize the name attribute of the unSelect All option by using
[`unSelectAllText`](https://ej2.syncfusion.com/vue/documentation/api/multi-select/#unselectalltext).

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/multi-select/checkbox/selectall-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multi-select/checkbox/selectall-cs1" %}

## Selection Limit

Defines the limit of the selected items using [`maximumSelectionLength`](https://ej2.syncfusion.com/vue/documentation/api/multi-select/#maximumselectionlength).

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/multi-select/checkbox/selectionlimit-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multi-select/checkbox/selectionlimit-cs1" %}

## Selection Reordering

Using [`enableSelectionOrder`](https://ej2.syncfusion.com/vue/documentation/api/multi-select/#enableselectionorder) to Reorder the selected items in popup visibility state.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/multi-select/checkbox/selectionreorder-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multi-select/checkbox/selectionreorder-cs1" %}

## See Also

* [How to bind the data](./data-binding)
* [How to filter the bound data](./filtering)
* [How to add custom value to the MultiSelect](./custom-value)
* [How to render grouping with checkbox](./grouping#grouping-with-checkbox).