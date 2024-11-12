---
layout: post
title: Appearence of a nodes in Vue Diagram component | Syncfusion
description: Learn here all about Nodes in Syncfusion Vue Diagram component of Syncfusion Essential JS 2 and more.
control: Appearence of nodes
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Appearence of a nodes in Vue Diagram control

## Common values to the node.

The [`getNodeDefaults`](https://ej2.syncfusion.com/vue/documentation/api/diagram/#getnodedefaults) property in the EJ2 Diagram control allows you to define default settings for nodes based on specific conditions or requirements.

The following code example shows how to use getNodeDefaults function.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/nodes/nCustomization-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/nodes/nCustomization-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/nodes/nCustomization-cs1" %}

N> The value we set in the getNodeDefaults has the higher priority in rendering.

## Appearance

### Apply style to the node

The appearance of a node can be customized by changing its [`fill`](https://ej2.syncfusion.com/vue/documentation/api/diagram/shapeStyleModel/#fill) color, [`strokeDashArray`](https://ej2.syncfusion.com/vue/documentation/api/diagram/shapeStyleModel/#strokedasharray), ['strokeWidth'](https://ej2.syncfusion.com/vue/documentation/api/diagram/shapeStyleModel/#strokewidth), ['strokeColor'](https://ej2.syncfusion.com/vue/documentation/api/diagram/shapeStyleModel/#strokecolor) and [`opacity`](https://ej2.syncfusion.com/vue/documentation/api/diagram/shapeStyleModel/#opacity). The [`visible`](https://ej2.syncfusion.com/vue/documentation/api/diagram/node/#visible) property of the node enables or disables the visibility of the node.

The following code illustrates how to customize the appearance of the shape.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/nodes/nCustomization-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/nodes/nCustomization-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/nodes/nCustomization-cs2" %}

### Apply gradient style to node

The [`gradient`](https://ej2.syncfusion.com/vue/documentation/api/diagram/gradientModel/) property of the node allows you to define and apply the gradient effect to that node.

The gradient stop property defines the color and a position, where the previous color transition ends and a new color transition starts.

The gradient stop’s opacity property defines the transparency level of the region.

There are two types of gradients as follows:

* Linear gradient

* Radial gradient

#### Linear gradient

* [`LinearGradient`](https://ej2.syncfusion.com/vue/documentation/api/diagram/lineargradientmodel/) defines a smooth transition between a set of colors (so-called stops) on a line.

* A linear gradient’s x1, y1, x2, y2 properties are used to define the position (relative to the node) of the rectangular region that needs to be painted.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/nodes/nCustomization-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/nodes/nCustomization-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/nodes/nCustomization-cs3" %}

#### Radial gradient

* [`RadialGradient`](https://ej2.syncfusion.com/vue/documentation/api/diagram/radialGradientModel/) defines a smooth transition between stops on a circle.

* A radial gradient’s cx, cy, fx, fy properties are used to define the position (relative to the node) of the outermost or the innermost circle of the radial gradient.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/nodes/nCustomization-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/nodes/nCustomization-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/nodes/nCustomization-cs4" %}


## Customize the style of node selector

### Customize the style of main node selector indicator

In diagram, multiple nodes can be selected.
While selecting multiple nodes, a highlighter will be rendered to indicate the selection of each nodes.
The border style of the first node in the multiple selection can be customized by using the className [`e-diagram-first-selection-indicator`].

Use the following CSS to customize the style of main node on multiple selection.

```css

 .e-diagram-first-selection-indicator{
   stroke-width: 5px;
   stroke: red;
   stroke-dasharray: 1,1;
  } 

```

## Apply rotate angle and corner radius to the node

- `Rotate angle`: The [`rotateAngle`](https://ej2.syncfusion.com/vue/documentation/api/diagram/node/#rotateangle) property allows you to rotate nodes within the diagram. It's particularly useful when you want to represent nodes from different perspectives or angles.

- `Corner radius`: The [`cornerRadius`](https://ej2.syncfusion.com/vue/documentation/api/diagram/basicShapeModel/#cornerradius) property allows you to round the corners of nodes in the diagram.
It adds a visual styling effect to the nodes, making them appear softer or more polished.


The following code shows how to set the rotate angle and corner radius for the node.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/nodes/nCustomization-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/nodes/nCustomization-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/nodes/nCustomization-cs5" %}

## Apply shadow effect to node

Diagram provides support to add [`shadow`](https://ej2.syncfusion.com/vue/documentation/api/diagram/node/#shadow) effect to a node that is disabled, by default. It can be enabled with the
constraints property of the node. The following code illustrates how to drop shadow.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/nodes/nCustomization-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/nodes/nCustomization-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/nodes/nCustomization-cs6" %}

### Customizing shadow effect of the node

The angle, distance, and opacity of the shadow can be customized with the shadow property of the node. The following code example illustrates how to customize shadow.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/nodes/nCustomization-cs7/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/nodes/nCustomization-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/nodes/nCustomization-cs7" %}


## Provide additional information to the node

The [`addInfo`](https://ej2.syncfusion.com/vue/documentation/api/diagram/node/#addinfo) property of the node allows you to maintain additional information to the node. You can specify either object or string value.

The following code shows how to set the AddInfo value.

``` javaScript

let addInfo = { type: 'Node', info: 'Rectangle Node' };
var nodes = [
  {
    // Position of the node
    offsetX: 400,
    offsetY: 250,
    //Additional informations about the node.
    addInfo: addInfo,
    // Size of the node
    width: 100,
    height: 100,
  },
];

```

## Constraints

The [`constraints`](https://ej2.syncfusion.com/vue/documentation/api/diagram/node/#constraints) property of the node allows you to enable/disable certain behaviors of the node. For more information about node constraints refer to the [`Node Constraints`](./constraints)

## Stack order

The nodes [`zIndex`](https://ej2.syncfusion.com/vue/documentation/api/diagram/node/#zindex) property specifies the stack order of the node. A node with greater stack order is always in front of a node with a lower stack order.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/nodes/nCustomization-cs8/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/nodes/nCustomization-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/nodes/nCustomization-cs8" %}

N> By default, the zIndex will be generated automatically based on the order of the diagram elements added to the diagram. The default value will be Number.MIN_VALUE.

## Pivot

Node rotation angle will be based on [`Pivot`](.https://ej2.syncfusion.com/vue/documentation/api/diagram/node/#pivot) values which range from 0 to 1 like offset values. By default, the Pivot values are set to X= 0.5 and Y=0.5.

The following table illustrates how pivot relates offset values with node boundaries.

| Pivot | Offset |
|-------- | -------- |
| (0.5,0.5)| offsetX and offsetY values are considered as the node’s center point. |
| (0,0) | offsetX and offsetY values are considered as the top-left corner of the node. |
| (1,1) | offsetX and offsetY values are considered as the bottom-right corner of the node. |

The following code illustrates how to change the `pivot` value.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/nodes/nCustomization-cs9/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/nodes/nCustomization-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/nodes/nCustomization-cs9" %}

## Get connected connector from node

Node has the InEdges and OutEdges read-only property. In this property, you can find what are all the connectors that are connected to the node, and then you can fetch these connectors by using the [`getObject`](https://ej2.syncfusion.com/vue/documentation/api/diagram/#getobject) method in the diagram.

```javascript

var node = {
    id: 'node1',
    // Position of the node
    offsetX: 450,
    offsetY: 100,
    // Size of the node
    width: 80,
    height: 50,
    style: { fill: '#6BA5D7', strokeColor: 'white' },
};
var node2 = {
    id: 'node2',
    // Position of the node
    offsetX: 350,
    offsetY: 200,
    // Size of the node
    width: 80,
    height: 50,
    style: { fill: '#6BA5D7', strokeColor: 'white' },
};
var node3 = {
    id: 'node3',
    // Position of the node
    offsetX: 450,
    offsetY: 200,
    // Size of the node
    width: 80,
    height: 50,
    style: { fill: '#6BA5D7', strokeColor: 'white' },
};
var node4 = {
    id: 'node4',
    // Position of the node
    offsetX: 550,
    offsetY: 200,
    // Size of the node
    width: 80,
    height: 50,
    style: { fill: '#6BA5D7', strokeColor: 'white' },
};
var connector = {
    id: 'connector1', sourceID: 'node1', targetID: 'node2', type: 'Orthogonal'
};
var connector2 = {
    id: 'connector2', sourceID: 'node1', targetID: 'node3', type: 'Orthogonal'
};
var connector3 = {
    id: 'connector3', sourceID: 'node1', targetID: 'node4', type: 'Orthogonal'
};

var diagram = new Diagram({
    width: '100%', height: 600, nodes: [node, node2, node3, node4],
    connectors: [connector, connector2, connector3]
    }, '#element');
diagram.getObject(diagram.nodes[0].outEdges[0]);
```