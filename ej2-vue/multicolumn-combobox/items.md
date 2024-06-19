---
layout: post
title: Items in Vue Combobox component | Syncfusion
description: Checkout and learn about items in Vue Combobox component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: MultiColumn ComboBox
documentation: ug
domainurl: ##DomainURL##
---

# Items in Vue ComboBox component

## Setting text

You can use [text](../api/multicolumn-combobox#text) property to set the display text of the selected item.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/items/text/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/items/text/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/items/text" %}

## Setting value

You can use [value](../api/multicolumn-combobox#value) property to set the value of the selected item.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/items/value/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/items/value/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/items/value" %}

## Setting index

You can use [index](../api/multicolumn-combobox#index) property to set the index of the selected item.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/items/index/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/items/index/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/items/index" %}

## Adding query

The [query](../api/multicolumn-combobox#query) property is used to accept the external query, which will execute along with the data processing.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/items/query/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/items/query/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/items/query" %}

## Adding placeholder

You can use the [placeholder](../api/multicolumn-combobox#placeholder) property to set a short hint that describes the expected value in the multicolumn combobox component.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/items/placeholder/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/items/placeholder/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/items/placeholder" %}

## Setting the floatlabel type

You can use the [floatLabelType](../api/multicolumn-combobox#floatlabeltype) property to display a floating label above the input element. This will work when a placeholder is used.

You can change the `floatLabelType` type to `Never`, `Always`, `Auto`.

* Never: The label will never float in the input when the placeholder is available.
* Always: The floating label will always float above the input.
* Auto: The floating label will float above the input after focusing or entering a value in the input.

The following example shows the `floatLabelType` with `Auto`

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/items/floatLabelType/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/items/floatLabelType/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/items/floatLabelType" %}

## Adding html attributes

You can use the [htmlAttributes](../api/multicolumn-combobox#htmlattributes) property to add HTML attributes to the multicolumn combobox.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/items/htmlAttributes/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/items/htmlAttributes/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/items/htmlAttributes" %}

## Setting width

You can use the [width](../api/multicolumn-combobox#width) property to set the width of the component. By default, the width is determined by the width of its parent container.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/items/width/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/items/width/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/items/width" %}

## Setting popup width

You can use the [popupWidth](../api/multicolumn-combobox#popupwidth) property to set the width of the popup list. By default, the popup width is determined by the width of the component.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/items/popupWidth/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/items/popupWidth/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/items/popupWidth" %}

## Setting popup height

You can use the [popupHeight](../api/multicolumn-combobox#popupheight) property to set the height of the popup list. By default, the value is `300px`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/items/popupHeight/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/items/popupHeight/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/items/popupHeight" %}

## Adding clear button

The [showClearButton](../api/multicolumn-combobox#showclearbutton) property is used to specify whether to show or hide the clear button. By default, its value is `false`. When the clear button is clicked, the value, text and index properties are reset to null.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/items/clearButton/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/items/clearButton/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/items/clearButton" %}

## CssClass

You can use the [cssClass](../api/multicolumn-combobox#cssclass) property to customize the multicolumn combobox component.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/items/cssClass/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/items/cssClass/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/items/cssClass" %}

## Disabled

The [disabled](../api/multicolumn-combobox#disabled) property is used to disable the multicolumn combobox. By default, its value is `false`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/items/disabled/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/items/disabled/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/items/disabled" %}

## Setting read only

You can use [readonly](../api/multicolumn-combobox#readonly) property to disable the user interactions in the multicolumn combobox component.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/items/readonly/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/items/readonly/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/items/readonly" %}

## Configure grid settings

You can use the [gridSettings](../api/multicolumn-combobox#gridsettings) property to configure the columns in the popup content. You can customize the gridSettings by using [gridSettingsModel](../api/multicolumn-combobox/gridSettingsModel/), which provides options such as `gridLines`, `rowHeight` and `enableAltRow`.

### Setting grid lines

You can use [gridLines](../api/multicolumn-combobox/gridSettingsModel/#gridlines) property to set the mode of the gridlines. You can set `Horizontal`, `Vertical`, `Default`, `None` and `Both`.

* Both: Displays both horizontal and vertical grid lines.
* None: No grid lines are displayed.
* Horizontal: Displays the horizontal grid lines only.
* Vertical: Displays the vertical grid lines only.
* Default: Displays grid lines based on the theme.

In the following examples, gridLines is set with `Horizontal`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/items/gridLines/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/items/gridLines/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/items/gridLines" %}

### Setting row height

You can use [rowHeight](../api/multicolumn-combobox/gridSettingsModel/#rowheight) property to set the height of the rows in the popup content.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/items/rowHeight/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/items/rowHeight/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/items/rowHeight" %}

### Setting alternate rows

You can use the [enableAltRow](../api/multicolumn-combobox/gridSettingsModel/#enablealtrow) property to enable the alternate row styles in the multicolumn combobox. If enabled, it will add the `e-altrow` CSS class to the list of items in the popup.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/items/enableAltRow/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/multicolumn-combobox/items/enableAltRow/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/items/enableAltRow" %}
