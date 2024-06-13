---
layout: post
title: Tool tip in Vue Bullet chart component | Syncfusion
description: Learn here all about Tool tip in Syncfusion Vue Bullet chart component of Syncfusion Essential JS 2 and more.
control: Tool tip 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Tool tip in Vue Bullet chart component

When the mouse is hovered over a bar in the Bullet Chart, the tooltip displays important summary about the actual and the target bar values.

## Default Tooltip

The tooltip is not visible by default. To make it visible, set the [`enable`](https://ej2.syncfusion.com/vue/documentation/api/bullet-chart/bulletTooltipSettingsModel/#enable) property in the [`tooltip`](https://ej2.syncfusion.com/vue/documentation/api/bullet-chart/#tooltip) to **true** and injecting `BulletTooltip` module using `BulletChart.Inject(BulletTooltip)` and injecting `BulletTooltip` module using `BulletChart.Inject(BulletTooltip)`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/bullet-chart/bullet-chart-dimensions/container-cs23/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/bullet-chart/bullet-chart-dimensions/container-cs23/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/bullet-chart/bullet-chart-dimensions/container-cs23" %}

## Tooltip Template

Any HTML elements can be displayed in the tooltip by using the [`template`](https://ej2.syncfusion.com/vue/documentation/api/bullet-chart/bulletTooltipSettingsModel/#template) property of the [`tooltip`](https://ej2.syncfusion.com/vue/documentation/api/bullet-chart/#tooltip). You can use the **${target}** and **${value}** as place holders in the HTML element to display the value and target values from the data source of corresponding data point.

## Customize the Appearance of Tooltip

## Tooltip Customization

The following properties can be used to customize the Bullet Chart tooltip.

* [`fill`](https://ej2.syncfusion.com/vue/documentation/api/bullet-chart/bulletTooltipSettingsModel/#fill) - Specifies the color of tooltip.
* [`border`](https://ej2.syncfusion.com/vue/documentation/api/bullet-chart/bulletTooltipSettingsModel/#border) - Specifies the tooltip border color and width.
* [`textStyle`](https://ej2.syncfusion.com/vue/documentation/api/bullet-chart/bulletTooltipSettingsModel/#textstyle) - Specifies the tooltip font family, font style, font weight, color and size.