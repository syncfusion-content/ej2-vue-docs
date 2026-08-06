---
layout: post
title: BPMN Group in Vue Diagram | Syncfusion®
description: Group related BPMN elements in the Syncfusion® Vue Diagram to visually organize parts of a process without affecting the flow logic.
control: Bpmn Group
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---


# BPMN Group in Vue Diagram

A group is used to frame a part of the [Vue Diagram](https://www.syncfusion.com/vue-components/vue-diagram), shows that elements included in it are logically belong together and does not have any other semantics other than organizing elements. To create a group, the shape property of the node should be set as **group**. The following code example illustrates how to create a BPMN group.

![BPMN Group Shape](../images/Group.png)

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/bpmn-shapes/Group-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/bpmn-shapes/Group-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/bpmn-shapes/Group-cs1" %}