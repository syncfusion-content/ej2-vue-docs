---
layout: post
title: Number formatting in Vue Pivot Table component | Syncfusion
description: Learn here all about Number formatting in Syncfusion Vue Pivot Table component of Syncfusion Essential JS 2 and more.
control: Number formatting 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Number formatting in Vue Pivot Table component

The Pivot Table component provides comprehensive number formatting capabilities, allowing you to display numeric values in various formats. This enhances data readability and ensures values are displayed accurately to meet your specific needs.

## Supported format types

The Pivot Table component supports the following display formats for numeric values:

* **Number** - Standard numeric formatting with optional grouping separators and configurable decimal places.
* **Currency** - Formats currency values with appropriate symbols, optional grouping separators, and customizable decimal places.
* **Percentage** - Values displayed as percentages with the % symbol.
* **Custom** - User-defined formatting patterns for specific display requirements.

## Defining number format settings

To configure number formats for numeric values, use the [`formatSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iFormatSettings) property in the [`dataSourceSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/dataSourceSettings). Use the following main properties within the [`formatSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iFormatSettings) option to define how values are formatted:

### Essential formatting properties

* [`name`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iFormatSettings#name): Specifies the field name to which the formatting should be applied.
* [`format`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iFormatSettings#format): Defines the format pattern for the respective field.

### Format type codes

Use these standard format codes to specify the formatting type:

1. **N** - Numeric formatting (e.g., 1,234.56)
2. **C** - Currency formatting (e.g., $1,234.56)
3. **P** - Percentage formatting (e.g., 12.34%)

> **Note:** When no format is specified, the component applies numeric formatting as the default.

### Additional formatting options

* [`useGrouping`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iFormatSettings#usegrouping): Controls the display of grouping separators. When set to **true** (default), displays values like $100,000,000; when **false**, displays as $100000000.
* [`currency`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iFormatSettings#currency): Specifies the currency code to be considered for currency formatting (e.g., USD, EUR, GBP).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs155/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs155/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs155" %}

You can also format the values at runtime using the formatting dialog. This option can be enabled by setting the [`allowNumberFormatting`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/index-default#allownumberformatting) property to **true**. The same has been discussed in some of the upcoming topics.

> **Important:** To use the runtime formatting dialog, include the `NumberFormatting` module in the pivot table.

## Custom format

Custom format lets you display numbers in your preferred pattern by setting the [`format`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iFormatSettings#format) property within the [`formatSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iFormatSettings). You can use one or more format specifiers (shown in the table below) to control how values appear in the Pivot Table.

| Specifier | Description | Input | Format Output |
| ------- |--------------- | ---------------- | --------------- |
| 0 | Replaces the zero with the corresponding digit if it is present. Otherwise, zero will appear in the result string. | { format: '0000' } | '0123' |
| # | Replaces the ' # ' symbol with the corresponding digit if it is present. Otherwise, no digits will appear in the result string.| { format: '####' } | '1234' |
| . | Denotes the number of digits permitted after the decimal point. | { format: '###0.##0#' } | '546321.000' |
| % | Percent specifier denotes the percentage type format. | { format: '0000 %' } | '0100 %' |
| $ | Denotes the currency type format that is based on the global currency code specified. | { format: '$ ###.00' } | '$ 13.00' |
| ; | Denotes separate formats for positive, negative and zero values. | { format: '###.##;(###.00);-0' } | '(120.00)'    |
| 'String' (single Quotes) | Denotes the characters that are enclosed in the single quote (') to be replaced in the resulting string. | { format: "####.00 '@'" } | "123.00 @"    |

>NOTE: When you define a custom format, certain properties such as [`useGrouping`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iFormatSettings#usegrouping) and [`currency`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iFormatSettings#currency) in the format settings will be ignored.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs156/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs156/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs156" %}

## Toolbar

Number formatting can be applied instantly at runtime through the built-in dialog, accessible from the toolbar. To enable this, set both the [`allowNumberFormatting`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/index-default#allownumberformatting) and [`showToolbar`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/index-default#showtoolbar) properties to **true**, and include the **NumberFormatting** option in the [`toolbar`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/index-default#toolbar) property. The toolbar will then automatically display the "Number Formatting" icon. Clicking this icon opens the dialog, allowing you to specify number formats for value fields directly within the Pivot Table.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs157/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs157/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs157" %}

## Invoking formatting dialog through external button

The number formatting dialog can be opened programmatically by clicking an external button, using the `ShowNumberFormattingDialog` method of the PivotTable component.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs158/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs158/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs158" %}

## Events

### NumberFormatting

The [`numberFormatting`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/index-default#numberformatting) event is triggered when the user clicks the 'Apply' button in the number formatting dialog to confirm their formatting settings. This event facilitates the validation or modification of the formatting settings applied by the user. It includes the following parameters:

| Parameter | Type | Description |
|-----------|------|-------------|
| [`formatName`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/numberFormattingEventArgs#formatname) | `string` | Represents the name of the value field to which number formatting is applied in the dialog. |
| [`formatSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iFormatSettings) | `IFormatSettings` | Contains the user-defined formatting options, such as decimal places (`minimumFractionDigits`, `maximumFractionDigits`), currency symbols (`currency`), or grouping separators (`useGrouping`), applied to the field. |
| [`cancel`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/numberFormattingEventArgs#cancel) | `boolean` | It is a boolean property, and when set to **true**, the customization made in the number formatting dialog will not be applied. |

The following sample demonstrates how to prevent number formatting changes for the 'Amount' field by setting the [`cancel`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/numberFormattingEventArgs#cancel) property to **true** in the [`numberFormatting`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/index-default#numberformatting) event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs159/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs159/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs159" %}

## See Also

* [Customize number, date, and time values](./how-to/customize-number-date-and-time-values)
* [NumberFormatOptions](https://ej2.syncfusion.com/vue/documentation/common/globalization/internationalization#number-formatting)
* [Toolbar](./tool-bar)