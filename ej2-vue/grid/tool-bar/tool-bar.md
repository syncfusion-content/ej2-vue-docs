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

The toolbar in the Syncfusion Vue Grid component offers several general use cases to enhance data manipulation and overall experience. Actions such as adding, editing, and deleting records within the grid can be performed, providing efficient data manipulation capabilities. The toolbar also facilitates data export and import functionality, allowing you to generate downloadable files in formats like Excel, CSV, or PDF. 

To enable the toolbar functionality, you need to inject the **Toolbar** module in the **provide** section. This service provides the necessary methods to interact with the toolbar items. The toolbar can be customized with built-in toolbar items or custom toolbar items using the [toolbar](https://ej2.syncfusion.com/vue/documentation/api/grid/#toolbar) property. The `toolbar` property accepts an array of strings representing the built-in toolbar items or an array of [ItemModel](https://ej2.syncfusion.com/vue/documentation/api/toolbar/itemModel/) objects for custom toolbar items.

The following example demonstrates how to enable toolbar items in the grid.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/toolbar/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/toolbar/default-cs1" %}

## Enable or disable toolbar items

Enabling or disabling toolbar items dynamically in Syncfusion Vue Grid is to provide control over the availability of specific functionality based on application logic. This feature allows you to customize the toolbar based on various conditions or individuals interactions. 

You can enable or disable toolbar items dynamically by using the [enableToolbarItems](https://ej2.syncfusion.com/vue/documentation/api/grid/#enabletoolbaritems) method. This method allows you to control the availability of specific toolbar items based on your application logic.

In the following example, the [EJ2 Toggle Switch Button component](https://ej2.syncfusion.com/vue/documentation/switch/getting-started) is added to enable and disable the toolbar items using `enableToolbarItems` method. When the switch is toggled, the [change](https://ej2.syncfusion.com/vue/documentation/api/switch/#change) event is triggered and the toolbar items are updated accordingly.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/toolbar/default-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/toolbar/default-cs6" %}

## Add toolbar at the bottom of Grid

By adding the toolbar at the bottom of the Syncfusion Vue Grid, important actions and functionality remain consistently visible and easily accessible, providing easy access to actions and operations without the need for scrolling.

To add the toolbar at the bottom of the Grid, you can utilize the [created](https://ej2.syncfusion.com/vue/documentation/api/grid/#created) event. By handling this event, you can dynamically insert the toolbar items at the desired position in the grid layout.

The following example shows how to add the toolbar items at the bootom using `created` event of the grid.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/toolbar/default-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/toolbar/default-cs7" %}

## Customize toolbar buttons using CSS

Customizing toolbar buttons in Syncfusion Vue Grid using CSS involves modifying the appearance of built-in toolbar buttons by applying CSS styles. This provides a flexible and customizable way to enhance the visual presentation of the toolbar and create a cohesive interface.

The appearance of the built-in toolbar buttons can be modified by applying the following CSS styles.

```css
.e-grid .e-toolbar .e-tbar-btn .e-icons,
.e-grid .e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn {
    background: #add8e6;   
}
```

The following example demonstrates how to change the background color of the `Add`, `Edit`, `Delete`, `Update` and `Cancel` toolbar buttons by applying CSS styles

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/toolbar/default-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/toolbar/default-cs8" %}


## See Also

* [Toolbar Component](../../toolbar/getting-started/)
* [How to apply overflowMode to grid toolbar in Vue Grid](https://www.syncfusion.com/forums/157193/how-to-apply-overflowmode-to-grid-toolbar-in-vue-grid)
* [How to show the  toolbar in both top and bottom of the Vue Grid](https://www.syncfusion.com/forums/163079/how-to-show-the-toolbar-in-both-top-and-bottom-of-the-vue-grid)