---
layout: post
title: Tool bar in Vue Grid component | Syncfusion
description: Learn here all about Tool bar in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Tool bar 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Tool bar in Vue Grid component

The Grid provides ToolBar support to handle grid actions. The [`toolbar`](https://ej2.syncfusion.com/vue/documentation/api/grid/#toolbar) property accepts either the collection of built-in toolbar items and `ItemModel` objects for custom toolbar items or HTML element ID for toolbar template.

To use Toolbar, you need to inject `Toolbar` module in the `provide` section.

## Enable or disable toolbar items

You can enable/disable toolbar items by using the `enableItems` method.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/toolbar/default-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/toolbar/default-cs6" %}

## Add toolbar at the bottom of Grid

You can add the Grid toolbar component at the bottom of Grid using the ['created'](https://ej2.syncfusion.com/vue/documentation/api/grid/#created) event.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/toolbar/default-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/toolbar/default-cs7" %}

## See Also

* [Toolbar Component](../../toolbar/getting-started/)
* [How to apply overflowMode to grid toolbar in Vue Grid](https://www.syncfusion.com/forums/157193/how-to-apply-overflowmode-to-grid-toolbar-in-vue-grid)
* [How to show the  toolbar in both top and bottom of the Vue Grid](https://www.syncfusion.com/forums/163079/how-to-show-the-toolbar-in-both-top-and-bottom-of-the-vue-grid)