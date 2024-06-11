---
layout: post
title: Events in Vue Linear gauge component | Syncfusion
description: Learn here all about Events in Syncfusion Vue Linear gauge component of Syncfusion Essential JS 2 and more.
control: Events 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Events in Vue Linear gauge component

This section describes the Linear Gauge component's event that gets triggered when corresponding operations are performed.

## animationComplete

When the pointer animation is completed, the [`animationComplete`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/#animationcomplete) event will be triggered. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/iAnimationCompleteEventArgs/).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs18/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs18/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/linear-gauge/getting-started-cs18" %}

## annotationRender

Before the annotation is rendered in the Linear Gauge, the [`annotationRender`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/#annotationrender) event will be triggered. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/iAnnotationRenderEventArgs/).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs19/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs19/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/linear-gauge/getting-started-cs19" %}

## axisLabelRender

Before each axis label is rendered in the Linear Gauge, the [`axisLabelRender`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/#axislabelrender) event is fired. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/iAxisLabelRenderEventArgs/).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs20/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs20/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/linear-gauge/getting-started-cs20" %}

## beforePrint

The [`beforePrint`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/#beforeprint) event is fired before the print begins. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/iPrintEventArgs/).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs21/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs21/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/linear-gauge/getting-started-cs21" %}

## dragEnd

The [`dragEnd`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/#dragend) event will be fired before the pointer drag is completed. To know more about the argument of this event, refer [here](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/iPointerDragEventArgs/).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs22/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs22/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/linear-gauge/getting-started-cs22" %}

## dragMove

The [`dragMove`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/#dragmove) event will be fired when the pointer is dragged. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/iPointerDragEventArgs/).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs23/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs23/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/linear-gauge/getting-started-cs23" %}

## dragStart

When the pointer drag begins, the [`dragStart`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/#dragstart) event is triggered. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/iPointerDragEventArgs/).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs24/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs24/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/linear-gauge/getting-started-cs24" %}

## gaugeMouseDown

When mouse is pressed down on the gauge, the [`gaugeMouseDown`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/#gaugemousedown) event is triggered. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/iMouseEventArgs/).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs25/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs25/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/linear-gauge/getting-started-cs25" %}

## gaugeMouseLeave

When mouse pointer moves over the gauge, the [`gaugemouseleave`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/#gaugemouseleave) event is triggered. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/iMouseEventArgs/).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs26/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs26/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/linear-gauge/getting-started-cs26" %}

## gaugeMouseMove

When mouse pointer leaves the gauge, the [`gaugeMouseMove`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/#gaugemousemove) event is triggered. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/iMouseEventArgs/).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs27/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs27/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/linear-gauge/getting-started-cs27" %}

## gaugeMouseUp

When the mouse pointer is released over the Linear Gauge, the [`gaugeMouseUp`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/#gaugemouseup) event is triggered. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/iMouseEventArgs/).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs28/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs28/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/linear-gauge/getting-started-cs28" %}

## load

Before the Linear Gauge is loaded, the [`load`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/#load) event is fired. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/iLoadEventArgs/).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs29/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs29/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/linear-gauge/getting-started-cs29" %}

## loaded

After the Linear Gauge has been loaded, the [`loaded`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/#loaded) event will be triggered. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/iLoadedEventArgs/).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs30/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs30/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/linear-gauge/getting-started-cs30" %}

## resized

After the window resizing, the [`resized`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/#resized) event is triggered. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/iResizeEventArgs/).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs31/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs31/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/linear-gauge/getting-started-cs31" %}

## tooltipRender

The [`tooltipRender`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/#tooltiprender) event is fired before the tooltip is rendered. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/iTooltipRenderEventArgs/).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs32/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs32/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/linear-gauge/getting-started-cs32" %}

## valueChange

The [`valueChange`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/#valuechange) event is triggered when the pointer is dragged from one value to another. To know more about the arguments of this event, refer [here](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/iValueChangeEventArgs/).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs33/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs33/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/linear-gauge/getting-started-cs33" %}