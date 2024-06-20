---
layout: post
title: Columns in Vue MultiColumn Combobox component | Syncfusion
description: Checkout and learn about columns with Vue MultiColumn Combobox component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: MultiColumn ComboBox
documentation: ug
domainurl: ##DomainURL##
---

# Columns in Vue MultiColumn ComboBox component

The [columns](../api/multicolumn-combobox#columns) property allow you to define the data fields to be displayed in the MultiColumn ComboBox.

You can customize the column by using [ColumnModel](../api/multicolumn-combobox/columnModel/), which provides options such as `field`, `header`, `width`, `format`, `template` and more.

* [field](../api/multicolumn-combobox/columnModel/#field) - Specifies the fields to be displayed in each column, mapped from the data source to the multicolumn combobox.

* [header](../api/multicolumn-combobox/columnModel/#header) - Specifies the data to be displayed in the column header.

* [width](../api/multicolumn-combobox/columnModel/#width) - Specifies the column width.

In the following example, the column is customized with `field`, `header` and `width` properties.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/columns/column-field/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/columns/column-field/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/columns/column-field" %}

## Setting text align

You can use the [textAlign](../api/multicolumn-combobox/columnModel/#textalign) property to define the text alignment of the column.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/columns/column-textalign/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/columns/column-textalign/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/columns/column-textalign" %}

## Setting template

You can use the [template](../api/multicolumn-combobox/columnModel/#template) property to customize the each cell of the column. It accepts either a template string or an HTML element.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/columns/column-template/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/columns/column-template/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/columns/column-template" %}

## Setting display as checkBox

You can use [displayAsCheckBox](../api/multicolumn-combobox/columnModel/#displayascheckbox) property to display the column value as checkbox instead of a boolean value. By default, the value is `false`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/columns/column-checkbox/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/columns/column-checkbox/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/columns/column-checkbox" %}

## Setting custom attributes

You can use the [customAttributes](../api/multicolumn-combobox/columnModel/#customattributes) property to customize the CSS styles and attributes of each column's content cells.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/columns/custom-attributes/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/columns/custom-attributes/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/columns/custom-attributes" %}
