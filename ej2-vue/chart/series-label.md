---
layout: post
title: Series label in Vue Chart component | Syncfusion
description: Learn here all about Series label in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Series label 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Series label in Vue Chart component

The series label displays the name of each series inline, positioned near the end of the series path or the last visible data point. This helps identify each series without referring to the legend.

## Overview

Enable series labels using the [`labelSettings`](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel#labelsettings) property within the series configuration. Set the [`visible`](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesmodel#visible) property to **true** to display the label.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/series-label-cs/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/series-label-cs/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/series-label-cs" %}

> Note: To use the series label feature, inject the `SeriesLabel` module into the `provide`.

## Customization

Customize the appearance of series labels using the following properties:

* [`text`](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesLabelSettingsModel#text) – Custom text for the label. Defaults to the series name.
* [`font`](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesLabelSettingsModel#font) – Font customization options including color, size, family, and weight.
* [`background`](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesLabelSettingsModel#background) – Background color of the label.
* [`border`](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesLabelSettingsModel#border) – Border width and color.
* [`opacity`](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesLabelSettingsModel#opacity) – Label transparency (default: 1).
* [`showOverlapText`](https://ej2.syncfusion.com/vue/documentation/api/chart/seriesLabelSettingsModel#showoverlaptext) – When **false**, overlapping labels are hidden.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/series-label-customization-cs/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/series-label-customization-cs/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/series/series-label-customization-cs" %}