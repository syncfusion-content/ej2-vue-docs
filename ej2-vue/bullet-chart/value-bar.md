---
layout: post
title: Value bar in Vue Bullet chart component | Syncfusion
description: Learn here all about Value bar in Syncfusion Vue Bullet chart component of Syncfusion Essential JS 2 and more.
control: Value bar 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Value bar in Vue Bullet chart component

To display the primary data or the current value of the data being measured known as the **Feature Measure** that should be encoded as a bar. This is called as the **Actual Bar** or the **Feature Bar** in the Bullet Chart, and to display the actual bar the [`valueField`](https://ej2.syncfusion.com/vue/documentation/api/bullet-chart/#valuefield) should be mapped to the appropriate field from the data source.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/bullet-chart/bullet-chart-dimensions/container-cs24/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/bullet-chart/bullet-chart-dimensions/container-cs24" %}

## Types of actual bar

The shape of the actual bar can be customized using the [`type`](https://ej2.syncfusion.com/vue/documentation/api/bullet-chart/#type) property of the Bullet Chart. The actual bar contains **Rect** and **Dot** shapes. By default, the actual bar shape is Rect.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/bullet-chart/bullet-chart-dimensions/container-cs25/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/bullet-chart/bullet-chart-dimensions/container-cs25" %}

## Actual bar customization

### Border customization

Using the [`valueBorder`](https://ej2.syncfusion.com/vue/documentation/api/bullet-chart/#valueborder) property of the bullet chart, you can customize the border [`color`](https://ej2.syncfusion.com/vue/documentation/api/bullet-chart/borderModel/#color) and [`width`](https://ej2.syncfusion.com/vue/documentation/api/bullet-chart/borderModel/#width) of the actual bar.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/bullet-chart/bullet-chart-dimensions/container-cs26/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/bullet-chart/bullet-chart-dimensions/container-cs26" %}

### Fill color and height customization

Customize the fill color and height of the actual bar using the [`valueFill`](https://ej2.syncfusion.com/vue/documentation/api/bullet-chart/#valuefill) and [`valueHeight`](https://ej2.syncfusion.com/vue/documentation/api/bullet-chart/#valueheight) properties of the bullet chart. Also, you can bind the color for the actual bar from [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/bullet-chart/#datasource) for the bullet chart using [`valueFill`](https://ej2.syncfusion.com/vue/documentation/api/bullet-chart/#valuefill) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/bullet-chart/bullet-chart-dimensions/container-cs27/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/bullet-chart/bullet-chart-dimensions/container-cs27" %}