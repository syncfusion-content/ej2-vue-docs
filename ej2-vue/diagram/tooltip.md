---
layout: post
title: Tooltip in Vue Diagram component | Syncfusion
description: Learn here all about Tooltip in Syncfusion Vue Diagram component of Syncfusion Essential JS 2 and more.
control: Tooltip 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Tooltip in Vue Diagram component

<!-- markdownlint-disable MD010 -->

In a Graphical User Interface (GUI), a tooltip is a message that appears when the mouse hovers over an element. The diagram control provides tooltip support while dragging, resizing, rotating a node, and when the mouse hovers over any diagram element.

## Default tooltip

By default, the diagram displays a tooltip showing size, position, and angle information while dragging, resizing, or rotating a node. The following images illustrate how the diagram displays node information during these interactions.

| Drag | Resize | Rotate |
|---|---|---|
| ![ToolTip During Drag](images/Tooltip_img1.png) | ![ToolTip During Resize](images/Tooltip_img2.png) | ![ToolTip During Rotate](images/Tooltip_img3.png) |

### Disable default tooltip

The default tooltip that appears while interacting with nodes can be disabled by removing the tooltip constraints from the [`selectorConstraints`](https://ej2.syncfusion.com/vue/documentation/api/diagram/selectorConstraints/) of the [`selectedItems`](https://ej2.syncfusion.com/vue/documentation/api/diagram/selectorModel/) property of the diagram.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/tooltip/tooltip-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/tooltip/tooltip-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/tooltip/tooltip-cs1" %}

## Tooltip for a specific node/connector

The tooltip can be customized for each node and connector. Remove the **InheritTooltip** option from the [`constraints`](https://ej2.syncfusion.com/vue/documentation/api/diagram/#constraints) of that node/connector. The following code example illustrates how to customize the tooltip for individual elements.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/tooltip/inheritTooltip-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/tooltip/inheritTooltip-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/tooltip/inheritTooltip-cs1" %}

## Inherit diagram tooltip

The diagram supports inheriting the diagram tooltip when the mouse hovers over any node or connector. To show a tooltip on mouse over, set the diagram's [`tooltip`](https://ej2.syncfusion.com/vue/documentation/api/diagram/#tooltip) property with the tooltip [`content`](https://ej2.syncfusion.com/vue/documentation/api/diagram/diagramTooltip/#content) and [`position`](https://ej2.syncfusion.com/vue/documentation/api/diagram/diagramTooltip/#position). Ensure that the nodes and connectors have their constraints set to **InheritTooltip**, as shown in the following example.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/tooltip/tooltip-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/tooltip/tooltip-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/tooltip/tooltip-cs2" %}

### Disable tooltip at runtime

The tooltip on mouse over can be disabled by setting the diagram's [`tooltip`](https://ej2.syncfusion.com/vue/documentation/api/diagram/#tooltip) property to `null`. The following code example illustrates how to disable the mouse over tooltip at runtime.

```javascript
 export default {
        name: 'app'
        data () {
            return {
                width: "100%",
                height: "350px",
                tooltip: null
            }
        }
    }
```

## Tooltip for Ports

The tooltip feature has been implemented to support Ports, providing the ability to display information or descriptions when the mouse hovers over them.

To display tooltips on mouseover, set the desired tooltip [`content`](https://ej2.syncfusion.com/vue/documentation/api/diagram/diagramTooltip/#content) by utilizing the [`tooltip`](https://ej2.syncfusion.com/vue/documentation/api/diagram/#tooltip) property.

Tooltips for Ports can be enabled or disabled using the [`PortConstraints`](https://ej2.syncfusion.com/vue/documentation/api/diagram/port/#constraints) Tooltip property.

```ts
let ports: [{
        offset: {x: 1,y: 0.5},
        tooltip: {content: 'Port Tootip'},
        
        //enable Port Tooltip Constraints
        constraints: PortConstraints.Default | PortConstraints.ToolTip,
        
        //disable Port Tooltip Constraints
        constraints: PortConstraints.Default ~& PortConstraints.ToolTip
    }]
```

Dynamic modification of tooltip content is supported, allowing you to change the displayed tooltip content during runtime.

```ts
{
    //change tooltip content at run time
    diagram.nodes[0].ports[0].tooltip.content = 'New Tooltip Content';
    diagram.databind;
}
```

Here, the code provided below demonstrates the port tooltip Interaction.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/tooltip/tooltip-cs7/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/tooltip/tooltip-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/tooltip/tooltip-cs7" %}

The following image illustrates how the diagram displays tooltips during an interaction with ports:

![Tooltip](../diagram/images/PortTooltip.gif)

## Tooltip template content

The tooltip template content allows you to customize the tooltip by using HTML templates. This means you can define the structure and style of the tooltip using HTML, providing greater flexibility and control over its appearance. By leveraging HTML templates, you can include rich content such as formatted text, images, and other HTML elements within the tooltip, enhancing the user experience with more informative and visually appealing tooltips.

The following code example illustrates how to add formatted HTML content to the tooltip.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/tooltip/tooltip-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/tooltip/tooltip-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/tooltip/tooltip-cs3" %}

## Tooltip alignments

### Tooltip relative to object

The diagram supports displaying a tooltip around the node or connector that is hovered over by the mouse. The tooltip's alignment can be adjusted using the [`position`](https://ej2.syncfusion.com/vue/documentation/api/diagram/diagramTooltip/#position) property.  The [`relativeMode`](https://ej2.syncfusion.com/vue/documentation/api/diagram/diagramTooltip/#relativemode) property specifies whether the tooltip should be displayed around the object or at the mouse position.

The following code example illustrates how to position the tooltip around object.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/tooltip/tooltip-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/tooltip/tooltip-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/tooltip/tooltip-cs4" %}

### Tooltip relative to mouse position

To display the tooltip at the mouse position, set the **mouse** option in the [`relativeMode`](https://ej2.syncfusion.com/vue/documentation/api/diagram/diagramTooltip/#relativemode) property of the tooltip.

The following code example illustrates how to show tooltip at mouse position.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/tooltip/tooltip-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/tooltip/tooltip-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/tooltip/tooltip-cs5" %}

## Tooltip animation

To animate the tooltip, you can use a range of animation effects controlled by the [`animation`](https://ej2.syncfusion.com/vue/documentation/api/diagram/diagramTooltip/#animation) property. This property allows you to customize the delay, duration, and various other effects according to your preferences.

Refer the following sample where we used zoomIn animation for tooltip open and zoomOut animation for tooltip close with delay and duration. 

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/tooltip/tooltip-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/tooltip/tooltip-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/tooltip/tooltip-cs6" %}

## Sticky tooltip

A sticky tooltip will remain visible even after you move the mouse away from the node or connector. You can activate this feature by setting the [`isSticky`](https://ej2.syncfusion.com/vue/documentation/api/diagram/diagramTooltipModel/#issticky) property of the tooltip. 

The following example shows how to render sticky tooltip. 

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/tooltip/StickyTooltip-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/tooltip/StickyTooltip-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/tooltip/StickyTooltip-cs1" %}

## Hide tooltip pointer

The [`showTipPointer`](https://ej2.syncfusion.com/vue/documentation/api/diagram/diagramTooltipModel/#showtippointer) property allows to control the visibility of tooltip pointer. By default, the `showTipPointer` is set as true.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/tooltip/ShowHidePointer-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/tooltip/ShowHidePointer-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/tooltip/ShowHidePointer-cs1" %}

## Tooltip size

By default, the size of the tooltip is calculated based on its content. If you want to customize the size, you can use the  [`width`](https://ej2.syncfusion.com/vue/documentation/api/diagram/diagramTooltipModel/#width) and [`height`](https://ej2.syncfusion.com/vue/documentation/api/diagram/diagramTooltipModel/#height) properties of the tooltip.

The following code example shows how to set the size for the tooltip:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/tooltip/tooltipSize-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/tooltip/tooltipSize-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/tooltip/tooltipSize-cs1" %}

## Show/Hide tooltip at runtime

You can show or hide the tooltip dynamically using a button click with the [`showTooltip`](https://ej2.syncfusion.com/vue/documentation/api/diagram/#showtooltip) and [`hideTooltip`](https://ej2.syncfusion.com/vue/documentation/api/diagram/#hidetooltip) methods of the diagram. This allows you to control the tooltip visibility programmatically rather than relying on user hover actions. In some cases, you may want to display the tooltip without requiring the user to hover over the object.

The following example demonstrates how to show or hide the tooltip at runtime:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/tooltip/ShowhideTooltip-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/tooltip/ShowhideTooltip-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/tooltip/ShowhideTooltip-cs1" %}

## Tooltip for Annotation

Tooltips can be added to annotations to display additional information on mouseover. 
To display tooltips on mouseover, set the desired tooltip text to the [`tooltip`](https://ej2.syncfusion.com/vue/documentation/api/diagram/#tooltip) property of the annotation.
Tooltips for Annotations can be enabled or disabled by setting the [`AnnotationConstraints`](https://ej2.syncfusion.com/vue/documentation/api/diagram/annotationConstraints) property as [`Tooltip`](https://ej2.syncfusion.com/vue/documentation/api/diagram/annotationConstraints/). 

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/labels/AnnotationTooltip-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/labels/AnnotationTooltip-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/labels/AnnotationTooltip-cs1" %}