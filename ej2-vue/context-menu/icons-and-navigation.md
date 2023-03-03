---
layout: post
title: Icons and navigation in Vue Context menu component | Syncfusion
description: Learn here all about Icons and navigation in Syncfusion Vue Context menu component of Syncfusion Essential JS 2 and more.
control: Icons and navigation 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Icons and navigation in Vue Context menu component

## Icons

The ContextMenu item have an icon/image in it to provide visual representation of the action. To place the icon on a menu item, set the [`iconCss`](https://ej2.syncfusion.com/vue/documentation/api/context-menu/menuItemModel#iconcss) property to e-icons with the required icon CSS. By default, the icon is positioned to the left side of the menu item. In the following sample, the icons for Cut, Copy and Paste menu items are
added using the `iconCss` property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/context-menu/default-cs11/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/context-menu/default-cs11" %}

## Navigation

Navigation in ContextMenu is usage to navigate to the other web page when menu item is clicked. This can be achieved by providing link to the menu item using the [`url`](https://ej2.syncfusion.com/vue/documentation/api/context-menu/menuItemModel#url) property. In the following sample, Navigation URL for Flipkart, Amazon, and Snapdeal menu items are added using the `url` property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/context-menu/default-cs12/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/context-menu/default-cs12" %}

> To open the links in new tab, set `target` attribute with the value `_blank` in the [`beforeItemRender`](https://ej2.syncfusion.com/vue/documentation/api/context-menu#beforeitemrender) event.

## See Also

* [How to change menu items dynamically](./how-to/change-menu-items-dynamically)