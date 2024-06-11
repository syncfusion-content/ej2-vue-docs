---
layout: post
title: Populating items in Vue Carousel component | Syncfusion
description: Learn here all about Populating items in Syncfusion Vue Carousel component of Syncfusion Essential JS 2 and more.
control: Populating items 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Populating items in Vue Carousel component

In the Carousel, slides can be rendered in two ways as follows,

* Populating items using carousel item
* Populating items using data source

## Populating items using carousel item

When rendering the Carousel component using items binding, you can assign templates for each item separately or assign a common template to each item. You can also customize the slide transition interval for each item separately. The following example code depicts the functionality as item property binding.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/carousel/default-cs17/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/carousel/default-cs17/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/carousel/default-cs17" %}

## Populating items using data source

When rendering the Carousel component using data binding, you can assign a common template only for all items using the [`itemTemplate`](https://ej2.syncfusion.com/vue/documentation/api/carousel/#itemtemplate) property. You cannot set the interval for each item. The following example code depicts the functionality as data binding.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/carousel/default-cs18/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/carousel/default-cs18/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/carousel/default-cs18" %}

## Selection

The Carousel items will be populated from the first index of the Carousel items and can be customized using the following ways,

* Select an item using the property.
* Select an item using the method.

### Select an item using the property

Using the [`selectedIndex`](https://ej2.syncfusion.com/vue/documentation/api/carousel/#selectedindex) property of the Carousel component, you can set the slide to be populated at the time of initial rendering else you can switch to the particular slide item.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/carousel/default-cs19/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/carousel/default-cs19/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/carousel/default-cs19" %}

### Select an item using the method

Using the [`prev`](https://ej2.syncfusion.com/vue/documentation/api/carousel/#prev) or [`next`](https://ej2.syncfusion.com/vue/documentation/api/carousel/#next) public method of the Carousel component, you can switch the current populating slide to a previous or next slide.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/carousel/default-cs20/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/carousel/default-cs20/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/carousel/default-cs20" %}

## Partial visible slides

The Carousel component supports to show one complete slide and a partial view of adjacent (previous and next) slides at the same time. You can enable or disable the partial slides using the [`partialVisible`](https://ej2.syncfusion.com/vue/documentation/api/carousel/#partialVisible) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/carousel/default-cs21/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/carousel/default-cs21/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/carousel/default-cs21" %}

> Slide animation only applicable if the `partialVisible` is enabled.

The last slide will be displayed as a partial slide at the initial rendering when the [`loop`](https://ej2.syncfusion.com/vue/documentation/api/carousel/#loop) and [`partialVisible`](https://ej2.syncfusion.com/vue/documentation/api/carousel/#partialVisible) properties are enabled.

The previous slide is not displayed at the initial rendering when the `loop` is disabled.

The following example code depicts the functionality of `partialVisible` and without `loop` functionalities.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/carousel/default-cs22/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/carousel/default-cs22/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/carousel/default-cs22" %}

## See Also

* [Customizing partial slides area size](./styles-and-appearance/#customizing-partial-slides-size)