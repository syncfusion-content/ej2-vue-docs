---
layout: post
title: Virtualization in Vue Diagram | Syncfusion®
description: Speed up large diagrams in the Syncfusion® Vue Diagram by loading only the nodes and connectors that are visible in the current viewport.
control: Virtualization 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Virtualization in Vue Diagram

Virtualization is a technique to optimize the performance of diagrams, especially when working with larger diagrams

## Virtualization in Diagram

Virtualization optimizes the [Vue Diagram](https://www.syncfusion.com/vue-components/vue-diagram) performance by loading only the diagramming objects within the visible area, or ViewPort, of the Scroll Viewer. This means that only the nodes and connectors that are currently in view are loaded, while the remaining objects are loaded dynamically as they come into view.

This feature significantly enhances performance, especially when working with diagrams containing a large number of nodes and connectors. By reducing the number of objects that need to be processed at any given time, virtualization ensures smoother interactions, such as loading and dragging items within the diagram.

To enable virtualization in a diagram, you need to include the virtualization constraint in the diagram's constraints. For more information, refer to the  [`diagram constraints`](https://ej2.syncfusion.com/vue/documentation/diagram/constraints#diagram-constraints).

The following code example demonstrates how to enable Virtualization mode in the diagram:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/virtualization/virtualization-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/virtualization/virtualization-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/virtualization/virtualization-cs1" %}