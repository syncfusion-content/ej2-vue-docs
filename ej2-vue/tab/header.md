---
layout: post
title: Header in Vue Tab component | Syncfusion
description: Learn here all about Header in Syncfusion Vue Tab component of Syncfusion Essential JS 2 and more.
control: Header 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Header in Vue Tab component

This section explains about modifying the style of Tab header, and configuring its icons and positions.

## Styles

You can customize header styles by adding predefined classes in the Tab root element. The pre-defined CSS class names are as follows:

* **e-fill**: The Selected Tab header background is set as solid fill.
* **e-background**: Tab header has a solid fill background, and the selected header has a highlighted border.
* **e-background e-accent**: Tab header has a solid fill background, and the selected header has a highlighted border with accent color.

> If the above custom style classes are not included in the root element, the default style is applied to the Tab items.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/tab/header-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/tab/header-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/header-cs1" %}

## Icon positions

You can customize the position of the Tab header icons using the [`iconPosition`](https://ej2.syncfusion.com/vue/documentation/api/tab/header#iconposition) property.  This property depends on the header items [`iconCss`](https://ej2.syncfusion.com/vue/documentation/api/tab/header#iconcss) property.  By default, Tab header icon is placed on left position.  The position values are as follows:

* **Left**: Icon is placed on the left of the Tab header item.
* **Right**: Icon is placed on the right of the Tab header item.
* **Top**: Icon is placed on the top of the Tab header item.
* **Bottom**: Icon is placed on the bottom of the Tab header item.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/tab/icon-position-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/tab/icon-position-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/icon-position-cs1" %}

## See Also

* [How to customize selected tab styles](./how-to/customize-selected-tab-styles/)