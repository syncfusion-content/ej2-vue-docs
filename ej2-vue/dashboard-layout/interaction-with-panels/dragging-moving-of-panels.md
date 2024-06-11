---
layout: post
title: Dragging moving of panels in Vue Dashboard layout component | Syncfusion
description: Learn here all about Dragging moving of panels in Syncfusion Vue Dashboard layout component of Syncfusion Essential JS 2 and more.
control: Dragging moving of panels 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Dragging moving of panels in Vue Dashboard layout component

The Dashboard Layout component is provided with dragging functionality to drag and reorder the panels within the layout. While dragging a panel, a holder will be highlighted below the panel indicating the panel placement on panel drop. This helps the user to decide whether to place the panel in the current position or revert to previous position without disturbing the layout.

If one or more panels collide while dragging, then the colliding panels will be pushed towards the left or right or top or bottom direction where an adaptive space for the collided panel is available. The position changes of these collided panels will be updated dynamically during dragging of a panel, so the user can conclude whether to place the panel in the current position or not.

While dragging a panel in Dashboard layout the following dragging events will be triggered,
* [dragStart](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout/#dragstart) - Triggers when panel drag starts
* [drag](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout/#drag) - Triggers when panel is being dragged
* [dragStop](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout/#dragstop) - Triggers when panel drag stops

The following sample demonstrates dragging and pushing of panels. For example, while dragging the panel 0 over panel 1, these panels get collided and push the panel 1 towards the feasible direction, so that, the panel 0 gets placed in the panel 1 position.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/dashboard-layout/setting-cell-spacing-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/dashboard-layout/setting-cell-spacing-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dashboard-layout/setting-cell-spacing-cs1" %}

## Customizing the dragging handler

Initially, the complete panel will act as the handler for dragging the panel such that the dragging action occurs on clicking anywhere over a panel. However, this dragging handler for the panels can be customized using the [`draggableHandle`](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout/#draggablehandle) property to restrict the dragging action within a particular element in the panel.

The following sample demonstrates customizing the dragging handler of the panels where the dragging action of panel occurs only with the header of the panel.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/dashboard-layout/drag-handler-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/dashboard-layout/drag-handler-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dashboard-layout/drag-handler-cs1" %}

By default, the dragging of panels is enabled in Dashboard Layout. It can also be disabled with the help of [allowDragging](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout/#allowdragging) API. Setting [allowDragging](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout/#allowdragging) to false disables the dragging functionality in Dashboard Layout.

The following sample demonstrates Dashboard Layout with dragging support disabled.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/dashboard-layout/disable-dragging-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/dashboard-layout/disable-dragging-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dashboard-layout/disable-dragging-cs1" %}

> You can refer to our [Vue Dashboard Layout](https://www.syncfusion.com/vue-components/vue-dashboard-layout) feature tour page for its groundbreaking feature representations. You can also explore our [Vue Dashboard Layout example](https://ej2.syncfusion.com/vue/demos/#/material/dashboard-layout/default.html) to knows how to present and manipulate data.