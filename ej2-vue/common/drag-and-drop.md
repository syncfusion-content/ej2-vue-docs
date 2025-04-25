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

Drag and drop is a feature of a user interface that allows users to select an item or items and then move them to a different location or onto another interface element by "dragging" the selected item(s) with a pointing device (such as a mouse) and then "dropping" them at the desired location.

Syncfusion<sup style="font-size:70%">&reg;</sup> Vue components support drag and drop feature through two libraries. These are [Draggable](https://ej2.syncfusion.com/documentation/api/base/draggable) and [`Droppable`](https://ej2.syncfusion.com/documentation/api/base/droppable).

## Draggable

The Syncfusion's<sup style="font-size:70%">&reg;</sup> [`Draggable`](https://ej2.syncfusion.com/documentation/api/base/draggable) library allows users to make any DOM element draggable by passing it as a parameter to the `Draggable` constructor. This can be useful for creating interactive and user-friendly interfaces, such as allowing a user to reorder items in a list by dragging them. The below code snippet enables the draggable functionality for the specific DOM element passed to the `Draggable` constructor.

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

Syncfusion<sup style="font-size:70%">&reg;</sup> provides the option to create a clone of a draggable element while the user is dragging it. It can be achieved by setting the [clone](https://ej2.syncfusion.com/documentation/api/base/draggable/#clone) property to `true`. Here's an example of how to create a clone of a draggable element.

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

A drag area is a specific area within a user interface that is designated for drag and drop operations. When an object or element is dragged within a drag area, certain actions or events may be triggered. The user can specify the drag area by using the [dragArea](https://ej2.syncfusion.com/documentation/api/base/draggable/#dragarea) property. Refer to the below sample.

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

Droppable component refers to an area of a user interface that can receive a draggable component that is being moved by a user. Syncfusion's<sup style="font-size:70%">&reg;</sup> [`Droppable`](https://ej2.syncfusion.com/documentation/api/base/droppable) library converts any DOM element into a droppable zone, which accepts draggable elements.

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

[Define handle element for draggable](https://ej2.syncfusion.com/documentation/api/base/draggable#handle)<br/>
[Restricting draggable within container](https://ej2.syncfusion.com/documentation/api/base/draggable#dragarea)<br>
[Visual feedback of draggable element](https://ej2.syncfusion.com/documentation/api/base/draggable#clone)<br>
[Accepting specific drag element in droppable](https://ej2.syncfusion.com/documentation/api/base/droppable#accept)