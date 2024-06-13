---
layout: post
title: Step Line in Vue Chart component | Syncfusion
description: Learn here all about Step Line in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Step Line Chart
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Step line in Vue Chart component

## Step line

To render a step line series, use series [`type`](https://ej2.syncfusion.com/vue/documentation/api/chart/series/#type) as `StepLine` and inject `StepLineSeries` into
the `provide`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/line-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/line-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/line-cs2" %}

## Series customization

The following properties can be used to customize the `step line` series.

* [fill](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#fill) – Specifies the color of the series.
* [opacity](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#opacity) – Specifies the opacity of [fill](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#fill).
* [dashArray](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#dasharray) – Specifies the dashes for series.
* [width](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#width) – Specifies the width for series.
* [step](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#step) – Specifies the position of the step for the series.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/stepline-cs/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/stepline-cs/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/stepline-cs" %}

## See also

* [Data label](../data-labels/)
* [Tooltip](../tool-tip/)