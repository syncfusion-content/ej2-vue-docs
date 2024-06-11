---
layout: post
title: Drag and drop in Vue List box component | Syncfusion
description: Learn here all about Drag and drop in Syncfusion Vue List box component of Syncfusion Essential JS 2 and more.
control: Drag and drop 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Drag and drop in Vue List box component

The ListBox has support to drag an item or a group of selected items and drop it within the same list box or into another list box.

The elements can be customized on drag and drop by using the following events,

| Events | Description |
|------|------|
| [`dragStart`](https://ej2.syncfusion.com/vue/documentation/api/list-box/#dragstart) | Triggers when the selected element is being dragged. |
| [`drag`](https://ej2.syncfusion.com/vue/documentation/api/list-box/#drag) | Triggers when the selected element is being dragged. |
| [`drop`](https://ej2.syncfusion.com/vue/documentation/api/list-box/#drop) | Triggers when the selected element is being dropped. |

## Single listbox

To drag and drop an item or group of item within the list box can be achieved by setting [`allowDragAndDrop`](https://ej2.syncfusion.com/vue/documentation/api/list-box/#allowdraganddrop) property as `true`.

The following sample illustrates how to drag and drop an item within the same list box by enabling `allowDragAndDrop` property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/list-box/getting-started/getting-started-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/list-box/getting-started/getting-started-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/list-box/getting-started/getting-started-cs6" %}

## Multiple listbox

To drag and drop an item or group of item between two list boxes can be achieved by setting `allowDragAndDrop` property as `true` and [`scope`](https://ej2.syncfusion.com/vue/documentation/api/list-box/#scope) property should be set to both the list boxes.

In the following sample, the `allowDragAndDrop` property is set as `true` and `scope` is set as `combined-list` to enable drop and drop in both list boxes.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/list-box/getting-started/getting-started-cs7/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/list-box/getting-started/getting-started-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/list-box/getting-started/getting-started-cs7" %}