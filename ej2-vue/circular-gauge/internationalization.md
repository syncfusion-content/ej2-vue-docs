---
layout: post
title: Internationalization in Vue Circular gauge component | Syncfusion
description: Learn here all about Internationalization in Syncfusion Vue Circular gauge component of Syncfusion Essential JS 2 and more.
control: Internationalization 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Internationalization in Vue Circular gauge component

Circular gauge provide supports for internationalization for below gauge elements.

* Axis label.
* Tooltip.

For more information about number formatter you can refer [`internationalization`](https://ej2.syncfusion.com/documentation/common/internationalization/).

<!-- markdownlint-disable MD036 -->

## Globalization

Globalization is the process of designing and developing a component that works in different cultures/locales.
Internationalization library is used to globalize number in CircularGauge component
using [`format`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/label/#format-string) property in [`labelStyle`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/label/).

<!-- markdownlint-disable MD036 -->

### Numeric Format

In the below example axis labels are `globalized` to EUR.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/circular-gauge/getting-started-cs66/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/getting-started-cs66" %}