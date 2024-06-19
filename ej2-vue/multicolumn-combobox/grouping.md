---
layout: post
title: Grouping in Vue MultiColumn Combobox component | Syncfusion
description: Checkout and learn about Grouping in Vue MultiColumn Combobox component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: MultiColumn ComboBox
documentation: ug
domainurl: ##DomainURL##
---

# Grouping in Vue MultiColumn ComboBox component

The MultiColumn ComboBox supports wrapping nested elements into a group based on different categories by using the [groupBy](../api/multicolumn-combobox/fieldSettings/#groupby) property. The category of each list item can be mapped through the groupBy  field in the data table. The group header are displayed as fixed headers. The fixed group header content is updated dynamically on scrolling the popup list with its category value.

In the following sample, countries are grouped according on its category using `groupBy` field.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/grouping/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/grouping/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/grouping" %}
