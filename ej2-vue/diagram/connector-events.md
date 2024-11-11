---
layout: post
title: Connector Events in Vue Diagram component | Syncfusion
description: Learn here all about Connectors in Syncfusion Vue Diagram component of Syncfusion Essential JS 2 and more.
control: Connector Events 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---
## Events

Diagram provides some events support for connectors that triggers when interacting with the connector.

## Click event

Triggers when the connector is clicked. The following code example explains how to get the [`click`](https://ej2.syncfusion.com/vue/documentation/api/diagram/iclickeventargs/) event in the diagram.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/ClickEvent-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/ClickEvent-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors/ClickEvent-cs1" %}

## Selection change event

When selecting/unselecting the connector, the selection change event will be triggered.
The following code example explains how to get the [`selection change`](https://ej2.syncfusion.com/vue/documentation/api/diagram/iSelectionChangeEventArgs/) event in the diagram.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/SelectionChange-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/SelectionChange-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors/SelectionChange-cs1" %}

 You can prevent selection by setting the `cancel` property of [`SelectionChangeEventArgs`](https://ej2.syncfusion.com/vue/documentation/api/diagram/iSelectionChangeEventArgs/) to true, as shown in the code snippet below.

```ts
    selectionChange: (args) => {
    if (args.state == 'Changing') {
      //Prevents selection
      args.cancel = true;
    }
  },
```

## Position change event

Triggers when the connector's position is changed in diagram.
The following code example explains how to get the [`position change`](https://ej2.syncfusion.com/vue/documentation/api/diagram/idraggingeventargs/) event in the diagram.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/positionChange-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/positionChange-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors/positionChange-cs1" %}

 ```ts
  positionChange: (args) => {
     if (args.state == 'Progress') {
      //Prevents dragging
      args.cancel = true;
    }
  },

```

## Connection change event

Triggers when the connector’s source or target point is connected or disconnected from the source or target.
The following code example explains how to get the [`connection change`](https://ej2.syncfusion.com/vue/documentation/api/diagram/iconnectionchangeeventargs/) event in the diagram.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/ConnectionChange-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/ConnectionChange-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors/ConnectionChange-cs1" %}

## Source Point change event

Triggers when the connector's source point is changed.
The following code example explains how to get the [`source Point change`](https://ej2.syncfusion.com/vue/documentation/api/diagram/iEndChangeEventArgs/) event in the diagram.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/SourcePointChange-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/SourcePointChange-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors/SourcePointChange-cs1" %}

 You can prevent source point dragging by setting the `cancel` property of [`EndChangeEventArgs`](https://ej2.syncfusion.com/vue/documentation/api/diagram/iEndChangeEventArgs/) to true, as shown in the code snippet below.

```javascript
 sourcePointChange : (args) => {
    if (args.state === 'Progress') {
     //Prevents source point dragging
      args.cancel = true;
      //Customize
    }
},
```

## Target Point change event

Triggers when the connector's target point is changed.
The following code example explains how to get the [`target Point change`](https://ej2.syncfusion.com/vue/documentation/api/diagram/iEndChangeEventArgs/) event in the diagram.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/TargetPointChange-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/TargetPointChange-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors/TargetPointChange-cs1" %}

 You can prevent target point dragging by setting the `cancel` property of [`EndChangeEventArgs`](https://ej2.syncfusion.com/vue/documentation/api/diagram/iEndChangeEventArgs/) to true, as shown in the code snippet below.

```javascript
targetPointChange  : (args) => {
 if (args.state === 'Progress') {
    //Prevents target point dragging
    args.cancel = true;
    //Customize
  }
},
```

## Segment Collection Change event

Triggers when the connector's segments added or removed at runtime.
The following code example explains how to get the [`segment collection change`](https://ej2.syncfusion.com/vue/documentation/api/diagram/iSegmentCollectionChangeEventArgs/) event in the diagram. 

Use `CTRL+Shift+Click` on connector to add/remove segments.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/SegmentCollchange-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/SegmentCollchange-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors/SegmentCollchange-cs1" %}

## Segment Change event

Triggers when the connector's segments were adjusted or edited.
The following code example explains how to get the [`segment change`](https://ej2.syncfusion.com/vue/documentation/api/diagram/iSegmentCollectionChangeEventArgs/) event in the diagram.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/SegmentEditing-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/SegmentEditing-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors/SegmentEditing-cs1" %}

 You can prevent segment editing by setting the `cancel` property of [`SegmentChangeEventArgs`](https://ej2.syncfusion.com/vue/documentation/api/diagram/iEndChangeEventArgs/) to true, as shown in the code snippet below.

``` javascript
 segmentChange  : (args) => {
    if (args.state === 'Start') {
      //Prevents the segment editing
      args.cancel = true;
    }
  },

```
## Collection change event

Triggers when the connector is added or removed from diagram.
The following code example explains how to get the [`collection change`](https://ej2.syncfusion.com/vue/documentation/api/diagram/icollectionchangeeventargs/) event in the diagram.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/CollectionChange-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/connectors/CollectionChange-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/connectors/CollectionChange-cs1" %}

You can prevent changes to the diagram collection, such as adding or deleting connectors, by setting the `cancel` property of [`CollectionChangeEventArgs`](https://ej2.syncfusion.com/vue/documentation/api/diagram/icollectionchangeeventargs/) to true, as shown in the code snippet below.

``` javascript
collectionChange: (args) => {
    if (args.state === 'Changing') {
        //Prevents collection change - Prevents Adding or deleting connectors
      args.cancel = true;
    }
  },
````