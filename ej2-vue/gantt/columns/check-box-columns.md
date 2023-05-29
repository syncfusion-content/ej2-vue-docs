---
layout: post
title: Check box columns in Vue Gantt component | Syncfusion
description: Learn here all about Check box columns in Syncfusion Vue Gantt component of Syncfusion Essential JS 2 and more.
control: Check box columns 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Check box columns in Vue Gantt component

To render boolean values as checkbox in columns, you need to set [`displayAsCheckBox`](https://ej2.syncfusion.com/vue/documentation/api/gantt/column/#displayascheckbox) property as **true**.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/columns-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/columns-cs1" %}

## Controlling Grid Actions

You can enable or disable gantt action for a particular column by setting the [`allowFiltering`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#allowfiltering), [`allowSorting`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#allowsorting), [`allowReordering`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#allowreordering),and [`allowEditing`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#editsettings) properties.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/columns-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/columns-cs2" %}

## Column type

Column type can be specified using the `columns.type` property. It specifies the type of data the column binds.

If the `format` is defined for a column, the column uses `type` to select the appropriate format option [number](https://ej2.syncfusion.com/vue/documentation/common/internationalization/#number-formatting) or [date](https://ej2.syncfusion.com/vue/documentation/common/internationalization/#manipulating-datetime).

Gantt column supports the following types:
* string
* number
* boolean
* date
* datetime

> If the `type` is not defined, it will be determined from the first record of the [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#datasource).
> In case if the first record of the [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#datasource) is null/blank value for a column then it is necessary to define the `type` for that column.