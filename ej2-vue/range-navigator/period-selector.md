---
layout: post
title: Period selector in Vue Range navigator component | Syncfusion
description: Learn here all about Period selector in Syncfusion Vue Range navigator component of Syncfusion Essential JS 2 and more.
control: Period selector 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Period selector in Vue Range navigator component

The period selector allows to select a range with specified periods.

## Periods

An array of objects that allows the users to specify pre-defined time intervals. The [`interval`](https://ej2.syncfusion.com/vue/documentation/api/range-navigator/#interval) property specifies the count value of the button, and the `text` property specifies the text to be displayed on the button. The [`intervaltype`](https://ej2.syncfusion.com/vue/documentation/api/range-navigator/#intervaltype) property allows the users to customize the interval type, and it supports the following types:

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
{% include code-snippet/rangenavigator/getting-started-cs20/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs20" %}

>To use the period selector feature, inject the `PeriodSelector` module using the `RangeNavigator.Inject(PeriodSelector)` method.

## Positioning period selector

The [`position`](https://ej2.syncfusion.com/vue/documentation/api/range-navigator/periodSelectorSettingsModel/#position) property allows the users to position the period selector at the **Top** or **Bottom**.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/rangenavigator/getting-started-cs21/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs21" %}

## Height

The [`height`](https://ej2.syncfusion.com/vue/documentation/api/range-navigator/periodSelectorSettingsModel/#height) property allows the users to specify the height of the period selector. The default value of the height property is **43px**.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/rangenavigator/getting-started-cs22/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs22" %}

## Visibility of range navigator

The [`disableRangeSelector`](https://ej2.syncfusion.com/vue/documentation/api/range-navigator/#disablerangeselector) property allows the users to display only the period selector and not the Range Selector.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/rangenavigator/getting-started-cs23/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs23" %}

## See Also

* [LightWeight](./lightweight/)
