---
layout: post
title: Tooltip in Vue Chart component | Syncfusion
description: Learn here all about Tooltip in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Tooltip 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Tooltip in Vue Chart component

<!-- markdownlint-disable MD036 -->

Chart will display details about the points through tooltip, when the mouse is moved over the point.

## Default tooltip

By default, tooltip is not visible. You can enable the tooltip by setting [`enable`](https://ej2.syncfusion.com/vue/documentation/api/chart/tooltipSettingsModel/#enable) property to **true** and by injecting `Tooltip` into the `provide`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/user-interaction/tooltip-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/user-interaction/tooltip-cs1" %}

<!-- markdownlint-disable MD013 -->

## Fixed tooltip

By default, tooltip track the mouse movement, but you can set a fixed position for the tooltip by using the [`location`](https://ej2.syncfusion.com/vue/documentation/api/chart/tooltipSettingsModel/#location) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/user-interaction/tooltip-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/user-interaction/tooltip-cs7" %}

## Format the tooltip

<!-- markdownlint-disable MD013 -->

By default, tooltip shows information of x and y value in points. In addition to that, you can show more
information in tooltip. For example the format `${series.name} ${point.x}` shows series name and point x
value.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/user-interaction/tooltip-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/user-interaction/tooltip-cs2" %}

<!-- markdownlint-disable MD013 -->

## Individual series format

<!-- markdownlint-disable MD013 -->

 You can format the each series tooltip separately using series [`tooltipFormat`](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#tooltipformat) property.

 >Note: If series [`tooltipFormat`](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#tooltipformat) is given, it shows the tooltip for that series in that format, or else it will take tooltip format.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/user-interaction/tooltip-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/user-interaction/tooltip-cs3" %}

<!-- markdownlint-disable MD013 -->

## Tooltip template

Any HTML elements can be displayed in the tooltip by using the [`template`](https://ej2.syncfusion.com/vue/documentation/api/chart/tooltipSettingsModel/#template) property of the tooltip. You can use the ${x} and ${y} as place holders in the HTML element to display the x and y values of the corresponding data point.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/user-interaction/tooltip-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/user-interaction/tooltip-cs4" %}

## Customize the appearance of tooltip

The [`fill`](https://ej2.syncfusion.com/vue/documentation/api/chart/tooltipSettingsModel/#fill) and [`border`](https://ej2.syncfusion.com/vue/documentation/api/chart/tooltipSettingsModel/#border) properties are used to customize the background color and border of the tooltip respectively. The [`textStyle`](https://ej2.syncfusion.com/vue/documentation/api/chart/tooltipSettingsModel/#textstyle) property in the tooltip is used to customize the font of the tooltip text. The [`highlightColor`](https://ej2.syncfusion.com/vue/documentation/api/chart/#highlightcolor) property is used to customize the point color while hovering for tooltip.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/user-interaction/tooltip-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/user-interaction/tooltip-cs5" %}

## Tooltip mapping name

By default, tooltip shows information of x and y value in points. You can show more information from data source in tooltip by using the [`tooltipMappingName`](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#tooltipmappingname) property of the tooltip. You can use the `${point.tooltip}` as place holders to display the specified tooltip content.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/user-interaction/tooltip-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/user-interaction/tooltip-cs6" %}