---
layout: post
title: Category axis in Vue Chart component | Syncfusion
description: Learn here all about Category axis in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Category axis 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Category axis in Vue Chart component

<!-- markdownlint-disable MD036 -->

Category axis are used to represent, the string values instead of numbers.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/axis/category-cs20/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/category-cs20" %}

>Note: To use category axis, we need to inject `Category` into the `provide` and set the [`valueType`](https://ej2.syncfusion.com/vue/documentation/api/chart/axis/#valuetype) of axis to `Category`.

<!-- markdownlint-disable MD036 -->

## Labels Placement

<!-- markdownlint-disable MD036 -->

By default, category labels are placed between the ticks in an axis, this can also be placed on ticks using [`labelPlacement`](https://ej2.syncfusion.com/vue/documentation/api/chart/axis/#labelplacement) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/axis/category-cs21/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/category-cs21" %}

## Range

Range of the category axis can be customized using `minimum`,
`maximum` and `interval` property of the axis.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/axis/category-cs22/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/category-cs22" %}

## Indexed category axis

Category axis also can be rendered based on the index values of data source. This can be achieved by defining the `isIndexed` property to `true` in the axis.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/axis/category-cs23/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/category-cs23" %}