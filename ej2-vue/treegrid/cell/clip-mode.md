---
layout: post
title: Vue TreeGrid Clip Mode | Syncfusion
description: Learn how to configure clip mode in Vue TreeGrid to manage overflowing cell content using clipping, ellipsis, or ellipsis with tooltip display.
control: Clip mode 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Clip Mode in Vue TreeGrid

The clip mode provides options to display its overflow cell content and it can be defined by the [`columns.clipMode`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column#clipmode) property.

There are three types of [`clipMode`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column#clipmode). They are:

* **`Clip`**: Truncates the cell content when it overflows its area.
* **`Ellipsis`**: Displays ellipsis when the cell content overflows its area.
* **`EllipsisWithTooltip`**: Displays ellipsis when the cell content overflows its area, also it will display the tooltip while hover on ellipsis is applied.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/cell/default-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/cell/default-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/cell/default-cs5" %}

>By default, [`columns.clipMode`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column#clipmode) value is `Ellipsis`.