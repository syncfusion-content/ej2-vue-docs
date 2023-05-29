---
layout: post
title: Load accordion with data source in Vue Accordion component | Syncfusion
description: Learn here all about Load accordion with data source in Syncfusion Vue Accordion component of Syncfusion Essential JS 2 and more.
control: Load accordion with data source 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Load accordion with data source in Vue Accordion component

You can bind any data object to Accordion items, by mapping it to [`header`](https://ej2.syncfusion.com/vue/documentation/api/accordion/accordionItem#header) and [`content`](https://ej2.syncfusion.com/vue/documentation/api/accordion/accordionItem#content) property.

In the below demo, Data is fetched from an `OData` service using `DataManager`. The result data is formatted as a JSON object with `header` and `content` fields, which is set to items property of Accordion.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/accordion/how-to/accordion-datasource-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/accordion/how-to/accordion-datasource-cs1" %}
