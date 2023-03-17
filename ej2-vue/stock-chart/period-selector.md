---
layout: post
title: Period selector in Vue Stock chart component | Syncfusion
description: Learn here all about Period selector in Syncfusion Vue Stock chart component of Syncfusion Essential JS 2 and more.
control: Period selector 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Period selector in Vue Stock chart component

The period selector allows to select a range with specified periods. By default the period selector is enabled in stock chart.

## Periods

Periods is an array of objects that allows users to specify the range of [`periods`](https://ej2.syncfusion.com/vue/documentation/api/stock-chart/periodSelector/). The `interval` property specifies the count value of the button, and the `text` property specifies the text to be displayed on button. The `intervalType` property allows users to customize the intervals of the buttons. The `intervalType` property supports the following interval types:

* Auto
* Years
* Quarter
* Months
* Weeks
* Days
* Hours
* Minutes
* Seconds

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/stockchart/period-selector-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/stockchart/period-selector-cs1" %}

## Visibility of period selector

The [`enablePeriodSelector`](https://ej2.syncfusion.com/vue/documentation/api/stock-chart/periodSelector/) property allows users to toggle the visibility of period selector.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/stockchart/period-selector-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/stockchart/period-selector-cs2" %}