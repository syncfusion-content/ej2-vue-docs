---
layout: post
title: Bezier Segment edit orientation in Vue Diagram component | Syncfusion®
description: Learn here all about Connectors in Syncfusion® Vue Diagram component of Syncfusion Essential® JS 2 and more.
control: Bezier Segment edit orientation 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Bezier Connector Settings

## How to edit bezier segments based on bezier connector settings

The intermediate point of two adjacent bezier segments can be edited interactively based on the [`segmentEditOrientation`](https://ej2.syncfusion.com/vue/documentation/api/diagram/bezierSegmentEditOrientation/) property of [`bezierSettings`](https://ej2.syncfusion.com/vue/documentation/api/diagram/bezierSettingsModel/).

| SegmentEditOrientation value | Description | Output |
|-------- | -------- | -------- |
| Bidirectional |It allows the intermediate points to be dragged in either vertical or horizontal directions. | ![Bidirectional](../../../images/bez-bidirectional.gif) |
| Freeform | It allows the intermediate points to be dragged in any direction. | ![Freeform](../../../images/bez-freeform.gif) |

The following code illustrates how to interact with Bezier efficiently by using the [`smoothness`](https://ej2.syncfusion.com/vue/documentation/api/diagram/bezierSmoothness/) and `segmentEditOrientation` properties of the `bezierSettings`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/BezierSegEdit-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/BezierSegEdit-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors/BezierSegEdit-cs1" %}
