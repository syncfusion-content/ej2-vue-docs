---
layout: post
title: Cross hair in Vue Stock chart component | Syncfusion
description: Learn here all about Cross hair in Syncfusion Vue Stock chart component of Syncfusion Essential JS 2 and more.
control: Cross hair 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Cross hair in Vue Stock chart component

Crosshair has a vertical and horizontal line to view the value of the axis at mouse or touch position.

Crosshair lines can be enabled by using [`enable`](https://ej2.syncfusion.com/vue/documentation/api/chart/crosshairSettingsModel/#enable-boolean)property in the `crosshair`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/stockchart/cross-hair-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/stockchart/cross-hair-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/stockchart/cross-hair-cs1" %}

## Tooltip for axis

Tooltip label for an axis can be enabled by using [`enable`](https://ej2.syncfusion.com/vue/documentation/api/chart/crosshairSettingsModel/#enable-boolean) property of `crosshairTooltip` in the corresponding axis.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/stockchart/cross-hair-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/stockchart/cross-hair-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/stockchart/cross-hair-cs2" %}

## Customization

The [`fill`](https://ej2.syncfusion.com/vue/documentation/api/chart/crosshairSettingsModel/#fill-string) and [`textStyle`](https://ej2.syncfusion.com/vue/documentation/api/chart/crosshairSettingsModel/#textstyle-fontmodel) property of the `crosshairTooltip` is used to customize the background color and font style of the crosshair label respectively. Color and width of the crosshair line can be customized by using the [`line`](https://ej2.syncfusion.com/vue/documentation/api/chart/crosshairSettingsModel/#line-bordermodel) property in the crosshair.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/stockchart/cross-hair-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/stockchart/cross-hair-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/stockchart/cross-hair-cs3" %}

>Note: To use crosshair feature, we need to inject `Crosshair` into the `provide`.