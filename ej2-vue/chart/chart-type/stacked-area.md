---
layout: post
title: 100% Stacked Area in Vue Chart component | Syncfusion
description: Learn here all about 100% Stacked Area in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: 100% Stacked Area Chart
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# 100% Stacked Area in Vue Chart Component

## 100% Stacked Area

To render a 100% stacked area series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#type) as `StackingArea100` and inject `StackingAreaSeries`  into the `provide`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/area-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/area-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/area-cs5" %}

## Series customization

The following properties can be used to customize the `100% stacked area` series.

* [fill](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#fill) – Specifies the color of the series.
* [opacity](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#opacity) – Specifies the opacity of [fill](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#fill).
* [dashArray](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#dasharray) – Specifies the dashes for series.
* [width](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#width) – Specifies the width for series.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/stackedarea-cs/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/stackedarea-cs/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/stackedarea-cs" %}

## See Also

* [Data label](../data-labels/)
* [Tooltip](../tool-tip/)