---
layout: post
title: Multiple segments in Vue Diagram component | Syncfusion®
description: Learn here how to create connectors with multiple segments in Syncfusion® Vue Diagram component of Syncfusion Essential® JS 2 and more.
control: Multiple segments 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Create multiple segments

Multiple segments can be defined one after another. To create a connector with multiple segments, define and add the segments to the [`segments`](https://ej2.syncfusion.com/vue/documentation/api/diagram/segments/) collection. The following code example illustrates how to create a connector with multiple segments.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/multipleSegment-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/multipleSegment-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors/multipleSegment-cs1" %}

## Undo/Redo support for connector segments

The Diagram control provides comprehensive undo and redo functionality for all connector segment operations. This includes reversible actions such as dragging, resizing, and rotating source or target nodes, as well as modifying segment points and endpoints.

Key undo/redo capabilities include:

* Modifying and adjusting segment points.
* Changing connector endpoints between nodes or ports.
* Performing node operations that affect connected segments.
* Adding, removing, or reordering segments.

This functionality ensures consistent editing behavior across all connector types and interactions, enabling users to experiment with complex routing configurations while retaining the ability to revert changes.

The following example demonstrates undo and redo functionality for connector segments:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/connectors-segundo/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/connectors-segundo/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors/connectors-segundo" %}