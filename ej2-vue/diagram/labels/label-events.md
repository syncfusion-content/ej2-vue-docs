---
layout: post
title: Label Events in Vue Diagram component | Syncfusion®
description: Learn here all about Labels in Syncfusion® Vue Diagram component of Syncfusion Essential® JS 2 and more.
control: Label Events
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Annotation events in Vue Diagram component

There are some events which will trigger while interacting with annotation.
* KeyDown.
* KeyUp.
* DoubleClick.
* TextEdit.

## KeyDown event

The [`keyDown`](https://ej2.syncfusion.com/vue/documentation/api/diagram/iKeyEventArgs/) event is triggered whenever any key is pressed. The following example shows how to capture the keyDown event and modify the fill color of a node on each key press:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/labels/KeyDown-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/labels/KeyDown-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/labels/KeyDown-cs1" %}

## KeyUp event

The [`keyUp`](https://ej2.syncfusion.com/vue/documentation/api/diagram/iKeyEventArgs/) event is triggered whenever we press and release any key. The following example shows how to capture the keyUp event and modify the fill color of a node on each key press:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/labels/KeyUp-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/labels/KeyUp-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/labels/KeyUp-cs1" %}

## Double click event

The [`doubleClick`](https://ej2.syncfusion.com/vue/documentation/api/diagram/iDoubleClickEventArgs/) event is triggered when you double-click on a node, connector, or the diagram surface. Double-clicking on a diagram element activates the annotation editing mode. The following code example shows how to capture the [`doubleClick`](https://ej2.syncfusion.com/vue/documentation/api/diagram/iDoubleClickEventArgs/) event:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/labels/DoubleClick-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/labels/DoubleClick-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/labels/DoubleClick-cs1" %}

## TextEdit event

The [`textEdit`](https://ej2.syncfusion.com/vue/documentation/api/diagram/iTextEditEventArgs/) event triggers when you finish editing the annotation text and the focus is removed from the annotation text.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/labels/TextEdit-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/labels/TextEdit-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/labels/TextEdit-cs1" %}

You can prevent adding new text to the annotation by setting the `cancel` property of [`textEdit`](https://ej2.syncfusion.com/vue/documentation/api/diagram/iTextEditEventArgs/) to true.

``` javascript
textEdit: function (args) {
    // Prevents any new content from being added to the annotation
    args.cancel = true;
  },

```

## Selection change event

The [`selectionChange`](https://ej2.syncfusion.com/vue/documentation/api/diagram/#selectionchange) event is triggered when an annotation of a node or connector is selected in the diagram.

You can prevent selection by setting the `cancel` property of [`SelectionChangeEventArgs`](https://ej2.syncfusion.com/vue/documentation/api/diagram/iselectionchangeeventargs/) to true, as shown in the code snippet below.

```ts
selectionChange: function (args) {
  if (args.state === 'Changing') {
    // Prevents selection
    args.cancel = true;
  }
}
```