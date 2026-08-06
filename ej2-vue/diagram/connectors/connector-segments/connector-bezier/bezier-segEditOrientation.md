---
layout: post
title: Bezier Segment Edit Orientation in Vue Diagram | Syncfusion®
description: Set the edit orientation of bezier segments in the Syncfusion® Vue Diagram to allow freeform or bidirectional dragging of intermediate control points.
control: Bezier Segment edit orientation 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Bezier Segment Edit Orientation in Vue Diagram

## How to edit bezier segments based on bezier connector settings

The intermediate point of two adjacent bezier segments can be edited interactively based on the [`segmentEditOrientation`](https://ej2.syncfusion.com/vue/documentation/api/diagram/beziersegmenteditorientation) property of [`bezierSettings`](https://ej2.syncfusion.com/vue/documentation/api/diagram/beziersettingsmodel).

| SegmentEditOrientation value | Description | Output |
|-------- | -------- | -------- |
| Bidirectional |It allows the intermediate points to be dragged in either vertical or horizontal directions. | ![Bidirectional](../../../images/bez-bidirectional.gif) |
| Freeform | It allows the intermediate points to be dragged in any direction. | ![Freeform](../../../images/bez-freeform.gif) |

The following code illustrates how to interact with Bezier efficiently by using the [`smoothness`](https://ej2.syncfusion.com/vue/documentation/api/diagram/beziersmoothness) and `segmentEditOrientation` properties of the `bezierSettings`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/BezierSegEdit-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/BezierSegEdit-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors/BezierSegEdit-cs1" %}
