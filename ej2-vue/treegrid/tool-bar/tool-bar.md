---
layout: post
title: Vue TreeGrid Toolbar | Syncfusion
description: Learn how to customize the toolbar in Vue TreeGrid, including item control, toolbar placement, and toolbar templates.
control: Tool bar 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Toolbar in Vue TreeGrid

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