---
layout: post
title: Customization in Vue Signature component | Syncfusion
description: Learn here all about Customization in Syncfusion Vue Signature component of Syncfusion Essential JS 2 and more.
control: Customization 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Customization in Vue Signature component

The Signature component draws stroke/path using moveTo() and lineTo() methods to connect one or more points while drawing in canvas. The stroke width can be modified by using its color and width. And the background can be modified by using its background color and background image.

## Stroke Width

The variable stroke width is based on the values of [`maxStrokeWidth`](https://ej2.syncfusion.com/vue/documentation/api/signature/#maxstrokewidth), [`minStrokeWidth`](https://ej2.syncfusion.com/vue/documentation/api/signature/#minstrokewidth) and [`velocity`](https://ej2.syncfusion.com/vue/documentation/api/signature/#velocity) for smoother and realistic signature. The default value of minimum stroke width is set as 0.5, maximum stroke width is set as 2.5 and velocity is set as 0.7.

In the following example, minimum stroke width is set as 0.5, maximum stroke width is set as 3 and velocity is set as 0.7.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/signature/default-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/signature/default-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/signature/default-cs2" %}

## Stroke Color

Color of the stroke can be specified by using [`strokeColor`](https://ej2.syncfusion.com/vue/documentation/api/signature/#strokecolor) property and it accepts hexadecimal code, RGB, and text. The default value of this property is “#000000”.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/signature/default-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/signature/default-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/signature/default-cs3" %}

## Background Color

Background color of a signature can be specified by using [`backgroundColor`](https://ej2.syncfusion.com/vue/documentation/api/signature/#backgroundcolor) property and it accepts hexadecimal code, RGB, and text. The default value of this property is “#ffffff”.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/signature/default-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/signature/default-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/signature/default-cs4" %}

## Background Image

Background image of a signature can be specified by using [`backgroundImage`](https://ej2.syncfusion.com/vue/documentation/api/signature/#backgroundimage) property. The background image can be set by either hosting the image in our local IIS or online image.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/signature/default-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue) %}
{% include code-snippet/signature/default-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/signature/default-cs5" %}

## See Also

* [Save With Background](./open-save#save-with-background)