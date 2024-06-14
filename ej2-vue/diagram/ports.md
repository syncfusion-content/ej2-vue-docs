---
layout: post
title: Ports in Vue Diagram component | Syncfusion
description: Learn here all about Ports in Syncfusion Vue Diagram component of Syncfusion Essential JS 2 and more.
control: Ports 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Ports in Vue Diagram component

Diagram provides support to define custom ports for making connections.

![Port](images/Port1.png)

<!-- markdownlint-disable MD033 -->

When a connector is connected between two nodes, its end points are automatically docked to the node’s nearest boundary as shown in the following image.

![Port to Port](images/port2.png)

Ports act as the connection points of the node and allows to create connections with only those specific points as shown in the following image.

![Port Image](images/Port3.png)

## Create Port

To create and customize the ports in the EJ2 Vue Diagram, refer to the below video link.

{% youtube "youtube:https://www.youtube.com/embed/w8F08xQUggU" %}

## Add ports when initializing nodes

To add a connection port, define the port object and add it to node’s ports collection. The `offset` property of port accepts an object of fractions and used to determine the position of ports. The following code illustrates how to add ports when initializing the node.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/ports/Remove-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/ports/Remove-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/ports/Remove-cs1" %}

## Add ports at runtime

Add ports at runtime by using the client-side method [`addPorts`](https://ej2.syncfusion.com/vue/documentation/api/diagram#addPorts). The following code illustrates how to add ports to node at runtime.

The port’s ID property is used to define the unique ID for the port and its further used to find the port at runtime.
If ID is not set, then default ID is automatically set.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/ports/Node-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/ports/Node-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/ports/Node-cs1" %}

## Remove ports at runtime

Remove ports at runtime by using client-side method [`removePorts`](https://ej2.syncfusion.com/vue/documentation/api/diagram#removePorts). Refer to the following example which shows how to remove ports at runtime.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/ports/ports-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/ports/ports-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/ports/ports-cs1" %}

## Update Port at runtime

You can change any port properties at runtime and update it through the client-side method [`dataBind`](https://ej2.syncfusion.com/vue/documentation/api/diagram#dataBind).

The following code example illustrates how to change the port properties.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/ports/ports-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/ports/ports-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/ports/ports-cs2" %}

## Appearance

* The shape of port can be changed by using its shape property. To explore the different types of port shapes, refer to Port Shapes. If you need to render a custom shape, then you can set shape as path and define path using path data property of port.

* The appearance of ports can be customized by using [`strokeColor`](https://ej2.syncfusion.com/vue/documentation/api/diagram/port#strokeColor-string),
[`strokeWidth`](https://ej2.syncfusion.com/vue/documentation/api/diagram/port#strokeWidth-string), and [`fill`](https://ej2.syncfusion.com/vue/documentation/api/diagram/port#fill-string) properties of the port.

* Customize the port size by using the [`width`](https://ej2.syncfusion.com/vue/documentation/api/diagram/port#width-number) and [`height`](https://ej2.syncfusion.com/vue/documentation/api/diagram/port#height-number) properties of port.

* The ports [`visibility`](https://ej2.syncfusion.com/vue/documentation/api/diagram/port#visibility-boolean) property allows you to define, when the port should be visible.

The following code illustrates how to change the appearance of port.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/ports/ports-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/ports/ports-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/ports/ports-cs3" %}

## Offset

The offset property of port is used to align the port based on fractions. 0 represents top/left corner, 1 represents bottom/right corner, and 0.5 represents half of width/height.

## Constraints

The constraints property allows to enable/disable certain behaviors of ports. For more information about port constraints, refer to [`Port Constraints`](https://ej2.syncfusion.com/vue/documentation/api/diagram/port#constraints-portconstraints).

## Specify connection direction to port

The [`connectionDirection`](https://ej2.syncfusion.com/vue/documentation/api/diagram/port#connectionDirection) property of a port allows users to specify the direction in which a connector should establish a connection. This can be either to the port (incoming) or from the port (outgoing).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/ports/ports-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/ports/ports-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/diagram/ports/ports-cs3" %}

![maxSegmentThumb](images\connectioDirection.png)