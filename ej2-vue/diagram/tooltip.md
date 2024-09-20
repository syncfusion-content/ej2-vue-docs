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

In Graphical User Interface (GUI), the tooltip is a message that is displayed when mouse hovers over an element. The diagram provides tooltip support while dragging, resizing, rotating a node, and when the mouse hovers any diagram element.

## Default tooltip

By default, diagram displays a tooltip to provide the size, position, and angle related information while dragging, resizing, and rotating. The following images illustrate how the diagram displays the node information during an interaction.

| Drag | Resize | Rotate |
|---|---|---|
| ![ToolTip During Drag](images/Tooltip_img1.png) | ![ToolTip During Resize](images/Tooltip_img2.png) | ![ToolTip During Rotate](images/Tooltip_img3.png) |

## Common tooltip for all nodes and connectors

The diagram provides support to show tooltip when the mouse hovers over any node/connector.
To show tooltip on mouse over, the [`tooltip`](https://ej2.syncfusion.com/vue/documentation/api/diagram#tooltip) property of diagram model needs to be set with the tooltip [`content`](https://ej2.syncfusion.com/vue/documentation/api/diagram/diagramTooltip/#content) and [`position`](https://ej2.syncfusion.com/vue/documentation/api/diagram/diagramTooltip/#position) as shown in the following example.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/tooltip/tooltip-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/tooltip/tooltip-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/tooltip/tooltip-cs1" %}

### Disable tooltip at runtime

The tooltip on mouse over can be disabled by assigning the [`tooltip`](https://ej2.syncfusion.com/vue/documentation/api/diagram#tooltip) property as `null`. The following code example illustrates how to disable the mouse over tooltip at runtime.

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

## Tooltip for a specific node/connector

The tooltip can be customized for each node and connector. Remove the **InheritTooltip** option from the [`constraints`](https://ej2.syncfusion.com/vue/documentation/api/diagram#constraints) of that node/connector. The following code example illustrates how to customize the tooltip for individual elements.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/tooltip/tooltip-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/tooltip/tooltip-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/tooltip/tooltip-cs2" %}

## Tooltip for Ports

The tooltip feature has been implemented to support Ports, providing the ability to display information or descriptions when the mouse hovers over them.

To display tooltips on mouseover, set the desired tooltip [`content`](https://ej2.syncfusion.com/vue/documentation/api/diagram/diagramTooltip/#content) by utilizing the [`tooltip`](https://ej2.syncfusion.com/vue/documentation/api/diagram#tooltip) property.

Tooltips for Ports can be enabled or disabled using the [`PortConstraints`](https://ej2.syncfusion.com/vue/documentation/api/diagram/port#constraints-portconstraints) Tooltip property.


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

The following image illustrates how the diagram displays tooltips during an interaction with ports:

![Tooltip](../diagram/images/PortTooltip.gif)

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

## Tooltip template content

Any text or image can be added to the tooltip, by default. To customize the tooltip layout or to create your own visualized element on the tooltip, template can be used.

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

The diagram provides support to show tooltip around the node/connector that is hovered by the mouse. The tooltip can be aligned by using the [`position`](https://ej2.syncfusion.com/vue/documentation/api/diagram/diagramTooltip#position) property of the tooltip.
The [`relativeMode`](https://ej2.syncfusion.com/vue/documentation/api/diagram/diagramTooltip#relativemode) property of the tooltip defines whether the tooltip has to be displayed around the object or at the mouse position.

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

To display the tooltip at mouse position, need to set **mouse** option to the [`relativeMode`](https://ej2.syncfusion.com/vue/documentation/api/diagram/diagramTooltip#relativemode) property of the tooltip.
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

To animate the tooltip, a set of specific animation effects are available, and it can be controlled by using the [`animation`](https://ej2.syncfusion.com/vue/documentation/api/diagram/diagramTooltip#animation) property. The animation property also allows you to set delay, duration, and various other effects of your choice.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/tooltip/tooltip-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/tooltip/tooltip-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/tooltip/tooltip-cs6" %}

## Tooltip for Annotation

Tooltips can be added to annotations to display additional information on mouseover. 
To display tooltips on mouseover, set the desired tooltip text to the [`tooltip`](https://ej2.syncfusion.com/vue/documentation/api/diagram#tooltip) property of the annotation.
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