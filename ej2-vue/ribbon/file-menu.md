---
layout: post
title: File Menu in Vue Ribbon | Syncfusion
description: Learn how to add a built-in file menu in the Vue Ribbon with configurable menu items for actions like creating, opening, and saving documents.
control: Ribbon
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# File Menu in Vue Ribbon

The Syncfusion Vue Ribbon component includes a built-in file menu that allows you to add menu items for performing specific actions like creating, opening, or saving documents. The file menu is highly configurable and can be enabled by defining the [fileMenu](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonFileMenu) property.

## Visibility 

The visibility of the file menu can be controlled by setting the [visible](https://ej2.syncfusion.com/vue/documentation/api/ribbon/fileMenuSettingsModel#visible) property to `true`. By default, the file menu is hidden.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ribbon/modules/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ribbon/modules/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/modules" %}

## Adding menu items

Menu items are added to the file menu through the [menuItems](https://ej2.syncfusion.com/vue/documentation/api/ribbon/fileMenuSettingsModel#menuitems) property, which accepts an array of [MenuItemModel](https://ej2.syncfusion.com/vue/documentation/api/menu/menuItemModel).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ribbon/menuItems/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ribbon/menuItems/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/menuItems" %}

## Open submenu on click

By default, a submenu expands when the user hovers over its parent item. This behavior can be changed to expand on a click by setting the [showItemOnClick](https://ej2.syncfusion.com/vue/documentation/api/ribbon/fileMenuSettingsModel#showitemonclick) property to `true`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ribbon/subMenuOnClick/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ribbon/subMenuOnClick/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/subMenuOnClick" %}

## Custom header text

The header text can be customized by defining new content in the[text](https://ej2.syncfusion.com/vue/documentation/api/ribbon/fileMenuSettingsModel#text) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ribbon/headerText/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ribbon/headerText/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/headerText" %}