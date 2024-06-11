---
layout: post
title: Linear gauge dimensions in Vue Linear gauge component | Syncfusion
description: Learn here all about Linear gauge dimensions in Syncfusion Vue Linear gauge component of Syncfusion Essential JS 2 and more.
control: Linear gauge dimensions 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Linear gauge dimensions in Vue Linear gauge component

## Size for Linear Gauge

The height and width of the Linear Gauge can be set using the [`width`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/#width) and [`height`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/#height) properties in [`ejs-lineargauge`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/).

### In Pixel

The size of the Linear Gauge can be set in pixel as demonstrated below.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs46/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs46/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/linear-gauge/getting-started-cs46" %}

### In Percentage

By setting value in percentage, Linear Gauge receives its dimension matching to its parent. For example, when the height is set as **50%**, Linear Gauge renders to half of the parent height. The Linear Gauge will be responsive when the width is set as **100%**.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs47/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs47/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/linear-gauge/getting-started-cs47" %}

>Note: When the component's size is not specified, the height will be **450px** and the width will be the same as the parent element's width.