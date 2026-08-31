---
layout: post
title: How to load tab with DataSource in Vue Tabs | Syncfusion
description: Bind a remote data source to Vue Tabs using DataManager and map header and content fields from the returned JSON to the tab items property.
control: Load tab with data source 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to load tab with DataSource in Vue Tabs

You can bind any data object to Tab items by mapping it to the [header](https://ej2.syncfusion.com/vue/documentation/api/tab/tabItem#header) and [content](https://ej2.syncfusion.com/vue/documentation/api/tab/tabItem#content) properties.

To render the Vue Tab component with a data source, you can check out this video:

{% youtube "https://www.youtube.com/watch?v=EwyIakACAT0" %}

In the following demo, data is fetched from an `OData` service using `DataManager`. The result data is formatted as a JSON object with `header` and `content` fields, which is set to the `items` property of the Tab.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/tab/how-to/datasource-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/tab/how-to/datasource-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/how-to/datasource-cs1" %}