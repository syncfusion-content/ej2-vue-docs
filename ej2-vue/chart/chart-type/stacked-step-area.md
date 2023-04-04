---
layout: post
title: Stacked Step Area in Vue Chart component | Syncfusion
description: Learn here all about 100% Stacked Area in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: 100% Stacked Area Chart
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Stacked Step Area in Vue Chart Component

## Stacked Step Area

To render a stacked step area series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#type) as `StackingStepArea` and inject `StackingStepAreaSeries`  into the `provide`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/stackedsteparea/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/stackedsteparea" %}

## Series customization

The following properties can be used to customize the `stacked step area` series.

* [fill](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#fill) – Specifies the color of the series.
* [opacity](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#opacity) – Specifies the opacity of [fill](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#fill).
* [dashArray](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#dasharray) – Specifies the dashes for series.
* [width](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#width) – Specifies the width for series.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/series/stackedsteparea-cs/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/stackedsteparea-cs" %}

## See Also

* [Data label](./data-labels/)
* [Tooltip](./tool-tip/)