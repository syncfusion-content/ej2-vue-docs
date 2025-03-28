---
layout: post
title: Configure minimum width in Vue Pivot Table component | Syncfusion
description: Learn how to configure the minimum width in the Syncfusion Vue Pivot Table component of Syncfusion Essential JS 2 and more.
control: Configuring the minimum width in the Pivot Table component 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Configuring the minimum width in the Vue Pivot Table component

The pivot table component allows you to configure its minimum width using the `minWidth` property. This property is useful for ensuring the component maintains a consistent layout and responsiveness across different screen sizes.

> When the pivot table has the [Grouping Bar](../grouping-bar) enabled, the `minWidth` property is set to **400** pixels by default to accommodate the grouping bar UI elements. Without the [Grouping Bar](../grouping-bar), the `minWidth` property defaults to **310** pixels.

To customize the minimum width, set the `minWidth` property to your desired value (in pixels) as shown below:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs275/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs275/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs275" %}