---
layout: post
title: Detail template in Vue Grid component | Syncfusion
description: Learn here all about Detail template in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Detail template 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Detail template in Vue Grid component

The detail template in the Grid component allows you to display additional information about a specific row in the grid by expanding or collapsing detail content. This feature is useful when you need to show additional data or custom content that is specific to each row in the grid. You can use the [detailTemplate](https://ej2.syncfusion.com/vue/documentation/api/grid/#detailtemplate) property to define an HTML template for the detail row. This template can include any HTML element or Vue component that you want to display as detail content.

Here's an example of using the `detailTemplate` property in the grid component:

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/row/row-detail/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/row/row-detail" %}

## Rendering custom component

The Grid component provides a powerful feature that allows you to render custom components inside the detail row. This feature is helpful when you need to add additional information or functionality for a specific row in the grid.

To render a custom component inside the detail row, you need to define a template using the [detailTemplate](https://ej2.syncfusion.com/vue/documentation/api/grid/#detailtemplate)  property and handle the [detailDataBound](https://ej2.syncfusion.com/vue/documentation/api/grid/#detaildatabound) event.This template can include any HTML element or Vue component that you want to display as the detail content.

The `detailDataBound` event is an event that is triggered after a detail row is bound to data. This event provides an object of type [DetailDataBoundEventArgs](https://ej2.syncfusion.com/vue/documentation/api/grid/detaildataboundeventargs/) as a parameter.

For example, to render grid inside the detail row, place an HTML div element as the `detailTemplate` and render the DIV element as grid component in the `detailDataBound` event.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/row/row-detail-custom/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/row/row-detail-custom" %}

## Expand by external button

The Grid provides a feature that allows you to expand the detail row of a grid using an external button. By default, detail rows render in a collapsed state, but this feature enables users to view additional details associated with a particular row. 

To achieve expanding the detail row of a grid using an external button, you need to invoke the [expand](https://ej2.syncfusion.com/vue/documentation/api/grid/detailRow/#expand) method provided by the **detailRowModule** object of the Syncfusion Grid library. This method will expand the detail row of a specific grid row.

Here is an example of how to use the `expand` method to expand a detail row:

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/row/row-detail-expand/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/row/row-detail-expand" %}

## Customize detail template icon

The detail template icon in the Syncfusion Grid is used to expand or collapse the detail content of a row. By default, the icon represents a right arrow for the collapsed state and a down arrow for the expanded state. If you want to customize this icon, you can achieve it by overriding the following CSS styles:

```css

  .e-grid .e-icon-grightarrow::before {
      content: "\e7a9";
  }
  .e-grid .e-icon-gdownarrow::before {
      content: "\e7fe";
  }

```

Here is an example of how to customize the detail template icon:

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/row/row-detail-icon/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/row/row-detail-icon" %}

## Limitations

Detail template is not supported with the following features:

* Frozen rows and columns
* Immutable mode
* Infinite scrolling
* Virtual scrolling
* Print
* Row template
* Row spanning
* Column spanning
* Lazy load grouping
* State persistence
