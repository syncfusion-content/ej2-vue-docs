---
layout: post
title: Category axis in Vue 3D Chart component | Syncfusion
description: Learn here all about category axis in Syncfusion 3D Chart component of Syncfusion Essential JS 2 and more.
control: 3D Chart
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Category axis in Vue 3D Chart component

The category axis is the horizontal axis of a 3D chart that shows text values rather than numerical values. Compared to the vertical axis, this axis has fewer labels. The following sample shows to render the 3D chart using category axis.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart3d/axis/category/category/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/axis/category/category" %}

>Note: To use category axis, we need to inject `Category3D` into the `provide` and set the [`valueType`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/axis3D/#valuetype) of axis to **Category**.

## Labels placement

By default, category axis labels are placed between ticks in an axis. It can also be placed on ticks using the [`labelPlacement`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/axis3D/#labelplacement) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart3d/axis/category/labels-placement/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/axis/category/labels-placement" %}

## Range

The range of the category axis can be customized using [`minimum`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/axis3D/#minimum), [`maximum`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/axis3D/#maximum) and [`interval`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/axis3D/#interval) properties of the axis.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart3d/axis/category/range/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/axis/category/range" %}

## Indexed category axis

The category axis can also be rendered based on the index values of the data source. This can be achieved by defining the [`isIndexed`](https://ej2.syncfusion.com/vue/documentation/api/chart3d/axis3D/#isindexed) property to **true** in the axis.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart3d/axis/category/indexed/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart3d/axis/category/indexed" %}