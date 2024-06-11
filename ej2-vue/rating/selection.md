---
layout: post
title: Selection in Vue Rating component | Syncfusion
description: Learn here all about Selection in Syncfusion Vue Rating component of Syncfusion Essential JS 2 and more.
control: Selection 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Selection in Vue Rating component

The rating component allows users to rate something using a visual scale, and the selection state can be changed by the user clicking or tapping on the stars in the rating scale or through code. The rating component has a minimum value and a reset button, and provides customization options for the selected rating value and selection behavior.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rating/selection/default-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rating/selection/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rating/selection/default-cs1" %}

## Min value

You can use the [`min`](https://ej2.syncfusion.com/vue/documentation/api/rating/#min) property of the rating component to set the minimum possible rating value the user can select. If you set the `min` property to 2, then you will not be able to select a rating lower than 2.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rating/selection/min-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rating/selection/min-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rating/selection/min-cs1" %}

## Single selection

You can use the [`enableSingleSelection`](https://ej2.syncfusion.com/vue/documentation/api/rating/#enablesingleselection) property of the rating component to select only one item at a time. When the `enableSingleSelection` property is set to `true`, only the selected item will be considered to be in the selected state, while all other items will be unselected.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rating/selection/single-selection-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rating/selection/single-selection-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rating/selection/single-selection-cs1" %}

## Show or hide reset button

You can reset the rating value to its default by using the [`allowReset`](https://ej2.syncfusion.com/vue/documentation/api/rating/#allowreset) property of the rating component. When the `allowReset` property is set to `true`, a reset button will be shown that allows the user to reset the rating value to its default.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rating/selection/allow-reset-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rating/selection/allow-reset-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rating/selection/allow-reset-cs1" %}