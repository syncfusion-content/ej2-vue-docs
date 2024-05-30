---
layout: post
title: Gauge user interaction in Vue Circular gauge component | Syncfusion
description: Learn here all about Gauge user interaction in Syncfusion Vue Circular gauge component of Syncfusion Essential JS 2 and more.
control: Gauge user interaction 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Gauge user interaction in Vue Circular gauge component

## Tooltip for pointer

Circular gauge will displays the pointer details through [tooltip](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/tooltipSettings/),
when the mouse is moved over the pointer.

<!-- markdownlint-disable MD036 -->

## Tooltip for ranges

Circular gauge displays the information about the ranges through tooltip when hovering the mouse over the ranges. You can enable this feature by setting the type property of tooltip to ‘Range’ in the array collection.

**Tooltip customization for ranges**

To customize the range tooltip, use the `rangeSettings` property in tooltip. The following options are available to customize the range tooltip:

* fill - Specifies the range tooltip fill color.

* textStyle - Specifies the range tooltip text style.

* format - Specifies the range content format.

* template - Specifies the custom template for tooltip.

* enableAnimation - Animates as it moves from one point to another.

* border - Specifies the tooltip border.

* showMouseAtPosition - Displays the position of the tooltip on the cursor position.

## Tooltip for annotation

Circular gauge displays the information about the annotations through tooltip when hovering the mouse over the annotation. You can enable this feature by setting the type property of tooltip to ‘Annotation’ in the array collection.

**Tooltip customization for annotation**

To customize the annotation tooltip, use the `annotationSettings` property in tooltip. The following options are available to customize the annotation tooltip:

* fill - Specifies the annotation tooltip fill color.

* textStyle - Specifies the annotation tooltip text style.

* format - Specifies the annotation content format.

* template - Specifies the tooltip content with custom template.

* enableAnimation - Animates as it moves from one point to another.

* border - Specifies the tooltip border.

The following code example shows the tooltip for the pointer, ranges and annotation.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/circular-gauge/getting-started-cs60/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/circular-gauge/getting-started-cs60/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/getting-started-cs60" %}

### Template

Any HTML elements can be displayed in the tooltip by using the
[`template`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/tooltipSettings/#template-string) property of the tooltip.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/circular-gauge/getting-started-cs61/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/circular-gauge/getting-started-cs61/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/getting-started-cs61" %}

## Pointer Drag

Pointers can be dragged over the axis value. This can be achieved by clicking and dragging the pointer. To enable or disable the pointer drag, you can use
[`enablePointerDrag`](https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/#enablepointerdrag-boolean) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/circular-gauge/getting-started-cs62/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/circular-gauge/getting-started-cs62/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/getting-started-cs62" %}

## changes

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/circular-gauge/getting-started-cs63/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/circular-gauge/getting-started-cs63/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/circular-gauge/getting-started-cs63" %}