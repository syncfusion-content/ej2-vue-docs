---
layout: post
title: Chart Center Label in Vue Accumulation chart component | Syncfusion
description: Learn here all about Center Label in Syncfusion Vue Accumulation chart component of Syncfusion Essential JS 2 and more.
control: Center Label
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Center Label in Vue Accumulation chart component

## Center label

Using [`centerLabel`](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/centerLabel) it is now possible to place a label at the center of a pie or donut chart. To configure the default text rendered on the center label for the pie and doughnut charts, use the [`text`](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/centerLabel/#text) property in the [`centerLabel`](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/centerLabel).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/pie-cs34/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/pie-cs34/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/pie-cs34" %}

## Hover text

The default text in the center label can be changed when the mouse pointer hovers over the pie and doughnut charts slice using the [`hoverTextFormat`](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/centerLabel/#hovertextformat) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/pie-cs35/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/pie-cs35/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/pie-cs35" %}

## Customization

Customize the center label text using the [`textStyle`](https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/centerLabel/#textstyle) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/series/pie-cs36/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/series/pie-cs36/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/series/pie-cs36" %}