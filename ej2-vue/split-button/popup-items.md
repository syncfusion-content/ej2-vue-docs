---
layout: post
title: Popup items in Vue Split button component | Syncfusion
description: Learn here all about Popup items in Syncfusion Vue Split button component of Syncfusion Essential JS 2 and more.
control: Popup items 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Popup items in Vue Split button component

## Icons

The Popup action item have an icon or image to provide visual representation of the action. To place the icon on a popup item, set the [`iconCss`](https://ej2.syncfusion.com/vue/documentation/api/split-button/#iconcss) property to `e-icons` with the required icon CSS. By default, the icon is positioned to the left side of the popup action item.

In the following sample, the icons for Cut, Copy, and Paste menu items are added using the iconCss property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/split-button/default-cs11/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/split-button/default-cs11" %}

## Template

### Item templating

Popup items can be customized by using the [`beforeItemRender`](https://ej2.syncfusion.com/vue/documentation/api/split-button/#beforeitemrender) event. The item render event triggers while rendering each Popup action item. The event argument will be used to identify the action item and customize it based on the requirement.

In the following example, the icons in each li items is right aligned by appending span element while li rendering:

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/split-button/default-cs12/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/split-button/default-cs12" %}

### Popup templating

The whole popup can be customized as per the requirement and it can be customized by handling it in [`target`](https://ej2.syncfusion.com/vue/documentation/api/split-button/#target) property.

In the following sample, the whole popup item is customized as color palette by giving `div` as target and it can be achieved using `target` property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/split-button/default-cs13/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/split-button/default-cs13" %}

## See Also

* [Popup items grouping](./how-to/group-items-in-popup)
* [SplitButton popup with separator](./icons-and-separator#separator)