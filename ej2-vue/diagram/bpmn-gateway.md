---
layout: post
title: Bpmn Gateway in Vue Diagram component | Syncfusion
description: Learn here all about Bpmn shapes in Syncfusion Vue Diagram component of Syncfusion Essential JS 2 and more.
control: Bpmn Gateway 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# BPMN Gateway in Vue Diagram component

## Gateway

Gateway is used to control the flow of a process and it is represented as a diamond shape. To create a gateway, the shape property of the node should be set as [`gateway`](https://ej2.syncfusion.com/vue/documentation/api/diagram/bpmnGateways) and the gateway property can be set with any of the appropriate gateways. The following code example illustrates how to create a BPMN Gateway.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/bpmn-shapes/Gateway-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/bpmn-shapes/Gateway-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/bpmn-shapes/Gateway-cs1" %}

N> By default, the `gateway` will be set as **none**.

There are several types of gateways as tabulated:

| Shape | Image |
| -------- | -------- |
| Exclusive | ![Exclusive GateWay BPMN Shape](images/Exclusive.png) |
| Parallel | ![Parallel GateWay BPMN Shape](images/Parallel.png) |
| Inclusive | ![Inclusive GateWay BPMN Shape](images/Inclusive.png) |
| Complex | ![Complex GateWay BPMN Shape](images/Complex.png) |
| EventBased | ![EventBased GateWay BPMNShape](images/EventBased.png) |
| ExclusiveEventBased | ![Exclusive EventBased GateWay BPMN Shape](images/EEBased.png) |
| ParallelEventBased | ![Parallel EventBased GateWay BPMN Shape](images/PEBased.png) |