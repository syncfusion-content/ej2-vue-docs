---
layout: post
title: Data Binding in Vue MultiColumn ComboBox | Syncfusion
description: Bind the Syncfusion Vue MultiColumn ComboBox to local object arrays, OData, OData V4, or Web API via the dataSource property.
platform: ej2-vue
control: MultiColumn ComboBox
documentation: ug
domainurl: ##DomainURL##
---

# Data Binding in Vue MultiColumn ComboBox

The MultiColumn ComboBox loads the data either from local data sources or remote data services using the [dataSource](../api/multicolumn-combobox#datasource) property. It supports the data type of `object arrays` or `DataManager`.

The MultiColumn ComboBox also supports different kinds of data services such as OData, OData V4, and Web API, and data formats such as XML, JSON, and JSONP with the help of `DataManager` adaptors.

| Fields | Type | Description |
|------|------|-------------|
| text |  `string` | Specifies the display text of each list item. |
| value |  `number or string` | Specifies the hidden data value mapped to each list item that should contain a unique value. |
| groupBy |  `string` | Specifies the category under which the list item has to be grouped. |

> The fields should be mapped correctly. Otherwise, the selected item remains undefined.

## Binding local data

The local binding in the MultiColumn ComboBox allows you to connect the component to various data sources, enabling dynamic and flexible data display.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/items/text/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/items/text/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/items/text" %}

## Binding remote data

The MultiColumn ComboBox supports retrieval of data from remote data services with the help of `DataManager` component.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/data-binding/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/data-binding/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/data-binding" %}
