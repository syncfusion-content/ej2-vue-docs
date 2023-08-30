---
layout: post
title: Virtual scrolling in Vue Schedule component | Syncfusion
description: Learn here all about Virtual scrolling in Syncfusion Vue Schedule component of Syncfusion Essential JS 2 and more.
control: Virtual scrolling 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Virtual scrolling in Vue Schedule component

To achieve better performance in the Scheduler when loading a large number of resources and events, we have added virtual scrolling support load a large set of resources and events instantly as you scroll. You can dynamically load large number of resources and events in the Scheduler by setting `true` to the [`allowVirtualScrolling`](https://ej2.syncfusion.com/vue/documentation/api/schedule/viewsModel/#allowvirtualscrolling) property within the view specific settings. The virtual loading of events is possible in Agenda view, by setting [`allowVirtualScrolling`](https://ej2.syncfusion.com/vue/documentation/api/schedule/viewsModel/#allowvirtualscrolling) property to `true` within the agenda view specific settings.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/schedule/virtual-scrolling-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/virtual-scrolling-cs2" %}

> For now, the virtual loading of resources and events is not supported in `MonthAgenda`, `Year` and `TimelineYear` (Horizontal Orientation) views.

## See Also

* [Virtual scrolling in Agenda view](./views/#agenda-view)

> You can refer to our [Vue Scheduler](https://www.syncfusion.com/vue-components/vue-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [Vue Scheduler example](https://ej2.syncfusion.com/vue/demos/#/material/schedule/overview.html) to knows how to present and manipulate data.