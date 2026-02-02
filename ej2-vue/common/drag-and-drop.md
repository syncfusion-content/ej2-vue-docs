---
layout: post
title: Drag and drop in Vue Common control | Syncfusion
description: Learn here all about Drag and drop in Syncfusion Vue Common control of Syncfusion Essential JS 2 and more.
control: common
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Drag and Drop in Vue

Drag and drop is a user interface feature that lets users select an item (or items) and move them to a different location or onto another interface element by dragging with a pointing device (such as a mouse) and dropping at the desired location.

Syncfusion<sup style="font-size:70%">&reg;</sup> Vue components support drag and drop feature through two libraries. These are [Draggable](https://ej2.syncfusion.com/documentation/api/base/draggable/) and [`Droppable`](https://ej2.syncfusion.com/documentation/api/base/droppable/).

## Draggable

The Syncfusion<sup style="font-size:70%">&reg;</sup> [`Draggable`](https://ej2.syncfusion.com/documentation/api/base/draggable/) library allows you to make any DOM element draggable by passing it to the `Draggable` constructor. This is useful for interactive UI patterns such as reordering a list by dragging items.

Example — enable draggable functionality for a specific DOM element:

 {% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/common/draggable-default-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/common/draggable-default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/draggable-default-cs1" %}

### Clone draggable element

You can create a clone of the draggable element while dragging by setting the [clone](https://ej2.syncfusion.com/documentation/api/base/draggable/#clone) property to `true`. Example:

 {% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/common/draggable-default-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/common/draggable-default-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/draggable-default-cs2" %}

### Drag area

A drag area is a specific region designated for drag-and-drop operations. Specify the drag area using the [dragArea](https://ej2.syncfusion.com/documentation/api/base/draggable/#dragarea) property. Example:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/common/drag-drop-action-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/common/drag-drop-action-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/drag-drop-action-cs1" %}



## Droppable

A droppable area is an element that can accept draggable elements. The Syncfusion<sup style="font-size:70%">&reg;</sup> [`Droppable`](https://ej2.syncfusion.com/documentation/api/base/droppable/) library converts any DOM element into a droppable zone.

When a draggable component is moved over a droppable component, the [drop](https://ej2.syncfusion.com/documentation/api/base/droppable/#events) event can be triggered. The user can get details about the dropped element through the event argument. Based on the event argument, the user can append the dragged element to the target element.

Refer to the following code snippet to enable droppable zones.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/common/drag-drop-action-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/common/drag-drop-action-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/drag-drop-action-cs2" %}

## See also

- [Define handle element for draggable](https://ej2.syncfusion.com/documentation/api/base/draggable/#handle)  
- [Restrict draggable within container (dragArea)](https://ej2.syncfusion.com/documentation/api/base/draggable/#dragarea)  
- [Visual feedback of draggable element (clone)](https://ej2.syncfusion.com/documentation/api/base/draggable/#clone)  
- [Accept specific drag elements in droppable (accept)](https://ej2.syncfusion.com/documentation/api/base/droppable/#accept)