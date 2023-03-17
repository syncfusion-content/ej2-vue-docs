---
layout: post
title: Ranges in Vue Bullet chart component | Syncfusion
description: Learn here all about Ranges in Syncfusion Vue Bullet chart component of Syncfusion Essential JS 2 and more.
control: Ranges 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Ranges in Vue Bullet chart component

Ranges represent the quality of a specific range such as **Good**, **Bad** and **Satisfactory** in the Bullet Chart scale. The ending point of a qualitative range is specified in the [`end`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/rangeModel/#end) property in [`ranges`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/#ranges). The [`minimum`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/#minimum) value of a quantitative scale is considered the starting point of the first range or the previous range end point.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/bullet-chart/axis/custom-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/bullet-chart/axis/custom-cs10" %}

## Color Customization

Enhance the readability of ranges with color and opacity. It can be applied using the [`color`](https://ej2.syncfusion.com/vue/documentation/api/bullet-chart/rangeModel/#color) and [`opacity`](https://ej2.syncfusion.com/vue/documentation/api/bullet-chart/rangeModel/#opacity) properties in [`ranges`](https://ej2.syncfusion.com/angular/documentation/api/bullet-chart/#ranges).

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/bullet-chart/axis/custom-cs11/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/bullet-chart/axis/custom-cs11" %}