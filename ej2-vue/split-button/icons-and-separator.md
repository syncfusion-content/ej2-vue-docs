---
layout: post
title: Icons and separator in Vue Split button component | Syncfusion
description: Learn here all about Icons and separator in Syncfusion Vue Split button component of Syncfusion Essential JS 2 and more.
control: Icons and separator 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Icons and separator in Vue Split button component

## SplitButton icons

SplitButton can have an icon to provide the visual representation of the action. To place the icon on a SplitButton, set the [`iconCss`](https://ej2.syncfusion.com/vue/documentation/api/split-button/#iconcss) property to `e-icons` with the required icon CSS. By default, the icon is positioned to the left side of the SplitButton. You can customize the icon's position by using the [`iconPosition`](https://ej2.syncfusion.com/vue/documentation/api/split-button/#iconposition) property.

In the following example, the SplitButton with default iconPosition and `iconPosition` as `Top` is showcased:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/split-button/default-cs8/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue) %}
{% include code-snippet/split-button/default-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/split-button/default-cs8" %}

> The Essential JS 2 provides a set of icons that can be loaded by applying `e-icons` class name to the element. You can also use third party icons on the SplitButton using the [`iconCss`](https://ej2.syncfusion.com/vue/documentation/api/split-button/#iconcss)property.

### Vertical button

Vertical Button in SplitButton can be achieved by adding `e-vertical` class using [`cssClass`](https://ej2.syncfusion.com/vue/documentation/api/split-button/#cssclass) property.

The following example illustrates how to provide vertical support in SplitButton component.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/split-button/default-cs9/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue) %}
{% include code-snippet/split-button/default-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/split-button/default-cs9" %}

> The Essential JS 2 provides a set of icons that can be loaded by applying `e-icons` class name to the element. You can also use third party icons on the SplitButton using the [`iconCss`](https://ej2.syncfusion.com/vue/documentation/api/split-button/#iconcss) property.

## Separator

The Separators are the horizontal lines that are used to separate the popup items. You `cannot` select the separators. You can enable separators to group the popup items using the [`separator`](https://ej2.syncfusion.com/vue/documentation/api/split-button/#iconposition) property.

The following example illustrates how to enable separator support in SplitButton component.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/split-button/default-cs10/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue) %}
{% include code-snippet/split-button/default-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/split-button/default-cs10" %}

## See Also

* [SplitButton popup with icons](./popup-items#icons)