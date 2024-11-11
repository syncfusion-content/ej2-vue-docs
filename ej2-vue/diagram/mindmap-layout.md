---
layout: post
title: Mind-map layout in Vue Diagram component | Syncfusion
description: Learn here all about Mind-map layout in Syncfusion Vue Diagram component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: Mind-map layout 
documentation: ug
domainurl: ##DomainURL##
---

# Mind Map layout in Vue Diagram control

A mind map is a diagram that displays the nodes as a spider diagram organizes information around a central concept. To create mind map, the [`type`](https://ej2.syncfusion.com/vue/documentation/api/diagram/layout/#type) of layout should be set as `MindMap`.


## Mind Map Orientation

An [`Orientation`](https://ej2.syncfusion.com/vue/documentation/api/diagram/layoutModel/#orientation) of a `MindMapTreeLayout` is used to arrange the tree layout according to a specific direction. By default, the orientation is set to Horizontal. 

The following code example illustrates how to create an mindmap layout.


{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/automaticlayout/mindmap-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/automaticlayout/mindmap-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/automaticlayout/mindmap-cs1" %}


The following table outlines the various orientation types available:

|Orientation Type |Description|
| -------- | ----------- |
|Horizontal|Aligns the tree layout from left to right|
|Vertical|Aligns the tree layout from top to bottom|

>Note: If you want to use mind map layout in diagram, you need to inject MindMap in the diagram.


## Mind Map branch

You can also decide the branch for mind map using [`getBranch`](https://ej2.syncfusion.com/vue/documentation/api/diagram/layoutModel/#getbranch) method. The following code demonstrates how to set all branches on the right side for mind map layout using `getBranch` method.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/automaticlayout/mindmap-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/automaticlayout/mindmap-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/automaticlayout/mindmap-cs2" %}

![Mind map layout](images/mindmap.png)