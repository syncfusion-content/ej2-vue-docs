---
layout: post
title: How to load accordion with DataSource in Vue Accordion | Syncfusion
description: Bind remote OData to Vue Accordion items using DataManager, mapping the header and content fields of the returned JSON to Accordion items.
control: Load accordion with data source 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to load accordion with DataSource in Vue Accordion

You can bind any data object to Accordion items, by mapping it to [`header`](https://ej2.syncfusion.com/vue/documentation/api/accordion/accordionItem#header) and [`content`](https://ej2.syncfusion.com/vue/documentation/api/accordion/accordionItem#content) property.

In the below demo, Data is fetched from an `OData` service using `DataManager`. The result data is formatted as a JSON object with `header` and `content` fields, which is set to items property of Accordion.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/accordion/how-to/accordion-datasource-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/accordion/how-to/accordion-datasource-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/accordion/how-to/accordion-datasource-cs1" %}