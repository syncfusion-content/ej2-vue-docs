---
layout: post
title: Bpmn Flows in Vue Diagram component | Syncfusion®
description: Learn here all about Bpmn Flows in Syncfusion® Vue Diagram component of Syncfusion Essential® JS 2 and more.
control: Bpmn Flows
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# BPMN flows in Vue Diagram component


[`BPMN Flows`](https://ej2.syncfusion.com/vue/documentation/api/diagram/bpmnflow) are lines that connects BPMN flow objects.

* Association
* Sequence
* Message

## Association flow

[`BPMN Association`](https://ej2.syncfusion.com/vue/documentation/api/diagram/bpmnflow#association) flow is used to link flow objects with its corresponding text or artifact. An association is represented as a dotted graphical line with opened arrow. The type of association are as follows.

* Directional
* BiDirectional
* Default

The `association` property allows you to define the type of association. The following code example illustrates how to create an association.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/bpmn-shapes/Association-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/bpmn-shapes/Association-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/bpmn-shapes/Association-cs1" %}

The following table demonstrates the visual representation of association flows.

| Association | Image |
| -------- | -------- |
| Default | ![Default BPMN FlowShapes](../images/Default1.png) |
| Directional | ![Directional BPMN FlowShapes](../images/Directional1.png) |
| BiDirectional | ![BiDirectional BPMN FlowShapes](../images/BiDirectional.png) |

N> The default value for the property `association` is **default**.

## Sequence flow

A [`Sequence`](https://ej2.syncfusion.com/vue/documentation/api/diagram/bpmnflow#sequence) flow shows the order in which the activities are performed in a BPMN Process and is represented with a solid graphical line. The type of sequence are as follows.

* Normal
* Conditional
* Default

The sequence property allows you to define the type of sequence. The following code example illustrates how to create a sequence flow.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/bpmn-shapes/Sequence-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/bpmn-shapes/Sequence-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/bpmn-shapes/Sequence-cs1" %}

The following table contains various representation of sequence flows.

| Sequence | Image |
| -------- | -------- |
| Default | ![Default Sequence BPMN Shpae](../images/Default2.png) |
| Conditional | ![Conditional Sequence BPMN Shpae](../images/Conditional.png) |
| Normal | ![Normal Sequence BPMN Shpae](../images/Normal.png) |

N> The default value for the property `sequence` is “normal”.

## Message flow

A [`message`](https://ej2.syncfusion.com/vue/documentation/api/diagram/bpmnflow#message) flow shows the flow of messages between two Participants. A message flow is represented by dashed line. The type of message are as follows.

* InitiatingMessage
* NonInitiatingMessage
* Default

The message property allows you to define the type of message. The following code example illustrates how to define a message flow.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/bpmn-shapes/Message-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/bpmn-shapes/Message-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/bpmn-shapes/Message-cs1" %}

The following table contains various representation of message flows.

| Message | Image |
| -------- | -------- |
| Default | ![Default Message BPMN Shape](../images/Message-default.png) |
| InitiatingMessage | ![InitiatingMessage Message BPMN Shape](../images/IMessage.png) |
| NonInitiatingMessage | ![NonInitiatingMessage Message BPMN Shape](../images/NIMessage.png) |

N> The default value for the property `message` is **default**.