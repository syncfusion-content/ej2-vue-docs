---
layout: post
title: Checkbox in Vue MultiSelect Dropdown | Syncfusion
description: Enable checkboxes in the Syncfusion Vue MultiSelect Dropdown via mode CheckBox and inject the CheckBoxSelection module for multi-selection.
control: Checkbox 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Checkbox in Vue MultiSelect Dropdown

The MultiSelect has built-in support to select multiple values through checkboxes, when the [mode](https://ej2.syncfusion.com/vue/documentation/api/multi-select#mode) property is set to `CheckBox`.

To use checkbox, inject the `CheckBoxSelection` module in the MultiSelect.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multi-select/checkbox/default-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multi-select/checkbox/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multi-select/checkbox/default-cs1" %}

## Select All

The MultiSelect component has in-built support to select all list items using the `Select All` option in the header.

When the [showSelectAll](https://ej2.syncfusion.com/vue/documentation/api/multi-select#showselectall) property is set to `true`, the `Select All` text is shown by default. You can customize the display text of the Select All option by using [selectAllText](https://ej2.syncfusion.com/vue/documentation/api/multi-select#selectalltext).

For the Unselect All option, the `Unselect All` text is shown by default. You can customize the display text of the Unselect All option by using [unSelectAllText](https://ej2.syncfusion.com/vue/documentation/api/multi-select#unselectalltext).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multi-select/checkbox/selectall-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multi-select/checkbox/selectall-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multi-select/checkbox/selectall-cs1" %}

## Selection Limit

Defines the limit of the selected items using [maximumSelectionLength](https://ej2.syncfusion.com/vue/documentation/api/multi-select#maximumselectionlength).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multi-select/checkbox/selectionlimit-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multi-select/checkbox/selectionlimit-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multi-select/checkbox/selectionlimit-cs1" %}

## Selection Reordering

Use [enableSelectionOrder](https://ej2.syncfusion.com/vue/documentation/api/multi-select#enableselectionorder) to reorder the selected items while the popup is visible.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multi-select/checkbox/selectionreorder-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multi-select/checkbox/selectionreorder-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/multi-select/checkbox/selectionreorder-cs1" %}

## See Also

* [How to bind the data](./data-binding)
* [How to filter the bound data](./filtering)
* [How to add custom value to the MultiSelect](./custom-value)
* [How to render grouping with checkbox](./grouping#grouping-with-checkbox).