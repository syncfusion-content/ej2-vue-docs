---
layout: post
title: BPMN Data Object in Vue Diagram | Syncfusion®
description: Add BPMN data object shapes to the Syncfusion® Vue Diagram to represent data flowing in, out, or stored during a business process.
control: Bpmn DataObject
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# BPMN Data Object in Vue Diagram

## Data Object

A data object represents information flowing through the process, such as data placed into the process, data resulting from the process, data that needs to be collected, or data that must be stored. To define a [`data object`](https://ej2.syncfusion.com/vue/documentation/api/diagram/bpmnDataObjects), set the shape as **DataObject** and the type property defines whether data is an input or an output. You can create multiple instances of data object with the collection property of data.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/bpmn-shapes/Data-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/bpmn-shapes/Data-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/bpmn-shapes/Data-cs1" %}

The following table contains various representation of BPMN data object.

| Boundary | Image |
| -------- | -------- |
| Collection Data Object | ![Collection Data BPMN Shape](../images/Dataobject.png) |
| Data Input | ![Data Input BPMN Shape](../images/DataInput.png) |
| Data Output | ![Data Output BPMN Shape](../images/DataOutput.png) |
