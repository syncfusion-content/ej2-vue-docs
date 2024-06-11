---
layout: post
title: Tool bar in Vue Treegrid component | Syncfusion
description: Learn here all about Tool bar in Syncfusion Vue Treegrid component of Syncfusion Essential JS 2 and more.
control: Tool bar 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Tool bar in Vue Treegrid component

The TreeGrid provides ToolBar support to handle treegrid actions. The [`toolbar`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#toolbar)
property accepts either the collection of built-in toolbar items and [`ItemModel`](https://ej2.syncfusion.com/vue/documentation/api/toolbar/#item)objects for custom toolbar items or HTML element ID for toolbar template.

To use ToolBar, inject `Toolbar` module in the treegrid.

## Enable/disable toolbar items

You can enable/disable toolbar items by using the `enableItems` method.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/toolbar/default-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/toolbar/default-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/toolbar/default-cs4" %}