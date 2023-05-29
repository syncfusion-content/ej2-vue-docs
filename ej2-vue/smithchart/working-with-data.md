---
layout: post
title: Working with data in Vue Smithchart component | Syncfusion
description: Learn here all about Working with data in Syncfusion Vue Smithchart component of Syncfusion Essential JS 2 and more.
control: Working with data 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Working with data in Vue Smithchart component

Smithchart can visualise the data bound from local data. The data you bind for the smithchart, should be an array of object and that should contain the field resistance and rectangle. This should be bind to points or datasource in the smithchart.

## Data Binding

You can bind simple JSON data to smithchart using point property in series. JSON data should contain  [`resistance`] and [`reactance`] fields. This JSON data should be bind to points or datasource in the  smithchart. You can any number of JSON for points or datasource as per your requirement.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/smithchart/getting-started-cs29/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs29" %}