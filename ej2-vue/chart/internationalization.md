---
layout: post
title: Internationalization in Vue Chart component | Syncfusion
description: Learn here all about Internationalization in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Internationalization 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Internationalization in Vue Chart component

Chart provide supports for internationalization for below chart elements.

* Datalabel.
* Axis label.
* Tooltip.

For more information about number and date formatter you can refer [`internationalization`](https://ej2.syncfusion.com/documentation/common/internationalization/).

<!-- markdownlint-disable MD036 -->
**Globalization**

Globalization is the process of designing and developing an component that works in different cultures/locales.  Internationalization  library is used to globalize number, date, time values in Chart component using  `labelFormat` property in axis.

**Numeric Format**

In the below example axis, point  and tooltip labels are globalized to EUR.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/number-format-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/number-format-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/number-format-cs1" %}