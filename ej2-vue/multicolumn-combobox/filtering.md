---
layout: post
title: Filtering in Vue MultiColumn Combobox component | Syncfusion
description: Checkout and learn about Filtering with Vue MultiColumn Combobox component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: MultiColumn ComboBox
documentation: ug
domainurl: ##DomainURL##
---

# Filtering in Vue MultiColumn ComboBox component

The MultiColumn ComboBox has built-in support to filter the data items, which allows users to filter the list of items based on their input. The filter operation starts as soon as you start typing characters in the component. The filtering can be disabled by setting the [allowFiltering](../api/multicolumn-combobox#allowfiltering) to `false`. By default the value is `true`.

## Change the filter type

You can change the filter type by using the [filterType](../api/multicolumn-combobox#filtertype) property. The `filterType` supports filtering options such as`StartsWith`, `EndsWith` and `Contains`.

In the following example, data filtering is done with `EndsWith` type.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/filtering/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/filtering/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/filtering" %}
