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

The entire layout dimensions are assigned based on the height and width of the parent element. Hence, a responsive or static layout can be created by assigning a percentage or static dimension values to the parent element. The layout adapts to mobile resolutions by transforming the entire layout into a stacked orientation, so that, the panels will be displayed in a vertical column.

The **Dashboard Layout** is a grid structured component which can be split into subsections of equal size known as cells. The total number of cells in each row is defined by using the [`columns`](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout/#columns) property of the component. The width of each cell will be auto calculated based on the total number of cells placed in a row and the height of a cell will be same as that of its width. However, the height of these cells can also be configured to any desired size using the [`cellAspectRatio`](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout/#cellaspectratio) property (cellwidth/cellheight ratio) which defines the cell width to height ratio.

The number of rows within the layout has no limits and can have any number of rows based on the panels count and position. Panels which acts as data containers will be placed or positioned over these cells.

## Modifying cell size

In a dashboard, the data to be held by the panel in a cell may be of different size, hence different cell dimensions may be required in different scenarios. In this case, the size of these grid cells can be modified to the required size using the [`columns`](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout/#columns) and [`cellAspectRatio`](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout/#cellAspectRatio) properties.

The following sample demonstrates how to modify a cell size using the [`columns`](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout/#columns) and [`cellAspectRatio`](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout/#cellaspectratio) properties. In the following sample the width of the parent element is divided into 5 equal cells based on the columns property value resulting the width of each cell as 100 px. The height of these cells will be 50 px based on the cellAspectRatio value 100/50 (i.e. for every 100 px of width, 50 px will be the height of the cell).

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

The spacing between each panel in a row and column can be defined using the [`cellSpacing`](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout/#cellspacing) property. Adding spacing between the panels will make the layout effective and provides a clear data representation.

The following sample demonstrates the usage of the [`cellSpacing`](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout/#cellspacing) property which helps in a neat and clear representation of a data.

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

These cells combinedly forms a grid-structured layout which will be hidden initially. This grid structured layout can be made visible by enabling the [`showGridLines`](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout/#showgridlines) property, which clearly pictures the cells split-up within the layout. These gridlines will be helpful in panels sizing and placement within the layout during initial designing of a dashboard.

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

It is possible to render the Dashboard Layout in right-to-left direction by setting the [enableRtl](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout/#enablertl) API to true.

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

> You can refer to our [Vue Dashboard Layout](https://www.syncfusion.com/vue-ui-components/vue-dashboard-layout) feature tour page for its groundbreaking feature representations. You can also explore our [Vue Dashboard Layout example](https://ej2.syncfusion.com/vue/demos/#/material/dashboard-layout/default.html) to knows how to present and manipulate data.