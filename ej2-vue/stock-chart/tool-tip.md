---
layout: post
title: Tool tip in Vue Stock chart component | Syncfusion
description: Learn here all about Tool tip in Syncfusion Vue Stock chart component of Syncfusion Essential JS 2 and more.
control: Tool tip 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Tool tip in Vue Stock chart component

<!-- markdownlint-disable MD036 -->

StockChart will display details about the points through tooltip, when the mouse is moved over the point.

## Default tooltip

By default, tooltip is not visible. Enable the tooltip by setting [`enable`](https://ej2.syncfusion.com/vue/documentation/api/stock-chart/tooltipSettings/#enable) property to true and by injecting [`Tooltip`](https://ej2.syncfusion.com/vue/documentation/api/stock-chart/tooltipSettings/)
into the `provide`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/stockchart/tool-tip-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/stockchart/tool-tip-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/stockchart/tool-tip-cs1" %}

## Format the tooltip

<!-- markdownlint-disable MD013 -->

By default, tooltip shows information of x and y value in points. In addition to that, you can show more
information in tooltip. For example the format '${series.name} ${point.x}' shows series name and point x
value.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/stockchart/tool-tip-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/stockchart/tool-tip-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/stockchart/tool-tip-cs2" %}

## Position the tooltip

By default, the tooltip is positioned at the left side of the stock chart. You can move the tooltip along with the mouse by setting **Nearest** to the [`position`](https://ej2.syncfusion.com/vue/documentation/api/stock-chart/stockTooltipSettings/#position) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/stockchart/tool-tip-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/stockchart/tool-tip-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/stockchart/tool-tip-cs4" %}

## Customize the appearance of the tooltip

The [`fill`](https://ej2.syncfusion.com/vue/documentation/api/stock-chart/tooltipSettingsModel/#fill-string) and [`border`](https://ej2.syncfusion.com/vue/documentation/api/stock-chart/tooltipSettingsModel/#border-bordermodel) properties are used to customize the background color and border of the tooltip respectively. The [`textStyle`](https://ej2.syncfusion.com/vue/documentation/api/stock-chart/tooltipSettingsModel/#textstyle-fontmodel) property in the tooltip is used to customize the font of the tooltip text.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/stockchart/tool-tip-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/stockchart/tool-tip-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/stockchart/tool-tip-cs3" %}