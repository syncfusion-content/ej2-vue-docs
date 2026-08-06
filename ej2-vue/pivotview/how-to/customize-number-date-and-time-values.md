---
layout: post
title: How to customize number date and time values in Vue Pivot Table | Syncfusion
description: Step-by-step example showing how to customize number, date, and time values in the Vue Pivot Table with the formatSettings property and NumberFormat or DateFormat options.
control: Customize number date and time values 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to customize number date and time values in Vue Pivot Table

You can format the number, date, and time values for each field using the [`formatSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/dataSourceSettings#formatsettings) option under [`dataSourceSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/dataSourceSettings). This configuration is applied during component initialization to ensure consistent data presentation across the pivot table.

## Number formatting

For numeric fields, the formatting settings include the following properties:

* [`name`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/formatSettingsModel#name): Specifies the field name to which the formatting should be applied.
* [`format`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/formatSettingsModel#format): Defines the number format pattern for the respective field (e.g., 'N2' for two decimal places, 'C' for currency).

> Also, you can customize the applied number format by setting the [`NumberFormatOptions`](https://ej2.syncfusion.com/vue/documentation/common/internationalization#manipulating-numbers) options in [`formatSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/dataSourceSettings#formatsettings) itself.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs135/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs135/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs135" %}

## Date and Time formatting

For date and time fields, the formatting settings include these properties:

* [`name`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/formatSettingsModel#name): Specifies the field name to which the formatting should be applied.
* [`format`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/formatSettingsModel#format): Defines the date/time format pattern for the respective field (e.g., 'dd/MM/yyyy', 'MMM yyyy').
* [`type`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/formatSettingsModel#type): Specifies the format type to be used for the respective field (Date, Time, or DateTime).

> Also, you can customize the applied date format by setting [`DateFormatOptions`](https://ej2.syncfusion.com/vue/documentation/common/internationalization#manipulating-datetime) options in [`formatSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/dataSourceSettings#formatsettings) itself.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs136/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs136/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs136" %}

## Limitations of date formatting

According to Firefox and Edge browser standards, most date and time formats used in data sources are not supported. For example: Apr-2000, Apr-01-2000, 01-03-2000, 2000-Apr-01 and similar formats are not recognized. However, [`ISO formats`](http://www.ecma-international.org/ecma-262/5.1#sec-15.9.1.15) are supported across all browsers for consistent date handling.