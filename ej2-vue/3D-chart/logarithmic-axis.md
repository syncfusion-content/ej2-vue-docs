---
layout: post
title: Logarithmic axis in Vue 3D Chart component | Syncfusion
description: Learn here all about logarithmic axis in Syncfusion 3D Chart component of Syncfusion Essential JS 2 and more.
control: 3D Chart
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Logarithmic axis in Vue 3D Chart component

Logarithmic axis uses logarithmic scale and it is very useful in visualizing data, when it has numerical values in both lower order of magnitude (eg: 10<sup>-6</sup>) and higher order of magnitude (eg: 10<sup>6</sup>).

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart3d/axis/log/log/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/axis/log/log" %}

>Note: To use logarithmic axis, we need to inject `Logarithmic3D` into the `provide` and set the [`valueType`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/axis3D/#valuetype) of the axis to **Logarithmic**.

## Range

The range of an axis will be calculated automatically based on the provided data and it can also be customized by using the [`minimum`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/axis3D/#minimum), [`maximum`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/axis3D/#maximum) and [`interval`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/axis3D/#interval) properties of the axis.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart3d/axis/log/range/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/axis/log/range" %}

## Logarithmic base

Logarithmic base can be customized by using the [`logBase`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/axis3D/#logbase) property of the axis. For example when the logBase is 5, the axis values follows 5<sup>-2</sup>, 5<sup>-1</sup>, 5<sup>0</sup>, 5<sup>1</sup>, 5<sup>2</sup> etc.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart3d/axis/log/base/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/axis/log/base" %}

## Logarithmic interval

The interval of the logarithmic axis can be customized by using the [`interval`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/axis3D/#interval) property in the axis. When the logarithmic base is 10 and logarithmic **interval** is 2, then the axis labels are placed at an interval of 10<sup>2</sup>. The default value of the [`interval`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/axis3D/#interval) is **1**.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart3d/axis/log/interval/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/axis/log/interval" %}