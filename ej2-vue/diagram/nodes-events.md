---
layout: post
title: Events of nodes in Vue Diagram component | Syncfusion®
description: Learn here all about Nodes in Syncfusion® Vue Diagram component of Syncfusion Essential® JS 2 and more.
control: Nodes interaction
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

## Events

Diagram provides some events support for node that triggers when interacting with the node.

## Click event

Triggers when the node is clicked. The following code example explains how to get the [`click`](https://ej2.syncfusion.com/vue/documentation/api/diagram/#click) event in the diagram.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/nodes/nEvents-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/nodes/nEvents-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/nodes/nEvents-cs1" %}

## Selection change event

Triggers when the node is selected in diagram.
The following code example explains how to get the [`selectionChange`](https://ej2.syncfusion.com/vue/documentation/api/diagram/#selectionchange) event in the diagram.


{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/nodes/nEvents-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/nodes/nEvents-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/nodes/nEvents-cs2" %}

 You can prevent selection by setting the `cancel` property of [`SelectionChangeEventArgs`](https://ej2.syncfusion.com/vue/documentation/api/diagram/iSegmentChangeEventArgs/) to true, as shown in the code snippet below.

```ts
  selectionChange: function (args: ISelectionChangeEventArgs) {
    if (args.state == 'Changing') {
      //Prevents selection
      args.cancel = true;
    }
  },

```

## Position change event

While dragging the node through interaction, the position change event can be used to do the customization.
The following code example explains how to get the [`positionChange`](https://ej2.syncfusion.com/vue/documentation/api/diagram/#positionchange) event in the diagram.


{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/nodes/nEvents-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/nodes/nEvents-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/nodes/nEvents-cs3" %}

 You can prevent dragging by setting the `cancel` property of [`DraggingEventArgs`](https://ej2.syncfusion.com/vue/documentation/api/diagram/iDraggingEventArgs/) to true, as shown in the code snippet below.

 ```ts
   positionChange: function (args: IDraggingEventArgs) {
    if (args.state == 'Progress') {
      //Prevents dragging
      args.cancel = true;
    }
  },

```

## Size change event

While resizing the node during the interaction, the size change event can be used to do the customization.
The following code example explains how to get the [`sizeChange`](https://ej2.syncfusion.com/vue/documentation/api/diagram/#sizechange) event in the diagram.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/nodes/nEvents-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/nodes/nEvents-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/nodes/nEvents-cs4" %}

 You can prevent resizing by setting the `cancel` property of [`SizeChangeEventArgs`](https://ej2.syncfusion.com/vue/documentation/api/diagram/isizechangeeventargs/) to true, as shown in the code snippet below.

 ```ts
    sizeChange: function (args: ISizeChangeEventArgs) {
    if (args.state == 'Progress') {
      //Prevents resizing
      args.cancel = true;
    }
  },

```

## Rotate change event

While rotating the node during the interaction, the rotate change event can be used to do the customization.
The following code example explains how to get the [`rotateChange`](.https://ej2.syncfusion.com/vue/documentation/api/diagram/#rotatechange) event in the diagram.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/nodes/nEvents-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/nodes/nEvents-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/nodes/nEvents-cs5" %}

 You can prevent rotation by setting the `cancel` property of [`RotationEventArgs`](https://ej2.syncfusion.com/vue/documentation/api/diagram/irotationeventargs/) to true, as shown in the code snippet below.

 ```ts
  rotateChange: function (args: IRotationEventArgs) {
    if (args.state == 'Progress') {
      //Prevents rotation
      args.cancel = true;
    }
  },

```

## Property change event

Triggers when there is any property change occurred for the node. The following code example explains how to get the [`propertyChange`](.https://ej2.syncfusion.com/vue/documentation/api/diagram/#propertychange) event in the diagram.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/nodes/nEvents-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/nodes/nEvents-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/nodes/nEvents-cs6" %}

## Collection change event

Triggers when the node is added or removed in diagram dynamically.
The following code example explains how to get the [`collectionChange`](https://ej2.syncfusion.com/vue/documentation/api/diagram/#collectionchange) event in the diagram.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/nodes/nEvents-cs7/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/nodes/nEvents-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/nodes/nEvents-cs7" %}

You can prevent changes to the diagram collection, such as adding or deleting nodes, by setting the `cancel` property of [`CollectionChangeEventArgs`](https://ej2.syncfusion.com/vue/documentation/api/diagram/icollectionchangeeventargs/) to true, as shown in the code snippet below.

 ```ts
    collectionChange: function (args: ICollectionChangeEventArgs) {
    if (args.state == 'Changing') {
      //Prevents collection change - Prevents Adding or deleting nodes
      args.cancel = true;
    }
  },

```

## Mouse Events

### Mouse enter event

The [`mouseEnter`](https://ej2.syncfusion.com/vue/documentation/api/diagram/#mouseenter) is triggered when the mouse enters the node surface.

### Mouse over event

The [`mouseOver`](https://ej2.syncfusion.com/vue/documentation/api/diagram/#mouseover) is triggered when the mouse hover over the node surface.

### Mouse leave event

The [`mouseLeave`](https://ej2.syncfusion.com/vue/documentation/api/diagram/#mouseleave) is triggered when the mouse leaves the node surface.

The following code example shows how to handle these events in the diagram and change the color of a node based on these events:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/nodes/nEvents-cs8/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/nodes/nEvents-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/nodes/nEvents-cs8" %}