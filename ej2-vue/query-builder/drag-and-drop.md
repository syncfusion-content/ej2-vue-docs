---
layout: post
title: Drag and Drop in Vue Query Builder UI | Syncfusion
description: Reposition rules and groups in the Vue Query Builder UI with allowDragAndDrop and dragStart, drag, and drop events for flexible query building.
control: Drag and drop
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Drag and Drop in Vue Query Builder UI

The Query Builder provides the functionality to reposition rules or groups within the component effortlessly. This enhancement provides a more intuitive and flexible way to construct and modify queries. You can use [`allowDragAndDrop`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/index-default#allowDragAndDrop) to enable drag and drop functionality. Events are also available for drag and drop operations, including [`dragStart`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/index-default#dragStart), [`drag`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/index-default#drag), and [`drop`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/index-default#drop).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/query-builder/drag-and-drop-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/query-builder/drag-and-drop-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/drag-and-drop-cs1" %}