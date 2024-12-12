---
layout: post
title: Infinite scroll in Vue Treegrid component | Syncfusion
description: Learn here all about Infinite scroll in Syncfusion Vue Treegrid component of Syncfusion Essential JS 2 and more.
control: Infinite scroll 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Infinite scroll in Vue Treegrid component

Infinite scrolling is used to load a huge amount of data without degrading the TreeGrid performance. This feature works like the lazy loading concept, which means the buffer data is loaded only when the scrollbar reaches the end of the scroller.

To enable Infinite scrolling, set `enableInfiniteScrolling` property as true.

> * In this feature, TreeGrid will not make a new data request when you visit the same page again.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/scroll/virtualscroll-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/scroll/virtualscroll-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/scroll/virtualscroll-cs1" %}

## InitialBlocks

You can define the initial loading pages count by using `infiniteScrollSettings.initialBlocks` property. By default, this feature loads three pages in initial rendering.

In the below demo, we have changed this property value to load five page records instead of three.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/scroll/virtualscroll-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/scroll/virtualscroll-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/scroll/virtualscroll-cs2" %}

## Cache Mode

Cache is used to store the loaded rows object in the TreeGrid instance which can be reused for creating the row elements whenever you scroll to already visited page. Also, this mode maintains row elements based on the `infiniteScrollSettings.maxBlocks` count value, once this limit exceeds then it will remove row elements from DOM for new rows.

To enable the cache mode in Infinite scrolling, set `infiniteScrollSettings.enableCache` property as true.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/scroll/virtualscroll-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/scroll/virtualscroll-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/scroll/virtualscroll-cs3" %}

## Limitations for Infinite Scrolling

* Due to the element height limitation in browsers, the maximum number of records loaded by the treegrid is limited due to the browser capability.
* Initial loading rows total height must be greater than the viewport height.
* Cell selection will not be persisted in cache mode.
* Infinite scrolling is not compatible with batch editing, cell editing, detail template and hierarchy features.
* The aggregated information and total group items are displayed based on the current view items. To get these information regardless of the view items, refer to the
* Programmatic selection using the [`selectRows`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#selectrows) and [`selectRow`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#selectrow) method is not supported in infinite scrolling.
* Infinite scrolling does not support rendering records in a collapsed state. All records must be fully expanded at initial rendering for proper functionality.