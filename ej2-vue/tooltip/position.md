---
layout: post
title: Position in Vue Tooltip component | Syncfusion
description: Learn here all about Position in Syncfusion Vue Tooltip component of Syncfusion Essential JS 2 and more.
control: Position 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Position in Vue Tooltip component

Tooltips can be attached to 12 static locations around the target. On initializing the Tooltip, you can set the [`position`](https://helpej2.syncfusion.com/vue/documentation/api/tooltip/#position) property with any one of the following values:

* `TopLeft`
* `TopCenter`
* `TopRight`
* `BottomLeft`
* `BottomCenter`
* `BottomRight`
* `LeftTop`
* `LeftCenter`
* `LeftBottom`
* `RightTop`
* `RightCenter`
* `RightBottom`

> By default, Tooltip is placed at the `TopCenter` of the target element.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/tooltip/position/default-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/tooltip/position/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tooltip/position/default-cs1" %}

## Tip pointer positioning

Pointer positions can be adjusted using the [`showTipPointer`](https://ej2.syncfusion.com/vue/documentation/api/tooltip#showtippointer) property. Pointer positions can be adjusted using the [`tipPointerPosition`](https://ej2.syncfusion.com/vue/documentation/api/tooltip#tippointerposition) property that can be assigned to one of the following values:

* `Auto`
* `Start`
* `Middle`
* `End`

The following code example illustrates how to set the pointer to the start position of the Tooltip.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/tooltip/position/tip-position-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/tooltip/position/tip-position-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tooltip/position/tip-position-cs1" %}

By default, tip pointers are auto adjusted so that the arrow does not point outside the target element.

## Dynamic positioning

The Tooltip and its tip pointer can be positioned dynamically based on the target's location. This can be achieved by using the [`refresh`](https://ej2.syncfusion.com/vue/documentation/api/tooltip#refresh) method, which auto-adjusts the Tooltip over the target.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/tooltip/position/dynamic-position-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/tooltip/position/dynamic-position-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tooltip/position/dynamic-position-cs1" %}

## Mouse trailing

Tooltips can be positioned relative to the mouse pointer. This behavior can be enabled or disabled by using the [`mouseTrail`](https://ej2.syncfusion.com/vue/documentation/api/tooltip#mousetrail) property. By default, this property is set to `false`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/tooltip/position/mouse-trail-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/tooltip/position/mouse-trail-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tooltip/position/mouse-trail-cs1" %}

> When mouse trailing option is enabled, the tip pointer position gets auto adjusted based on the target, and other position values like start, end, and middle are not applied (to prevent the pointer from moving out of target).

## Setting offset values

Offset values are set to specify the distance between the target and Tooltip element. [`offsetX`](https://ej2.syncfusion.com/vue/documentation/api/tooltip#offsetx) and [`offsetY`](https://ej2.syncfusion.com/vue/documentation/api/tooltip#offsety) properties are used to specify the offset left and top values.

* `offsetX` specifies the distance between the target and Tooltip element in X axis.
* `offsetY` specifies the distance between the target and Tooltip element in Y axis.

The following code example illustrates how to set offset values.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/tooltip/position/offset-value-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/tooltip/position/offset-value-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tooltip/position/offset-value-cs1" %}

> By default, collision is handled automatically and therefore when collision is detected the Tooltip fits horizontally and flips vertically.