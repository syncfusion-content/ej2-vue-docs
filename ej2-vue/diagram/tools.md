---
layout: post
title: Tools in Vue Diagram component | Syncfusion
description: Learn here all about Tools in Syncfusion Vue Diagram component of Syncfusion Essential JS 2 and more.
control: Tools 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Tools in Vue Diagram component

## Drawing tools

Drawing tool allows you to draw any kind of node/connector during runtime by clicking and dragging on the diagram page.

## Shapes

To draw a shape, set the JSON of that shape to the drawType property of the diagram and activate the drawing tool by using the [`tool`](https://ej2.syncfusion.com/vue/documentation/api/diagram/#tool) property. The following code example illustrates how to draw a rectangle at runtime.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/diagram/Tools/shape-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/Tools/shape-cs1" %}

## Path

The following code example illustrates how to draw a path.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/diagram/Tools/path-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/Tools/path-cs1" %}

## Connectors

To draw connectors, set the JSON of the connector to the drawType property. The drawing [`tool`](https://ej2.syncfusion.com/vue/documentation/api/diagram/#tool) can be activated by using the tool property. The following code example illustrates how to draw a straight line connector.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/diagram/Tools/connector-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/Tools/connector-cs1" %}

## Text

Diagram allows you to create a textNode, when you click on the diagram page. The following code illustrates how to draw a text.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/diagram/Tools/text-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/Tools/text-cs1" %}

Once you activate the TextTool, perform label editing of a node/connector.

## Polygon shape

Diagram allows to create the polygon shape by clicking and moving the mouse at runtime on the diagram page.

The following code illustrates how to draw a polygon shape.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/diagram/Tools/polygon-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/Tools/polygon-cs1" %}

## Polyline Connector

Diagram allows to create the polyline segments with straight lines and angled vertices at the control points by clicking and moving the mouse at runtime on the diagram page.

The following code illustrates how to draw a polyline connector.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/diagram/Tools/polyline-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/Tools/polyline-cs1" %}

## Tool selection

There are some functionalities that can be achieved by clicking and dragging on the diagram surface. They are as follows.

* Draw selection rectangle: MultipleSelect tool
* Pan the diagram: Zoom pan
* Draw nodes/connectors: DrawOnce/DrawOnce

As all the three behaviors are completely different, you can achieve only one behavior at a time based on the tool that you choose. When more than one of those tools are applied, a tool is activated based on the precedence given in the following table.

|Precedence|Tools|Description|
|----------|-----|-----------|
|1st|ContinuesDraw|Allows you to draw the nodes or connectors continuously. Once it is activated, you cannot perform any other interaction in the diagram.|
|2nd|DrawOnce|Allows you to draw a single node or connector. Once you complete the DrawOnce action, SingleSelect, and MultipleSelect tools are automatically enabled.|
|3rd|ZoomPan|Allows you to pan the diagram. When you enable both the SingleSelect and ZoomPan tools, you can perform the basic interaction as the cursor hovers node/connector. Panning is enabled when cursor hovers the diagram.|
|4th|MultipleSelect|Allows you to select multiple nodes and connectors. When you enable both the MultipleSelect and ZoomPan tools, cursor hovers the diagram. When panning is enabled, you cannot select multiple nodes.|
|5th|SingleSelect|Allows you to select individual nodes or connectors.|
|6th|None|Disables all tools.|

Set the desired [`tool`](https://ej2.syncfusion.com/vue/documentation/api/diagram/#tool) to the tool property of the diagram model. The following code illustrates how to enable Zoom pan in the diagram

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/diagram/Tools/connector-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/Tools/connector-cs2" %}

## Events

[`elementDraw`](https://ej2.syncfusion.com/vue/documentation/api/diagram)  event is triggered when node or connector is drawn using drawing tool.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/diagram/Tools/connector-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/Tools/connector-cs3" %}

## Freehand Drawing

Diagram has support for free-hand drawing to draw anything on the diagram page independently. Free-hand drawing will be enabled by using the drawingObject property and setting its value to Freehand.

The following code illustrates how to draw a freehand drawing.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/diagram/Tools/connector-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/Tools/connector-cs4" %}
