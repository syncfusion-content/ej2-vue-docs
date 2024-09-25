---
layout: post
title: Step Area in Vue Chart component | Syncfusion
description: Learn here all about Step Area in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Step Area Chart
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Step area in Vue Chart component

## Step area

To render a step area series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#type) as `StepArea` and inject `StepAreaSeries`  into the `provide`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/area-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/area-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/area-cs6" %}

## Series customization

The following properties can be used to customize the `step area` series.

* [fill](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#fill) – Specifies the color of the series.
* [opacity](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#opacity) – Specifies the opacity of [fill](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#fill).
* [dashArray](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#dasharray) – Specifies the dashes for series.
* [width](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#width) – Specifies the width for series.
* [step](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#step) – Specifies the position of the step for the series.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/steparea-cs/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/steparea-cs/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/steparea-cs" %}

**No risers**

You can eliminate the vertical lines between points by using the [`noRisers`](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#norisers) property in a series. This approach is useful for highlighting trends without the distraction of risers.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/stepareariser-cs/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/stepareariser-cs/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/stepareariser-cs" %}

## See also

* [Data label](../data-labels/)
* [Tooltip](../tool-tip/)