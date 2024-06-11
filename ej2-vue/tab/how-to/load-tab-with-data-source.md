---
layout: post
title: Load tab with data source in Vue Tab component | Syncfusion
description: Learn here all about Load tab with data source in Syncfusion Vue Tab component of Syncfusion Essential JS 2 and more.
control: Load tab with data source 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Load tab with data source in Vue Tab component

You can bind any data object to Tab items, by mapping it to a [`header`](https://ej2.syncfusion.com/vue/documentation/api/tab/tabItem/#header) and [`content`](https://ej2.syncfusion.com/vue/documentation/api/tab/tabItem/#content) property.

To render Vue Tab component with data source, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=EwyIakACAT0" %}

In the below demo, Data is fetched from an `OData` service using `DataManager`. The result data is formatted as a JSON object with `header`
and `content` fields, which is set to items property of Tab.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/tab/how-to/datasource-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/tab/how-to/datasource-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/how-to/datasource-cs1" %}