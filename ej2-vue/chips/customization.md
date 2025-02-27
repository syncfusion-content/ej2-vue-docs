---
layout: post
title: Customization in Vue Chips component | Syncfusion
description: Learn here all about Customization in Syncfusion Vue Chips component of Syncfusion Essential JS 2 and more.
control: Customization 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Customization in Vue Chips component

This section explains the customization of styles, leading icons, avatar, and trailing icons in Chip control.

## Styles

The Chip control has the following predefined styles that can be defined using the [`cssClass`](https://ej2.syncfusion.com/vue/documentation/api/chips/#cssclass) property.

| Class | Description |
| -------- | -------- |
| e-primary | Represents a primary chip. |
| e-success | Represents a positive chip. |
| e-info |  Represents an informative chip. |
| e-warning | Represents a chip with caution. |
| e-danger | Represents a negative chip. |

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chips/default-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chips/default-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chips/default-cs2" %}

## Leading Icon

You can add and customize the leading icon of chip using the [`leadingIconCss`](https://ej2.syncfusion.com/vue/documentation/api/chips/#leadingiconcss) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chips/default-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chips/default-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chips/default-cs3" %}

## Avatar

You can add and customize the avatar of chip using the [`avatarIconCss`](https://ej2.syncfusion.com/vue/documentation/api/chips/#avatariconcss) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chips/default-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chips/default-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chips/default-cs4" %}

## Avatar Content

You can add and customize the avatar content of chip using the [`avatarText`](https://ej2.syncfusion.com/vue/documentation/api/chips/#avatartext) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chips/default-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chips/default-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chips/default-cs5" %}

## Trailing Icon

You can add and customize the trailing icon of chip using the [`trailingIconCss`](https://ej2.syncfusion.com/vue/documentation/api/chips/#trailingiconcss) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chips/default-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chips/default-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chips/default-cs6" %}

## Outline Chip

Outline chip has the border with the background transparent. It can be set using the [`cssClass`](https://ej2.syncfusion.com/vue/documentation/api/chips/#cssclass) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chips/default-cs7/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chips/default-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chips/default-cs7" %}

## Template

The [`template`](https://helpej2.syncfusion.com/vue/documentation/api/chips/#template) property of the Chips component allows users to fully customize the layout and design of each chip. By using the `template` property, users can include custom HTML elements, such as links, icons, or additional content.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chips/default-cs14/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chips/default-cs14/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chips/default-cs14" %}
