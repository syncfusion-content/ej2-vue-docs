---
layout: post
title: User interaction in Vue Linear gauge component | Syncfusion
description: Learn here all about User interaction in Syncfusion Vue Linear gauge component of Syncfusion Essential JS 2 and more.
control: User interaction 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# User interaction in Vue Linear gauge component

## Tooltip

<!-- markdownlint-disable MD036 -->

Linear gauge displays the details about a pointer value through [`tooltip`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/tooltipSettings), when the mouse hovers over the pointer. To enable the tooltip, set the [`enable`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/tooltipSettings/#enable) property to **true** and inject the **GaugeTooltip**  module in **provide** section.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs70/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs70/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/linear-gauge/getting-started-cs70" %}



### Tooltip Format

Tooltip in the Linear Gauge control can be formatted using the [`format`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/tooltipSettings/#format) property in [`tooltip`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/tooltipSettings/) object. It is used to render the tooltip in certain format or to add a user-defined unit in the tooltip. By default, the tooltip shows the pointer value only. In addition to that, more information can be added in the tooltip. For example, the format **{value}km** shows pointer value with kilometer unit in the tooltip.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs71/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs71/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/linear-gauge/getting-started-cs71" %}

### Tooltip Template

The HTML element can be rendered in the tooltip of the Linear Gauge using the [`template`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/tooltipSettings/#template) property in the [`tooltip`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/tooltipSettings/). The **${value}** can be used as placeholders in the HTML element to display the pointer values of the corresponding axis.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs72/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs72/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/linear-gauge/getting-started-cs72" %}

### Customize the appearance of the tooltip

The tooltip can be customized using the following properties in [`tooltip`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/tooltipSettings).

* [`fill`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/tooltipSettings/#fill) - To fill the color for tooltip.
* [`enableAnimation`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/tooltipSettings/#enableanimation) - To enable or disable the tooltip animation.
* [`border`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/tooltipSettings/#border) - To set the border color and width of the tooltip.
* [`textStyle`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/tooltipSettings/#textstyle) - To customize the style of the text in tooltip.
* [`showAtMousePosition`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/tooltipSettings/#showatmouseposition) - To show the tooltip at the mouse position.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs73/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs73/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/linear-gauge/getting-started-cs73" %}

### Positioning the tooltip

The tooltip is positioned at the **End** of the pointer. To change the position of the tooltip at the start, or center of the pointer, set the [`position`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/tooltipSettings/#position) property to **Start** or **Center**.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs74/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs74/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/linear-gauge/getting-started-cs74" %}

## Pointer Drag

To drag either marker or bar pointer to the desired axis value, set the [`enableDrag`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/pointer/#enabledrag) property as **true** in the [`e-pointer`](https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/pointerModel/).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs75/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/linear-gauge/getting-started-cs75/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/linear-gauge/getting-started-cs75" %}