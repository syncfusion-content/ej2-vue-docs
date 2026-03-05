---
layout: post
title: Setting size of cells in Vue Dashboard Layout component | Syncfusion
description: Learn here all about Setting size of cells in Syncfusion Vue Dashboard Layout component of Syncfusion Essential JS 2 and more.
control: Setting size of cells 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Setting size of cells in Vue Dashboard Layout component

The layout dimensions are determined by the height and width of the parent element. A responsive or static layout can be created by assigning percentage or fixed dimensions to the parent element. The layout adapts to mobile resolutions by transforming the entire layout into a stacked orientation, so that, the panels will be displayed in a vertical column.

The **Dashboard Layout** is a grid-structured component divided into equal subsections called cells. The total number of cells per row is defined by the [`columns`](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout#columns) property. Each cell's width is calculated automatically based on the number of cells in a row; by default a cell's height equals its width. However, the height of these cells can also be configured to any desired size using the [`cellAspectRatio`](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout#cellaspectratio) property (cell width/cell height ratio) which defines the cell width to height ratio.

Rows are not limited and increase based on panel count and positions. Panels act as data containers and are placed over these cells.

## Modifying cell size

In a dashboard, the data to be held by the panel in a cell may be of different size, hence different cell dimensions may be required in different scenarios. In this case, the size of these grid cells can be modified to the required size using the [`columns`](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout#columns) and [`cellAspectRatio`](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout#cellAspectRatio) properties.

The following sample demonstrates adjusting cell size using [`columns`](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout#columns) and [`cellAspectRatio`](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout#cellaspectratio) properties. In the sample, the parent width is divided into five equal cells based on the columns property value resulting the width of each cell as 100 px. The height of these cells will be 50 px based on the cellAspectRatio value 100/50 (i.e. for every 100 px of width, 50 px will be the height of the cell).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/dashboard-layout/modifying-cell-size-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/dashboard-layout/modifying-cell-size-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dashboard-layout/modifying-cell-size-cs1" %}

## Setting cell spacing

Define the spacing between panels using the [`cellSpacing`](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout#cellspacing) property. Spacing improves layout clarity and separation between panels.

The following sample demonstrates using the [`cellSpacing`](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout#cellspacing) property which helps in a neat and clear representation of a data.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/dashboard-layout/setting-cell-spacing-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/dashboard-layout/setting-cell-spacing-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dashboard-layout/setting-cell-spacing-cs3" %}

## Graphical representation of layout

The grid-structured layout is hidden by default. Enable the [`showGridLines`](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout#showgridlines) property, which clearly pictures the cells split-up within the layout. These gridlines will be helpful in panels sizing and placement within the layout during initial designing of a dashboard.

In the following sample, the grid lines indicate the cells split-up of the layout and the data containers placed over these cells are known as panels.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/dashboard-layout/graphical-layout-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/dashboard-layout/graphical-layout-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dashboard-layout/graphical-layout-cs1" %}

## Rendering component in right-to-left direction

Render the Dashboard Layout in right-to-left direction by setting the [enableRtl](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout#enablertl) API to true.

The following sample demonstrates Dashboard Layout in right-to-left direction.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/dashboard-layout/rtl-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/dashboard-layout/rtl-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dashboard-layout/rtl-cs1" %}

> Refer to the [Vue Dashboard Layout](https://www.syncfusion.com/vue-ui-components/vue-dashboard-layout) feature tour page for its groundbreaking feature representations. Also explore the [Vue Dashboard Layout example](https://ej2.syncfusion.com/vue/demos/#/material3/dashboard-layout/default.html) to knows how to present and manipulate data.