---
layout: post
title:  Drag and drop in Vue Query builder component | Syncfusion
description: Learn here all about Drag and drop in Syncfusion Vue Query builder component of Syncfusion Essential JS 2 and more.
control: Drag and drop
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Drag and drop in Vue Query builder component

The Query Builder provides the functionality to reposition rules or groups within the component effortlessly. This enhancement provides a more intuitive and flexible way to construct and modify queries. You can use [`allowDragAndDrop`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/#allowDragAndDrop) to perform drag and drop functionality. And we have events support for drag and drop features that, indicates the [`dragStart`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/#dragStart), [`drag`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/#drag) and [`drop`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/#drop) actions.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/query-builder/drag-and-drop-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/query-builder/drag-and-drop-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/drag-and-drop-cs1" %}