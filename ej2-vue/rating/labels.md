---
layout: post
title: Labels in Vue Rating component | Syncfusion
description: Learn here all about Labels in Syncfusion Vue Rating component of Syncfusion Essential JS 2 and more.
control: Labels 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Labels in Vue Rating component

You can use the [`showLabel`](https://ej2.syncfusion.com/vue/documentation/api/rating/#showlabel) property to display a label that shows the current value of the rating. When the `showLabel` property is set to `true`, a label will be displayed.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rating/labels/showlabel-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rating/labels/showlabel-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rating/labels/showlabel-cs1" %}

## Label position

The rating component allows you to place the label on the top, bottom, left, or right side of the rating using the [`labelPosition`](https://ej2.syncfusion.com/vue/documentation/api/rating/#labelposition) property.

The following label positions are supported:

* Top: The label is placed on the top of the rating.
* Bottom: The label is placed on the bottom of the rating.
* Left: The label is placed on the left side of the rating.
* Right: The label is placed on the right side of the rating.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rating/labels/label-positions-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rating/labels/label-positions-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rating/labels/label-positions-cs1" %}

## Label template

You can use the [`labelTemplate`](https://ej2.syncfusion.com/vue/documentation/api/rating/#labeltemplate) tag directive to specify a custom template for the `Label` of the rating. The current value of the rating will be passed as the `value` property in the template context when building the content of the label. This allows you to include dynamic information about the rating in the template.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rating/labels/label-template-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rating/labels/label-template-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rating/labels/label-template-cs1" %}