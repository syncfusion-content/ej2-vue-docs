---
layout: post
title: File Menu in Vue Ribbon Component | Syncfusion
description: Check out and learn about File Menu in Syncfusion Ribbon Vue Component of Syncfusion Essential JS 2 and more.
control: Ribbon
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# File Menu

The Ribbon component provides a built-in file menu that allows you to add menu items for performing specific actions. The file menu can be enabled by setting the [fileMenu](https://ej2.syncfusion.com/vue/documentation/api/ribbon#filemenu) property.

## Visibility 

You can show the file menu by setting the [visible](https://ej2.syncfusion.com/vue/documentation/api/ribbon/fileMenuSettingsModel/#visible) property to `true`. By default, the file menu is hidden.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/ribbon/modules/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/modules" %}

## Adding menu items

The menu items can be added to the file menu using the [menuItems](https://ej2.syncfusion.com/vue/documentation/api/ribbon/fileMenuSettingsModel/#menuitems) property as an array of [MenuItemModel](https://ej2.syncfusion.com/vue/documentation/api/menu/menuItemModel/).

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/ribbon/menuItems/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/menuItems" %}

## Open submenu on click

You can open the submenu on menu item click, by setting the [showItemOnClick](https://ej2.syncfusion.com/vue/documentation/api/ribbon/fileMenuSettingsModel/#showitemonclick) property to `true`. By default, the submenu will open on mouse hover.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/ribbon/subMenuOnClick/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/subMenuOnClick" %}

## Custom header text

You can define the file menu header text content by using the [text](https://ej2.syncfusion.com/vue/documentation/api/ribbon/fileMenuSettingsModel/#text) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/ribbon/headerText/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/headerText" %}
