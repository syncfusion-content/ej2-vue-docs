---
layout: post
title: Conditional formatting in Vue Pivot Table component | Syncfusion
description: Learn here all about Conditional formatting in Syncfusion Vue Pivot Table component of Syncfusion Essential JS 2 and more.
control: Conditional formatting 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Conditional formatting in Vue Pivot Table component

The conditional formatting feature enables users to customize the appearance of Pivot Table value cells by modifying background color, font color, font family, and font size based on specific conditions. This powerful visualization feature helps highlight important value cells and makes them stand out in the Pivot Table.

The conditional formatting can be applied at runtime through the built-in dialog, invoked from the toolbar. To enable this functionality, set the [allowConditionalFormatting](https://ej2.syncfusion.com/vue/documentation/api/pivotview/index-default#allowconditionalformatting) and [showToolbar](https://ej2.syncfusion.com/vue/documentation/api/pivotview/index-default#showtoolbar) properties to **true**. Additionally, include the **ConditionalFormatting** item within the [toolbar](https://ej2.syncfusion.com/vue/documentation/api/pivotview/index-default#toolbar) property. Users will see the "Conditional Formatting" icon in the toolbar UI automatically, which opens the formatting dialog when clicked.

> To use the conditional formatting feature, you need to inject the `ConditionalFormatting` module in Pivot Table.

To learn how to work with conditional formatting options, you can check out this video on Vue Pivot Table.

{% youtube "https://www.youtube.com/watch?v=6XeuaF6Ev4s&t=227s" %}

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/pivot_data-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/pivot_data-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/pivot_data-cs1" %}

## Configure conditional formatting through code-behind

Conditional formatting can also be applied programmatically during component initialization using the [conditionalFormatSettings](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iConditionalFormatSettings#iconditionalformatsettings) property in the [dataSourceSettings](https://ej2.syncfusion.com/vue/documentation/api/pivotview/dataSourceSettings). This approach allows you to define formatting rules directly in the code-behind, ensuring that specific styling conditions are automatically applied when the Pivot Table loads. The required properties to apply a new conditional formatting are,

* [applyGrandTotals](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iConditionalFormatSettings#applygrandtotals): This boolean property allows you to restrict conditional formatting for grand totals in the row and column axes. By default, this property is set to **true**.
* [measure](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iConditionalFormatSettings#measure): Specifies the value field name for which style will be applied.
* [conditions](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iConditionalFormatSettings#conditions): Defines the operator type used for conditional formatting, such as equals, greater than, less than, etc.
* [value1](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iConditionalFormatSettings#value1): Specifies the starting value for the conditional formatting.
* [value2](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iConditionalFormatSettings#value2): Specifies the ending value for the conditional formatting range. This property is applicable only for conditions like **Between** and **NotBetween**.
* [style](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iConditionalFormatSettings#style): Specifies the custom styling applied to the cell.

The [style](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iConditionalFormatSettings#style) object includes the following properties, which you can use to customize the appearance of value cells:

* [backgroundColor](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iStyle#backgroundcolor): It allows to set the background color to the value cell in the Pivot Table.
* [color](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iStyle#color): It allows to set the font color to the value cell in the Pivot Table.
* [fontFamily](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iStyle#fontfamily): It allows to set the font family to the value cell in the Pivot Table.
* [fontSize](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iStyle#fontsize): It allows to set the font size to the value cell in the Pivot Table.

## Opening conditional formatting dialog programmatically

Users can also access the conditional formatting dialog through external UI elements by calling the [showConditionalFormattingDialog](https://ej2.syncfusion.com/vue/documentation/api/pivotview/index-default#showconditionalformattingdialog) method. In the following example, an external button is used to open the conditional formatting dialog programmatically.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/pivot_data-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/pivot_data-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/pivot_data-cs2" %}

## Conditional formatting for all fields

The Pivot Table component allows you to apply conditional formatting to all value fields simultaneously. This approach ensures consistent highlighting and styling of value cells across the entire Pivot Table, removing the need to configure formatting for each value field individually.

To format all value fields together, use the [conditionalFormatSettings](https://ej2.syncfusion.com/vue/documentation/api/pivotview/dataSourceSettings#conditionalformatsettings) property without specifying the [measure](https://ej2.syncfusion.com/vue/documentation/api/pivotview/conditionalFormatSettings#measure) property. When the [measure](https://ej2.syncfusion.com/vue/documentation/api/pivotview/conditionalFormatSettings#measure) property is omitted, the formatting rules are automatically applied to every value field in your Pivot Table, resulting in a uniform appearance for all value cells.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/pivot_data-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/pivot_data-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/pivot_data-cs3" %}

## Conditional formatting for specific value field

To apply conditional formatting exclusively to a particular value field, set the [Measure](https://help.syncfusion.com/cr/blazor/Syncfusion.EJ2.Blazor~Syncfusion.EJ2.Blazor.PivotView.PivotViewConditionalFormatSetting~Measure.html) property with the specific value field name in [PivotViewConditionalFormatSetting](https://help.syncfusion.com/cr/blazor/Syncfusion.EJ2.Blazor~Syncfusion.EJ2.Blazor.PivotView.PivotViewConditionalFormatSetting_properties.html).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/pivot_data-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/pivot_data-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/pivot_data-cs4" %}

## Editing and removing existing conditional format

Editing and removing existing conditional format can be done through the UI at runtime. To do so, open the conditional formatting dialog and edit the "Value", "Condition" and "Format" options based on user requirement and click "OK". To remove a conditional format, click the "Delete" icon besides the respective condition.

![output](images/cformatting_remove.png)

## Event

### ConditionalFormatting

The [conditionalFormatting](https://ej2.syncfusion.com/vue/documentation/api/pivotview/index-default#conditionalformatting) event is triggered when the “ADD CONDITION” button is clicked in the conditional formatting dialog, enabling users to define custom conditions instead of default conditions at runtime. To utilize this event, the [allowConditionalFormatting](https://ej2.syncfusion.com/vue/documentation/api/pivotview/index-default#allowconditionalformatting) property of the Pivot Table component must be set to **true**. This event provides the following parameters:

* `applyGrandTotals` - Allows to apply conditional formatting to the grand totals of row and column axis in the Pivot Table.
* `conditions` - Allows you to choose the operator type such as equals, greater than, less than, etc. for conditional formatting.
* `label` - Allows to set the header text of a specific row/column field to apply conditional formatting.
* `measure` - Allows to set the value field name to apply conditional formatting.
* `style` - Allows to set the custom styles for the formatting applied values in the Pivot Table.
* `value1` - Allows to set the start value for applying conditional formatting.
* `value2` - Allows to set the end value for applying conditional formatting. This property is applicable only for conditions like **Between** and **NotBetween**.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/pivot_data-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/pivot_data-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/pivot_data-cs5" %}

## See Also

* [Apply conditional formatting for specific row or column](./how-to/apply-conditional-formatting-for-specific-row-or-column)