---
layout: post
title: Virtualization in Vue AutoComplete | Syncfusion
description: Render large Syncfusion Vue AutoComplete datasets efficiently using enableVirtualization, which reuses DOM nodes and supports incremental search.
control: Virtualization 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Virtualization in Vue AutoComplete

AutoComplete virtualization is a technique used to efficiently render extensive lists of items while minimizing the impact on performance. This method is particularly advantageous when dealing with large datasets because it ensures that only a fixed number of DOM (Document Object Model) elements are created. When scrolling through the list, existing DOM elements are reused to display relevant data instead of generating new elements for each item. This recycling process is managed internally.

During virtual scrolling, the data retrieved from the data source depends on the popup height and the calculation of the list item height. Enabling the [enableVirtualization](https://ej2.syncfusion.com/vue/documentation/api/auto-complete/index-default#enableVirtualization) option in an AutoComplete activates this virtualization technique.
 
When fetching data from the data source, the [actionBegin](https://ej2.syncfusion.com/vue/documentation/api/auto-complete/index-default#actionbegin) event is triggered before data retrieval begins. Then, the [actionComplete](https://ej2.syncfusion.com/vue/documentation/api/auto-complete/index-default#actioncomplete) event is triggered once the data is successfully fetched.

When the enableVirtualization property is enabled, the `skip` and `take` properties provided by the user within the Query class at the initial state or during the `actionBegin` or `actionComplete` events will not be considered, since it is internally managed and calculated based on certain dimensions with respect to the popup height.

## Binding local data

The AutoComplete can generate its list items through an array of complex data. For this, the appropriate columns should be mapped to the [fields](https://ej2.syncfusion.com/vue/documentation/api/drop-down-list/index-default#fields) property. When using virtual scrolling, the list updates based on the scroll offset value, triggering a request to fetch more data from the server. As the data is being fetched, the `actionBegin` event occurs before the data retrieval starts. Once the data retrieval is successful, the `actionComplete` event is triggered, indicating that the data fetch process is complete.

In the following example, the `text` column from complex data has been mapped to the `value` field.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/auto-complete/virtual-scroll/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/auto-complete/virtual-scroll/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/auto-complete/virtual-scroll" %}

## Binding remote data

The AutoComplete component supports the retrieval of data from remote data services with the help of the `DataManager` component, triggering the `actionBegin` and `actionComplete` events, and then updating the list data. During virtual scrolling, additional data is retrieved from the server, triggering the `actionBegin` and `actionComplete` events at that time as well. For details on configuring the `DataManager` for remote endpoints, see the [data binding](./data-binding) topic.

The following sample displays the OrderId from the `Orders` Data Service.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/auto-complete/virtual-scroll-remote/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/auto-complete/virtual-scroll-remote/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/auto-complete/virtual-scroll-remote" %}

## Customizing item count in virtualization

When the `enableVirtualization` property is enabled, the `take` property provided by the user within the Query parameter at the initial state or during the `actionBegin` event will be considered. Internally, it calculates the items that fit onto the current page (i.e., probably twice the amount of the popup's height). If the user-provided take value is less than the minimum number of items that fit into the popup, the user-provided take value will not be considered.

The following sample shows the example for customizing item count in virtualization.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/auto-complete/virtual-scroll-remote/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/auto-complete/virtual-scroll-remote/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/auto-complete/virtual-scroll-remote" %}

## Grouping

The AutoComplete supports grouping with Virtualization. It allows you to organize elements into groups based on different categories. Each item in the list can be classified using the [groupBy](https://ej2.syncfusion.com/vue/documentation/api/auto-complete/index-default#fields) field in the data table. After grouping, virtualization works similarly to local data binding, providing a seamless user experience. When the data source is bound to remote data, an initial request is made to retrieve all data for the purpose of grouping. Subsequently, the grouped data works in the same way as local data binding virtualization, enhancing performance and responsiveness.

The following sample shows the example for Grouping with Virtualization.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/auto-complete/virtual-scroll-group/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/auto-complete/virtual-scroll-group/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/auto-complete/virtual-scroll-group" %}