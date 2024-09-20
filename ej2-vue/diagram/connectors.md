---
layout: post
title: Connectors in Vue Diagram component | Syncfusion
description: Learn here all about Connectors in Syncfusion Vue Diagram component of Syncfusion Essential JS 2 and more.
control: Connectors 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Connectors in Vue Diagram component

Connectors are objects used to create link between two points, nodes or ports to represent the relationships between them.

## Create Connector

Connector can be created by defining the source and target point of the connector. The path to be drawn can be defined with a collection of segments. To explore the properties of a [`connector`](https://ej2.syncfusion.com/vue/documentation/api/diagram/connector), refer to [`Connector Properties`](https://ej2.syncfusion.com/vue/documentation/api/diagram/connector).

To create and customize the connectors easily in the EJ2 Vue Diagram component, refer to the below video link.

{% youtube "youtube:https://www.youtube.com/embed/qJJRdaST_iI" %}

## Add connectors through connectors collection

* The [`sourcePoint`](https://ej2.syncfusion.com/vue/documentation/api/diagram/connector#sourcepoint-PointModel) and [`targetPoint`](https://ej2.syncfusion.com/vue/documentation/api/diagram/connector#targetpoint-PointModel) properties of connector allow you to define the end points of a connector.

The following code example illustrates how to add a connector through connector collection.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/Connectors-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/Connectors-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors/Connectors-cs1" %}

## Add connector at run time**

* Connectors can be added at runtime by using public method, `diagram.add` and can be removed at runtime by using public method, `diagram.remove`.

The following code example illustrates how to add connector at runtime.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/Connectorsatruntime-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/Connectorsatruntime-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors/Connectorsatruntime-cs1" %}

## Add collection of connectors at runtime

* The collection of connectors can be dynamically added using 'addElements' method.Each time an element is added to the diagram canvas, the 'collectionChange' event will be triggered.

The following code illustrates how to add a connectors collection at runtime.
{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/connectorCollection-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/connectorCollection-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors/connectorCollection-cs1" %}

## Connectors from palette

* Connectors can be predefined and added to the symbol palette. You can drop those connectors into the Diagram, when required.

For more information about adding connectors from symbol palette, refer to [`Symbol Palette`].

## Draw connectors

Connectors can be interactively drawn by clicking and dragging on the Diagram surface by using [`drawingObject`]. For more information about drawing connectors, refer to [`Draw Connectors`](https://ej2.syncfusion.com/vue/documentation/api/diagram#drawingObject-ConnectorModel).

## Update Connector at runtime

Various Connector properties such as `sourcePoint`,`targetPoint`,`style`,`sourcePortID`,`targetPortID` etc can be update at the run time .

* The following code example illustrates how to update a connector's source point,target point,styles properties  at runtime.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/Connectorsupdate-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/Connectorsupdate-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors/Connectorsupdate-cs1" %}

## Connect nodes

* The [`sourceID`](https://ej2.syncfusion.com/vue/documentation/api/diagram/connector#sourceid-string) and [`targetID`](https://ej2.syncfusion.com/vue/documentation/api/diagram/connector#targetid-string) properties allow to define the nodes to be connected.
* The [`connectorSpacing`](https://ej2.syncfusion.com/vue/documentation/api/diagram/connector#connectorSpacing-number) property allows you to define the distance between the source node and the connector. It is the minimum distance the connector will re-rout or the new segment will create.

* The following code example illustrates how to connect two nodes.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/ConnectNode-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/ConnectNode-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors/ConnectNode-cs1" %}

* When you remove NodeConstraints InConnect from Default, the node accepts only an outgoing connection to dock in it. Similarly, when you remove NodeConstraints OutConnect from Default, the node accepts only an incoming connection to dock in it.

* When you remove both InConnect and OutConnect NodeConstraints from Default, the node restricts connector to establish connection in it.

* The following code illustrates how to disable InConnect constraints.

```ts

//Initialize diagram
let diagram: Diagram = new Diagram({
     nodes:[
         {
            id: 'node', width: 100, height: 100, offsetX: 100, offsetY: 150,
            shape: { type: 'Basic', shape: 'Rectangle' },
            //Disable InConnect constraints
            constraints: NodeConstraints.Default & ~NodeConstraints.InConnect,
         }
     ]
});
diagram.appendTo('#diagram');

```

## Connections with ports

The [`sourcePortID`](https://ej2.syncfusion.com/vue/documentation/api/diagram/connector#sourceportid-string) and [`targetPortID`](https://ej2.syncfusion.com/vue/documentation/api/diagram/connector#targetportid-string) properties allow to create connections between some specific points of source/target nodes.

The following code example illustrates how to create port to port connections.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/Connectorsportupdate-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/Connectorsportupdate-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors/Connectorsportupdate-cs1" %}

similarly we can change the [`sourcePortID`] or [`targetPortID`]  at the run time by the changing the port [`sourcePortID`](https://ej2.syncfusion.com/vue/documentation/api/diagram/connector#sourceportid-string) or [`targetPortID`](https://ej2.syncfusion.com/vue/documentation/api/diagram/connector#targetportid-string)

The following code example illustrates how to create port to port connections.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/ConnectorsSegments-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/ConnectorsSegments-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors/ConnectorsSegments-cs1" %}

* When you set PortConstraints to InConnect, the port accepts only an incoming connection to dock in it. Similarly, when you set PortConstraints to OutConnect, the port accepts only an outgoing connection to dock in it.

* When you set PortConstraints to None, the port restricts connector to establish connection in it.

```ts

//Initialize diagram
let diagram: Diagram = new Diagram({
     nodes:[
         {
            id: 'node', width: 100, height: 100, offsetX: 100, offsetY: 150,
            shape: { type: 'Basic', shape: 'Rectangle' },
            ports: [
             //Enable portConstraints Inconnect
             { id: 'port', height: 10, width: 10, offset: { x: 1, y: 0.5 }, constraints: PortConstraints.InConnect },
           ]
         }
     ]
});
diagram.appendTo('#diagram');

```

## Segments

The path of the connector is defined with a collection of segments. There are three types of segments.

## Straight

To create a straight line, you should specify the [`type`](https://ej2.syncfusion.com/vue/documentation/api/diagram/segments) of the segment as “straight” and add a straight segment to [`segments`](https://ej2.syncfusion.com/vue/documentation/api/diagram/connector#segments) collection and need to specify [`type`](https://ej2.syncfusion.com/vue/documentation/api/diagram/connector#type-Segments) for the connector. The following code example illustrates how to create a default straight segment.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/ConnectorsSegmentsPoints-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/ConnectorsSegmentsPoints-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors/ConnectorsSegmentsPoints-cs1" %}

The [`point`](https://ej2.syncfusion.com/vue/documentation/api/diagram/straightSegment#point-PointModel) property of straight segment allows you to define the end point of it. The following code example illustrates how to define the end point of a straight segment.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/ConnectorsOrthoSegments-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/ConnectorsOrthoSegments-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors/ConnectorsOrthoSegments-cs1" %}

## Orthogonal

Orthogonal segments are used to create segments that are perpendicular to each other.

Set the segment [`type`](https://ej2.syncfusion.com/vue/documentation/api/diagram/segments) as “orthogonal” to create a default orthogonal segment and need to specify [`type`](https://ej2.syncfusion.com/vue/documentation/api/diagram/connector#type-Segments). The following code example illustrates how to create a default orthogonal segment.
* Multiple segments can be defined one after another. To create a connector with multiple segments, define and add the segments to [`connector.segments`](https://ej2.syncfusion.com/vue/documentation/api/diagram/connector#segments) collection. The Following code example illustrates how to create a connector with multiple segments.
* The property [`maxSegmentThumb`](https://ej2.syncfusion.com/vue/documentation/api/diagram/connector#maxSegmentThumb) is used to limit the segment thumb in the connector.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/ConnectorsOverlapping-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/ConnectorsOverlapping-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors/ConnectorsOverlapping-cs1" %}

The [`length`](https://ej2.syncfusion.com/vue/documentation/api/diagram/orthogonalSegment) and [`direction`](https://ej2.syncfusion.com/vue/documentation/api/diagram/orthogonalSegment) properties allow to define the flow and length of segment. The following code example illustrates how to create customized orthogonal segments.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/ConnectorsBezier-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/ConnectorsBezier-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors/ConnectorsBezier-cs1" %}

>Note: We need mention the segment type as same as what we mentioned in connector type. There should be no contradiction between connector type and segment type.

## Avoid overlapping

Orthogonal segments are automatically re-routed, in order to avoid overlapping with the source and target nodes. The following preview illustrate how orthogonal segments are re-routed.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/ConnectorsBezierPoints-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/ConnectorsBezierPoints-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors/ConnectorsBezierPoints-cs1" %}

## How to customize Orthogonal Segment Thumb Shape

The orthogonal connector has a number of segments in between the source and the target point. The segments are rendered with the default shape rhombus. Now, the option has been provided to change the segment thumb shape using the [`segmentThumbShape`](https://ej2.syncfusion.com/vue/documentation/api/diagram#segmentThumbShape-SegmentThumbShapes) property. The predefined shapes provided are as follows:
* Rhombus
* Square
* Rectangle
* Ellipse
* Arrow
* Diamond
* OpenArrow
* Circle
* Fletch
* OpenFetch
* IndentedArrow
* OutdentedArrow
* DoubleArrow

 You can customize the style of the thumb shape by overriding the class e-orthogonal-thumb.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/ConnectorsThumbshape-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/ConnectorsThumbshape-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors/ConnectorsThumbshape-cs1" %}

![Segment Thumb Shape](./images/thumbshape.png)

Use the following CSS to customize the segment thumb shape.

```scss

.e-orthogonal-thumb {
    fill: rgb(126, 190, 219);
     stroke: #24039e;
    stroke-width: 3px;
   }

```

## How to customize Orthogonal Segment Thumb Size

Orthogonal segment thumbs default to size 10. This can be adjusted globally or for individual connectors using the [`segmentThumbSize`](https://ej2.syncfusion.com/vue/documentation/api/diagram#segmentThumbSize-SegmentThumbSize) property.
To change the thumb size for all Orthogonal connectors, set the [`segmentThumbSize`](https://ej2.syncfusion.com/vue/documentation/api/diagram#segmentThumbSize-SegmentThumbSize) property in the diagram’s model.
To customize the thumb size for a specific connector, disable the [`InheritSegmentThumbSize`](https://ej2.syncfusion.com/vue/documentation/api/diagram/connectorConstraints) constraint, then set the desired [`segmentThumbSize`](https://ej2.syncfusion.com/vue/documentation/api/diagram#segmentThumbSize-SegmentThumbSize).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/ConnectorsOrthoSegmentsSize-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/ConnectorsOrthoSegmentsSize-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors/ConnectorsOrthoSegmentsSize-cs1" %}

## Bezier

Bezier segments are used to create curve segments and the curves are configurable either with the control points or with vectors.

To create a bezier segment, the [`segment.type`](https://ej2.syncfusion.com/vue/documentation/api/diagram/segments) is set as `bezier` and need to specify [`type`](https://ej2.syncfusion.com/vue/documentation/api/diagram/connector#type-Segments) for the connector. The following code example illustrates how to create a default Bezier segment.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/ConnectorsBezier-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/ConnectorsBezier-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors/ConnectorsBezier-cs2" %}

The [`point1`](https://ej2.syncfusion.com/vue/documentation/api/diagram/bezierSegment#point1-PointModel) and [`point2`](https://ej2.syncfusion.com/vue/documentation/api/diagram/bezierSegment#point2-PointModel) properties of bezier segment enable you to set the control points. The following code example illustrates how to configure the Bezier segments with control points.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/ConnectorsBezierPoints-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/ConnectorsBezierPoints-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors/ConnectorsBezierPoints-cs2" %}

The [`vector1`](https://ej2.syncfusion.com/vue/documentation/api/diagram/bezierSegment#vector1-VectorModel) and [`vector2`](https://ej2.syncfusion.com/vue/documentation/api/diagram/bezierSegment#vector2-VectorModel) properties of bezier segment enable you to define the vectors. The following code illustrates how to configure a bezier curve with vectors.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/ConnectorsBezierVector-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/ConnectorsBezierVector-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors/ConnectorsBezierVector-cs1" %}

## Avoid overlapping with bezier

By default, when there are no segments defined for a bezier connector, the bezier segments will be created automatically and routed in such a way that avoids overlapping with the source and target nodes.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes' :connectors='connectors'
      :getNodeDefaults='getNodeDefaults' :getConnectorDefaults='getConnectorDefaults'>
    </ejs-diagram>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { DiagramComponent as EjsDiagram, ConnectorConstraints } from '@syncfusion/ej2-vue-diagrams';

const nodes = [{
  id: 'Start',
  offsetX: 250,
  offsetY: 150,
  annotations: [{ content: 'Start' }]
},
{
  id: 'End',
  offsetX: 450,
  offsetY: 200,
  annotations: [{ content: 'End' }]
}];

const connectors = [{
  id: "connector1",
  style: {
    strokeColor: '#6BA5D7',
    fill: '#6BA5D7',
    strokeWidth: 2
  },
  targetDecorator: { shape: 'None' },
  // ID of the source and target nodes
  sourceID: "Start",
  targetID: "End",
  type: 'Bezier'
}];

const width = "100%";
const height = "600px";
const getNodeDefaults = (node) => {
  node.height = 100;
  node.width = 100;
  node.shape = { type: 'Basic', shape: 'Rectangle' }
  node.style.fill = '#6BA5D7';
  node.style.strokeColor = 'white';
  return node;
}
const getConnectorDefaults = (connector) => {
  connector.constraints = ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb;
}

provide('diagram', [ConnectorEditing]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes' :connectors='connectors'
      :getNodeDefaults='getNodeDefaults' :getConnectorDefaults='getConnectorDefaults'></ejs-diagram>
  </div>
</template>
<script>
import { DiagramComponent, ConnectorEditing, ConnectorConstraints } from '@syncfusion/ej2-vue-diagrams';

let nodes = [{
  id: 'Start',
  offsetX: 250,
  offsetY: 150,
  annotations: [{ content: 'Start' }]
},
{
  id: 'End',
  offsetX: 450,
  offsetY: 200,
  annotations: [{ content: 'End' }]
}];

let connectors = [{
  id: "connector1",
  style: {
    strokeColor: '#6BA5D7',
    fill: '#6BA5D7',
    strokeWidth: 2
  },
  targetDecorator: { shape: 'None' },
  // ID of the source and target nodes
  sourceID: "Start",
  targetID: "End",
  type: 'Bezier'
}];

export default {
  name: 'App',
  components: {
    'ej2-diagram': DiagramComponent
  },
  data() {
    return {
      width: "100%",
      height: "600px",
      nodes: nodes,
      connectors: connectors,
      getNodeDefaults: (node) => {
        node.height = 100;
        node.width = 100;
        node.shape = { type: 'Basic', shape: 'Rectangle' }
        node.style.fill = '#6BA5D7';
        node.style.strokeColor = 'white';
        return node;
      },
      getConnectorDefaults: (connector) => {
        connector.constraints = ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb;
      }
    }
  },
  provide: {
    diagram: [ConnectorEditing]
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

Also, the intermediate point of two adjacent bezier segments can be edited interactively based on the bezierSettings.segmentEditOrientation property of the connector class.

### How to interact with the bezier segments efficiently

While interacting with multiple bezier segments, maintain their control points at the same distance and angle by using the bezierSettings.smoothness property of the connector class.

| BezierSmoothness value | Description                                                                                                           |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------- |
| SymmetricDistance      | Both control points of adjacent segments will be at the same distance when any one of them is editing.                |
| SymmetricAngle         | Both control points of adjacent segments will be at the same angle when any one of them is editing.                   |
| Default                | Both control points of adjacent segments will be at the same angle and same distance when any one of them is editing. |
| None                   | Segment’s control points are interacted independently from each other.                                                |

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes' :connectors='connectors'
      :getNodeDefaults='getNodeDefaults' :getConnectorDefaults='getConnectorDefaults'>
    </ejs-diagram>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { DiagramComponent as EjsDiagram, ConnectorEditing, ConnectorConstraints } from '@syncfusion/ej2-vue-diagrams';

let nodes = [{
  id: 'Start',
  offsetX: 250,
  offsetY: 150,
  annotations: [{ content: 'Start' }],
  ports: [{
    id: 'StartPort',
    visibility: PortVisibility.Visible,
    shape: 'Circle',
    offset: { x: 1, y: 0.5 },
    style: { strokeColor: '#366F8C', fill: '#366F8C' }
  }]
},
{
  id: 'End',
  offsetX: 450,
  offsetY: 200,
  annotations: [{ content: 'End' }],
  ports: [{
    id: 'EndPort',
    visibility: PortVisibility.Visible,
    shape: 'Circle',
    offset: { x: 0, y: 0.5 },
    style: { strokeColor: '#366F8C', fill: '#366F8C' }
  }]
}];

let connectors = [{
  id: "connector1",
  style: {
    strokeColor: '#6BA5D7',
    fill: '#6BA5D7',
    strokeWidth: 2
  },
  targetDecorator: { shape: 'None' },
  // ID of the source and target nodes
  sourceID: "Start",
  targetID: "End",
  type: 'Bezier',
  // Configuring settings for bezier interactions
  bezierSettings: { smoothness: BezierSmoothness.SymmetricAngle }
}];

const width = "100%";
const height = "600px";
const getNodeDefaults = (node) => {
  node.height = 100;
  node.width = 100;
  node.shape = { type: 'Basic', shape: 'Rectangle' }
  node.style.fill = '#6BA5D7';
  node.style.strokeColor = 'white';
  return node;
}
const getConnectorDefaults = (connector) => {
  connector.constraints = ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb;
}
provide('diagram', [ConnectorEditing]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-diagram id="diagram" :width='width' :height='height' :nodes='nodes' :connectors='connectors'
      :getNodeDefaults='getNodeDefaults' :getConnectorDefaults='getConnectorDefaults'></ejs-diagram>
  </div>
</template>
<script>

import { DiagramComponent, Diagram, NodeModel, ConnectorModel, ConnectorEditing, ConnectorConstraints } from '@syncfusion/ej2-vue-diagrams';
Diagram.Inject(ConnectorEditing);

let nodes = [{
  id: 'Start',
  offsetX: 250,
  offsetY: 150,
  annotations: [{ content: 'Start' }],
  ports: [{
    id: 'StartPort',
    visibility: PortVisibility.Visible,
    shape: 'Circle',
    offset: { x: 1, y: 0.5 },
    style: { strokeColor: '#366F8C', fill: '#366F8C' }
  }]
},
{
  id: 'End',
  offsetX: 450,
  offsetY: 200,
  annotations: [{ content: 'End' }],
  ports: [{
    id: 'EndPort',
    visibility: PortVisibility.Visible,
    shape: 'Circle',
    offset: { x: 0, y: 0.5 },
    style: { strokeColor: '#366F8C', fill: '#366F8C' }
  }]
}];
let connectors = [{
  id: "connector1",
  style: {
    strokeColor: '#6BA5D7',
    fill: '#6BA5D7',
    strokeWidth: 2
  },
  targetDecorator: { shape: 'None' },
  // ID of the source and target nodes
  sourceID: "Start",
  targetID: "End",
  type: 'Bezier',
  // Configuring settings for bezier interactions
  bezierSettings: { smoothness: BezierSmoothness.SymmetricAngle }
}];

export default {
  name: 'App',
  components: {
    'ejs-diagram': DiagramComponent
  },
  data() {
    return {
      width: "100%",
      height: "600px",
      nodes: nodes,
      connectors: connectors,
      getNodeDefaults: (node) => {
        node.height = 100;
        node.width = 100;
        node.shape = { type: 'Basic', shape: 'Rectangle' }
        node.style.fill = '#6BA5D7';
        node.style.strokeColor = 'white';
        return node;
      },
      getConnectorDefaults: (connector) => {
        connector.constraints = ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb;
      }
    }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

Also, the visibility of control points can be controlled using the bezierSettings.controlPointsVisibility property of the connector class.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/ConnectorBezierAvoidOverlapping-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/ConnectorBezierAvoidOverlapping-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors/ConnectorBezierAvoidOverlapping-cs1" %}

## How to customize Bezier Segment Thumb Size

Bezier segment thumbs default to size 10. This can be adjusted globally or for individual connectors using the [`segmentThumbSize`](https://ej2.syncfusion.com/vue/documentation/api/diagram#segmentThumbSize-SegmentThumbSize) property.
To change the thumb size for all Bezier connectors, set the [`segmentThumbSize`](https://ej2.syncfusion.com/vue/documentation/api/diagram#segmentThumbSize-SegmentThumbSize) property in the diagram’s model.
To customize the thumb size for a specific connector, disable the [`InheritSegmentThumbSize`](https://ej2.syncfusion.com/vue/documentation/api/diagram/connectorConstraints) constraint, then set the desired [`segmentThumbSize`](https://ej2.syncfusion.com/vue/documentation/api/diagram#segmentThumbSize-SegmentThumbSize).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/ConnectorsBezierSegmentsSize-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/ConnectorsBezierSegmentsSize-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors/ConnectorsBezierSegmentsSize-cs1" %}

## Decorator

* Start and end points of a connector can be decorated with some customizable shapes like arrows, circles, diamond or path. You can decorate the connection end points with the [`sourceDecorator`](https://ej2.syncfusion.com/vue/documentation/api/diagram/connector#sourcedecorator-DecoratorModel) and [`targetDecorator`](https://ej2.syncfusion.com/vue/documentation/api/diagram/connector#targetdecorator-DecoratorModel)properties of connector.

* The [`shape`](https://ej2.syncfusion.com/vue/documentation/api/diagram/decoratorShapes) property of `sourceDecorator` allows to define the shape of the decorators. Similarly, the [shape](https://ej2.syncfusion.com/vue/documentation/api/diagram/decoratorShapes) property of `targetDecorator` allows to define the shape of the decorators.

* To create custom shape for source decorator, use [`pathData`](https://ej2.syncfusion.com/vue/documentation/api/diagram/decorator#pathdata-string) property. similarly, to create custom shape for target decorator, use [`pathData`](https://ej2.syncfusion.com/vue/documentation/api/diagram/decorator#pathData-string) property.

* The following code example illustrates how to create decorators of various shapes.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/ConnectorsDecorator-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/ConnectorsDecorator-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors/ConnectorsDecorator-cs1" %}

## Padding

Padding is used to leave the space between the Connector's end point and the object to where it is connected.

* The [`sourcePadding`](https://ej2.syncfusion.com/vue/documentation/api/diagram/connector#sourcepadding) property of connector defines space between the source point and the source node of the connector.

* The [`targetPadding`](https://ej2.syncfusion.com/vue/documentation/api/diagram/connector#targetpadding) property of connector defines space between the end point and the target node of the connector.

* The following code example illustrates how to leave space between the connection end points and source and target nodes.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/ConnectNode-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/ConnectNode-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors/ConnectNode-cs2" %}

## Hit padding

* The [`hitPadding`](../api/diagram/connector#hitpadding) property enables you to define the clickable area around the connector path.The default value for hitPadding is 10.

* The following code example illustrates how to specify hit padding for connector.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/ConnectorHitPadding-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/ConnectorHitPadding-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors/ConnectorHitPadding-cs1" %}

## Flip

The diagram Provides support to flip the connector. The [`flip`](https://ej2.syncfusion.com/vue/documentation/api/diagram/connector#flip) is performed to give the mirrored image of the original element.

The flip types are as follows:

* HorizontalFlip
 [`Horizontal`](https://ej2.syncfusion.com/vue/documentation/api/diagram/flipDirection) is used to interchange the connector source and target x points.

* VerticalFlip
[`Vertical`](https://ej2.syncfusion.com/vue/documentation/api/diagram/flipDirection) is used to interchange the connector source and target y points.

* Both
[`Both`](https://ej2.syncfusion.com/vue/documentation/api/diagram/flipDirection) is used to interchange the source point as target point and target point as source point

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/ConnectorsDecorator-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/ConnectorsDecorator-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors/ConnectorsDecorator-cs2" %}

>Note: The flip is not applicable when the connectors connect in nodes

## Bridging

Line Bridging creates a bridge for lines to smartly cross over other lines, at points of intersection. By default [`bridgeDirection`](https://ej2.syncfusion.com/vue/documentation/api/diagram#bridgeDirection-BridgeDirection) is set to top. Depending upon the direction given bridging direction appears. Bridging can be enabled/disabled either with the [`connector.constraints`] or [`diagram.constraints`]. The following code example illustrates how to enable line bridging.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/ConnectorsBridging-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/ConnectorsBridging-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors/ConnectorsBridging-cs1" %}

>Note: We Need to inject Connector bridging module into the diagram.

You can use [`bridgeSpace`](https://ej2.syncfusion.com/vue/documentation/api/diagram/connector#bridgespace-number) property of connectors to define the width for line bridging.

Limitation: Bezier segments do not support bridging.

## Corner radius

Corner radius allows to create connectors with rounded corners. The radius of the rounded corner is set with [`cornerRadius`](https://ej2.syncfusion.com/vue/documentation/api/diagram/connector#cornerradius-number) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/ConnectorsCornerRadius-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/ConnectorsCornerRadius-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors/ConnectorsCornerRadius-cs1" %}

## Appearance

* The Connector’s [`strokeWidth`](https://ej2.syncfusion.com/vue/documentation/api/diagram/strokeStyle#strokewidth-number), [`strokeColor`](https://ej2.syncfusion.com/vue/documentation/api/diagram/strokeStyle#strokecolor-string), [`strokeDashArray`](https://ej2.syncfusion.com/vue/documentation/api/diagram/strokeStyle#strokedasharray-string) and [`opacity`](https://ej2.syncfusion.com/vue/documentation/api/diagram/strokeStyle#opacity-number) properties are used to customize the appearance of the connector segments.

* The [`visible`](https://ej2.syncfusion.com/vue/documentation/api/diagram/connector#visible-boolean) property of the connector enables or disables the visibility of connector.

* Default values for all the  `connectors` can be set using the `getConnectorDefaults` properties. For example, if all connectors have the same type or having the same property then such properties can be moved into `getConnectorDefaults`.

## Segment Appearance

* The following code example illustrates how to customize the segment appearance.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/ConnectorsAppearance-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/ConnectorsAppearance-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors/ConnectorsAppearance-cs1" %}

## Decorator Appearance

* The source decorator’s [`strokeColor`](https://ej2.syncfusion.com/vue/documentation/api/diagram/strokeStyle#strokecolor-string), [`strokeWidth`](https://ej2.syncfusion.com/vue/documentation/api/diagram/strokeStyle#strokewidth-number) and [`strokeDashArray`](https://ej2.syncfusion.com/vue/documentation/api/diagram/strokeStyle#strokedasharray-string) properties are used to customize the color and width and appearance of the decorator.

* To set the border stroke color, stroke width and stroke dash array for the target decorator, use [`strokeColor`](https://ej2.syncfusion.com/vue/documentation/api/diagram/strokeStyle#strokecolor-string), [`strokeWidth`](https://ej2.syncfusion.com/vue/documentation/api/diagram/strokeStyle#strokewidth-number) and [`strokeDashArray`](https://ej2.syncfusion.com/vue/documentation/api/diagram/strokeStyle#strokedasharray-string).

* To set the size for source decorator, use width and height property. Similarly, to set the size for target decorator, use width and height.

The following code example illustrates how to customize the appearance of the decorator.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/ConnectorsDecAppearance-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/ConnectorsDecAppearance-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors/ConnectorsDecAppearance-cs1" %}

## Interaction

* Diagram allows to edit the connectors at runtime. To edit the connector segments at runtime, refer to [`Connection Editing`](https://ej2.syncfusion.com/vue/documentation/api/diagram/connectorEditing).

## Automatic line routing

Diagram provides additional flexibility to re-route the diagram connectors. A connector will frequently re-route itself when a shape moves next to it. The following screenshot illustrates how the connector automatically re-routes the segments.  

* Dependency LineRouting module should be injected to the application as the following code snippet.

        {% tabs %}
        {% highlight html tabtitle="Composition API (~/src/App.vue)" %}

        <script setup>
        import { provide } from "vue";
        import { DiagramComponent, LineRouting, DiagramConstraints } from '@syncfusion/ej2-vue-diagrams';

        provide('diagram', [ConnectorEditing]);
        </script>

        {% endhighlight %}
        {% highlight html tabtitle="Options API (~/src/App.vue)" %}

        <script>
        import { DiagramComponent, LineRouting, DiagramConstraints } from '@syncfusion/ej2-vue-diagrams';
        
        export default {
            provide: {
                diagram: [LineRouting]
            }
        }
        </script>

        {% endhighlight %}
        {% endtabs %}

* Now, the line routing constraints must be included to the default diagram constraints to enable automatic line routing support like below.

        {% tabs %}
        {% highlight html tabtitle="~/src/App.vue" %}

        /**
        *  Initialize the Diagram
        *  <ejs-diagram #diagram [constraints]='constraints'>
        */

        <template>
        <div id="app">
                <ejs-diagram :constraints='constraints' ></ejs-diagram>
            </div>
        </template>

        <script setup>
        // Enable line routing constraints.
        let constraints = DiagramConstraints.Default | DiagramConstraints.LineRouting;
        </script>

        {% endhighlight %}
        {% endtabs %}

* The following code block shows how to create the diagram with specifying nodes, connectors, constraints, and necessary modules for line routing.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/ConnectorsLineRouting-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/ConnectorsLineRouting-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors/ConnectorsLineRouting-cs1" %}

* In some situations, automatic line routing enabled diagram needs to ignore a specific connector from automatic line routing. So, in this case, auto routing feature can be disabled to the specific connector using the [`constraints`](https://ej2.syncfusion.com/vue/documentation/api/diagram/connector#constraints-ConnectorConstraints) property of the connector like the following code snippet.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/ConnectorsLineRoutingDisabled-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/ConnectorsLineRoutingDisabled-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors/ConnectorsLineRoutingDisabled-cs1" %}

## Constraints

* The [`constraints`](https://ej2.syncfusion.com/vue/documentation/api/diagram/connector#constraints-ConnectorConstraints) property of connector allows to enable/disable certain features of connectors.

* To enable or disable the constraints refer  [`constraints`](https://ej2.syncfusion.com/vue/documentation/api/diagram/connectorConstraints)

The following code illustrates how to disable selection.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/ConnectorsConstraints-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/ConnectorsConstraints-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors/ConnectorsConstraints-cs1" %}

## Custom Properties

* The [`addInfo`](https://ej2.syncfusion.com/vue/documentation/api/diagram/connector#addinfo-Object) property of connectors allows to maintain additional information to connectors.

    {% tabs %}
    {% highlight html tabtitle="~/src/App.vue" %}

    let connectors: ConnectorModel = {
        id: 'connector1',
        // Defines the information about the connector
        addInfo:'centralconnector',
        type: 'Straight',
        sourceID: 'Transaction',
        targetID: 'Verification'
    };

    {% endhighlight %}
    {% endtabs %}

## Stack Order

* The connectors [`zIndex`](https://ej2.syncfusion.com/vue/documentation/api/diagram/connector#zindex-number) property specifies the stack order of an connector. A connector with greater stack order is always in front of an connector with a lower stack order.

The following code illustrates how to render connector based on the stack order.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/zindex-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/zindex-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors/zindex-cs1" %}

## Enable Connector Splitting

The connectors are used to create a link between two points, ports, or nodes to represent the relationship between them. Split the connector between two nodes when dropping a new node onto an existing connector and create a connection between the new node and existing nodes by setting the [`enableConnectorSplit`](https://ej2.syncfusion.com/vue/documentation/api/diagram/#enableconnectorsplit) as true. The default value of the [`enableConnectorSplit`](https://ej2.syncfusion.com/vue/documentation/api/diagram/enableConnectorSplit) is false.

The following code illustrates how to split the connector and create a connection with new node.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/ConnectorSplit-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/ConnectorSplit-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors/ConnectorSplit-cs1" %}

![Enable Connector Split](./images/EnableSplit.gif)

## See Also

* [How to add annotations to the connector](./labels)
* [How to enable/disable the behavior of the node](./constraints)
* [How to add connectors to the symbol palette](./symbol-palette)
* [How to perform the interaction on the connector](./interaction#connection-editing)
* [How to create diagram connectors using drawing tools](./tools)
