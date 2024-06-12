---
layout: post
title: Labels in Vue Range navigator component | Syncfusion
description: Learn here all about Labels in Syncfusion Vue Range navigator component of Syncfusion Essential JS 2 and more.
control: Labels 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Labels in Vue Range navigator component

## Multilevel labels

The multi-level labels for the Range Selector can be enabled by setting the [`enableGrouping`](https://ej2.syncfusion.com/vue/documentation/api/range-navigator/#enablegrouping) property to **true**. This is restricted to the DateTime axis alone.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rangenavigator/getting-started-cs14/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rangenavigator/getting-started-cs14/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs14" %}

## Grouping

The multi-level labels can be grouped using the [`groupBy`](https://ej2.syncfusion.com/vue/documentation/api/range-navigator/#groupby) property with the following interval types:

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
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rangenavigator/getting-started-cs15/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rangenavigator/getting-started-cs15/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs15" %}

## Smart labels

The [`labelIntersectAction`](https://ej2.syncfusion.com/vue/documentation/api/range-navigator/#labelintersectaction) property is used to avoid overlapping of labels. The following code sample shows the setting of [`labelIntersectAction`](https://ej2.syncfusion.com/vue/documentation/api/range-navigator/#labelintersectaction) property to **Hide**.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rangenavigator/getting-started-cs16/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rangenavigator/getting-started-cs16/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs16" %}

## Label positioning

By default, the labels can be placed outside the Range Selector. It can also be placed inside the Range Selector using the [`labelPosition`](https://ej2.syncfusion.com/vue/documentation/api/range-navigator/#labelposition) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rangenavigator/getting-started-cs17/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rangenavigator/getting-started-cs17/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs17" %}

## Labels customization

The font size, color, family, etc. can be customized using the [`labelStyle`](https://ej2.syncfusion.com/vue/documentation/api/range-navigator/#labelstyle) setting.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rangenavigator/getting-started-cs18/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rangenavigator/getting-started-cs18/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs18" %}