---
layout: post
title: Template and multilevel nesting in Vue Context menu component | Syncfusion
description: Learn here all about Template and multilevel nesting in Syncfusion Vue Context menu component of Syncfusion Essential JS 2 and more.
control: Template and multilevel nesting 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Template and multilevel nesting in Vue Context menu component

## Template

The ContextMenu items can be customized by using the [`Render`](https://ej2.syncfusion.com/vue/documentation/api/context-menu#beforeitemrender) event. The item render event triggers while rendering each menu item. The event argument will be used to identify the menu item and customize it based on the requirement. In the following sample, the menu item is rendered with keycode for specified action in ContextMenu using the template. Here, the keycode is specified for Save as, View page source, and Inspect in the right side corner of the menu items by adding span element in the [`beforeItemRender`](https://ej2.syncfusion.com/vue/documentation/api/context-menu#beforeitemrender) event.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/context-menu/default-cs13/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/context-menu/default-cs13" %}

> To create span element, `createElement` utility function used from `ej2-base`.

## Multilevel nesting

The Multiple level nesting supports in ContextMenu. It can be achieved by mapping the [`items`](https://ej2.syncfusion.com/vue/documentation/api/context-menu/menuItemModel#items) property inside the parent [`menuItems`](https://ej2.syncfusion.com/vue/documentation/api/context-menu#items). In the below sample, three level nesting of ContextMenu is provided.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/context-menu/default-cs14/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/context-menu/default-cs14" %}
