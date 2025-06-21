---
layout: post
title: Scrolling in Vue Treegrid component | Syncfusion
description: Learn here all about Scrolling in Syncfusion Vue Treegrid component of Syncfusion Essential JS 2 and more.
control: Scrolling 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Scrolling in Vue Treegrid component

The scrollbar will be displayed in the treegrid when content exceeds the element [`width`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#width) or [`height`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#height). The vertical and horizontal scrollbars will be displayed based on the following criteria:

* The vertical scrollbar appears when the total height of rows present in the treegrid exceeds its element height.
* The horizontal scrollbar appears when the sum of columns width exceeds the treegrid element width.
* The [`height`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#height) and [`width`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#width) are used to set the treegrid height and width, respectively.

> The default value for [`height`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#height) and [`width`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#width) is `auto`.

## Set width and height

To specify the [`width`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#width) and [`height`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#height) of the scroller in the pixel, set the pixel value to a number.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/scroll/default-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/scroll/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/scroll/default-cs1" %}

## Responsive with parent container

Specify the [`width`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#width) and [`height`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#height) as `100%` to make the treegrid element fill its parent container.

Setting the [`height`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#height) to `100%` requires the treegrid parent element to have explicit height.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/scroll/default-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/scroll/default-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/scroll/default-cs2" %}

## Sticky header

The Syncfusion Vue TreeGrid provides a useful feature to keep the column headers fixed (sticky) while scrolling through large datasets. This ensures that the headers remain visible at all times, enhancing user experience by making it easier to understand the context of the data displayed, especially when dealing with wide or long hierarchical data.

For example, in a project management application, users often need to scroll through a detailed list of tasks and subtasks. When the dataset is large, scrolling down can cause confusion if the column headers scroll out of view, making it difficult to remember what each column represents. By enabling sticky headers, the column headers remain visible even while scrolling, allowing users to easily keep track of the data context.

To enable sticky headers in the TreeGrid, you can simply set the `enableStickyHeader` property to **true**. This makes the column headers stick to the top of the TreeGrid container or its parent scrolling container when you scroll vertically.

The following sample demonstrates how to enable or disable the sticky header in the TreeGrid using a [Switch](https://ej2.syncfusion.com/vue/documentation/switch/getting-started) and its [change](https://ej2.syncfusion.com/vue/documentation/api/switch#change) event:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/scroll/scrolling-sticky-header/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/scroll/scrolling-sticky-header/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/scroll/scrolling-sticky-header" %}

## Scroll to selected row

You can scroll the treegrid content to the selected row position by using the [`rowSelected`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#rowselected) event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/scroll/selectrow-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/scroll/selectrow-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/scroll/selectrow-cs1" %}
