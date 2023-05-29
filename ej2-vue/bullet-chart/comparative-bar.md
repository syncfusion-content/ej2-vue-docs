---
layout: post
title: Comparative bar in Vue Bullet chart component | Syncfusion
description: Learn here all about Comparative bar in Syncfusion Vue Bullet chart component of Syncfusion Essential JS 2 and more.
control: Comparative bar 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Comparative bar in Vue Bullet chart component

The line marker that runs perpendicular to the orientation of the graph is known as the **Comparative Measure** and it is used as a target marker to compare against the feature measure value. This is also called as the **Target Bar** in the Bullet Chart. To display the target bar, the [`targetField`](https://ej2.syncfusion.com/vue/documentation/api/bullet-chart/#targetfield) should be mapped to the appropriate field from the datasource.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/bullet-chart/bullet-chart-dimensions/container-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/bullet-chart/bullet-chart-dimensions/container-cs5" %}

## Types of Target Bar

The shape of the target bar can be customized using the [`targetTypes`](https://ej2.syncfusion.com/vue/documentation/api/bullet-chart/#targettypes) property and it supports **Circle**, **Cross**, and **Rect** shapes. The default type of the target bar is **Rect**.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/bullet-chart/bullet-chart-dimensions/container-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/bullet-chart/bullet-chart-dimensions/container-cs6" %}

## Target Bar Customization

The following properties can be used to customize the Target Bar.

* [`targetColor`](https://ej2.syncfusion.com/vue/documentation/api/bullet-chart/#targetcolor) - Specifies the fill color of Target Bar.
* [`targetWidth`](https://ej2.syncfusion.com/vue/documentation/api/bullet-chart/#targetwidth) - Specifies the width of Target Bar.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/bullet-chart/bullet-chart-dimensions/container-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/bullet-chart/bullet-chart-dimensions/container-cs7" %}