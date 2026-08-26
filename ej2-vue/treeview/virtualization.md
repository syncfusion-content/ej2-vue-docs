---
layout: post
title: Virtualization in Vue Tree View | Syncfusion
description: Learn how to improve Vue Tree View performance with UI virtualization by rendering visible nodes only and loading items dynamically on scroll.
control: Virtualization 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Virtualization in Vue Tree View

The TreeView control supports UI virtualization to enhance performance when handling a large amount of data. This feature optimizes rendering by initially gathering all data but only rendering a subset of it during the initial load. The remaining items are then loaded dynamically as the user scrolls within the TreeView container.

To enable virtualization, set the `enableVirtualization` property to **true** and define a fixed `height` for the TreeView container.

In the following sample, the `enableVirtualization` property is enabled.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treeview/virtualization-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treeview/virtualization-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
    
{% previewsample "page.domainurl/code-snippet/treeview/virtualization-cs1" %}

## Performance benefits

Virtualization provides the following performance benefits:

* **Reduced DOM elements**: Only visible nodes are rendered in the DOM, reducing memory consumption.

* **Faster initial load**: Large datasets load quickly as only a subset of nodes are rendered initially.

* **Smooth scrolling**: Dynamic loading ensures smooth scrolling experience without lag.

* **Lower CPU usage**: Rendering fewer elements reduces CPU consumption.

## Important notes

* The `height` property is required when virtualization is enabled.