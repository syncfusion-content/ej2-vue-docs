---
layout: post
title: Icons and Navigation in Vue Context Menu | Syncfusion
description: Add font icons to Vue Context Menu items via the iconCss property and navigate to other pages by binding the url property to each menu item.
control: Icons and navigation 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Icons and Navigation in Vue Context Menu

## Icons

The ContextMenu items have an icon/image in them to provide a visual representation of the action. To place the icon on a menu item, set the [iconCss](https://ej2.syncfusion.com/vue/documentation/api/context-menu/menuItemModel#iconcss) property to `e-icons` with the required icon CSS. By default, the icon is positioned to the left side of the menu item. In the following sample, the icons for Cut, Copy, and Paste menu items are added using the `iconCss` property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/context-menu/default-cs11/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/context-menu/default-cs11/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/context-menu/default-cs11" %}

## Navigation

Navigation in ContextMenu is used to navigate to another web page when a menu item is clicked. This can be achieved by providing a link to the menu item using the [url](https://ej2.syncfusion.com/vue/documentation/api/context-menu/menuItemModel#url) property. In the following sample, URLs are assigned to the menu items using the `url` property, allowing navigation to external web pages when the items are clicked.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/context-menu/default-cs12/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/context-menu/default-cs12/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/context-menu/default-cs12" %}

> To open the links in a new tab, set the `target` attribute with the value `_blank` in the [beforeItemRender](https://ej2.syncfusion.com/vue/documentation/api/context-menu/index-default#beforeitemrender) event.

## See Also

* [How to change menu items dynamically](./how-to/change-menu-items-dynamically)