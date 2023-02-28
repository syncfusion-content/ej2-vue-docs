---
layout: post
title: Data binding in Vue Treemap component | Syncfusion
description: Learn here all about Data binding in Syncfusion Vue Treemap component of Syncfusion Essential JS 2 and more.
control: Data binding 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Data binding in Vue Treemap component

The TreeMap control supports data binding using the dataSource property.

## Populate data

The [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/treemap/#datasource) property accepts collection values as input. For example, a list of objects can be provided as input. Data can be given as either flat or hierarchical collection to the [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/treemap/#datasource) property.

<!-- markdownlint-disable MD036 -->

### Flat collection

The following code shows, how to bind a flat collection as data source to the TreeMap control.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treemap/getting-started-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs8" %}