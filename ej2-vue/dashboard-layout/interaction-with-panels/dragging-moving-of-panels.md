---
layout: post
title: Dragging moving of panels in Vue Dashboard Layout | Syncfusion
description: Learn here all about Dragging moving of panels in Syncfusion Vue Dashboard Layout component of Syncfusion Essential JS 2 and more.
control: Dragging moving of panels 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Dragging moving of panels in Vue Dashboard Layout component

The Dashboard Layout component provides dragging functionality to reorder panels within the layout. While dragging a panel, a placeholder is highlighted below the panel to indicate its placement when dropped. This helps the user decide whether to place the panel in the current position or revert to the previous position without disturbing the layout.

If one or more panels collide while dragging, the colliding panels are pushed toward the left, right, top, or bottom—wherever an adaptive space for the collided panel is available. The positions of these collided panels update dynamically during dragging, so the user can decide whether to place the panel in the current position.

While dragging a panel in Dashboard Layout the following dragging events are triggered,
* [dragStart](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout#dragstart) - Triggers when panel drag starts
* [drag](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout#drag) - Triggers when panel is being dragged
* [dragStop](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout#dragstop) - Triggers when panel drag stops

The following sample demonstrates dragging and pushing of panels. For example, while dragging panel 0 over panel 1, these panels collide and push panel 1 toward a feasible direction so panel 0 can occupy panel 1's position.

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

By default, the entire panel acts as the drag handler, allowing dragging by clicking anywhere on the panel. The [`draggableHandle`](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout#draggablehandle) property can be used to restrict dragging to a specific element within the panel.

The following sample demonstrates customizing the dragging handler so the panel can be dragged only by its header.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/dashboard-layout/drag-handler-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/dashboard-layout/drag-handler-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dashboard-layout/drag-handler-cs1" %}

By default, dragging of panels is enabled in Dashboard Layout. It can be disabled using the help of [allowDragging](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout#allowdragging) API. Setting [allowDragging](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout#allowdragging) to false disables the dragging functionality.

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

> Refer to the [Vue Dashboard Layout](https://www.syncfusion.com/vue-components/vue-dashboard-layout) feature tour page for its groundbreaking feature representations. Also explore the [Vue Dashboard Layout example](https://ej2.syncfusion.com/vue/demos/#/material3/dashboard-layout/default.html) to knows how to present and manipulate data.