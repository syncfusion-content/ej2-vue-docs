---
layout: post
title: Cell customization in Vue Schedule component | Syncfusion
description: Learn here all about Cell customization in Syncfusion Vue Schedule component of Syncfusion Essential JS 2 and more.
control: Cell customization 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Cell customization in Vue Schedule component

The cells of the Scheduler can be easily customized either using the cell template or `RenderCell` event.

## Setting cell dimensions in all views

The height and width of the Scheduler cells can be customized either to increase or reduce its size through the `cssClass` property, which overrides the default CSS applied on cells.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/schedule/cell-dimension-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/cell-dimension-cs1" %}

## Check for cell availability

You can check whether the given time range slots are available for event creation or already occupied by other events using the `isSlotAvailable` method. In the following code example, if a specific time slot already contains an appointment, then no more appointments can be added to that cell.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/schedule/cell-dimension-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/cell-dimension-cs2" %}

## Customizing cells in all the views

It is possible to customize the appearance of the cells using both template options and `renderCell` event on all the views.

### Using template

The [`cellTemplate`](../api/schedule/#celltemplate) option accepts the template string and is used to customize the cell background with specific images or appropriate text on the given date values.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/schedule/cell-dimension-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/cell-dimension-cs3" %}

### Using renderCell event

An alternative to [`cellTemplate`](../api/schedule/#celltemplate) is the `renderCell` event, which can also be used to customize the cells with appropriate images or formatted text values.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/schedule/cell-dimension-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/cell-dimension-cs4" %}

You can customize cells such as work cells, month cells, all-day cells, header cells, resource header cells using `renderCell` event by checking the `elementType` option within the event. You can check elementType with any of the following.

| Element type | Description |
|-------|---------|
| dateHeader | triggers on header cell rendering.|
| monthDay | triggers on header cell in month view rendering.|
| resourceHeader | triggers on resource header cell rendering.|
| alldayCells | triggers on all day cell rendering.|
| emptyCells | triggers on empty cell rendering on header bar.|
| resourceGroupCells | triggers on rendering of work cells for parent resource.|
| workCells | triggers on work cell rendering.|
| monthCells | triggers on month cell rendering.|
| majorSlot | triggers on major time slot cell rendering.|
| minorSlot | triggers on minor time slot cell rendering.|
| weekNumberCell | triggers on cell displaying week number.|

## Customizing cell header in month view

The month header of each date cell in the month view can be customized using the [`cellHeaderTemplate`](../api/schedule/#cellheadertemplate) option which accepts the string or HTMLElement. The corresponding date can be accessed with the template.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/schedule/cell-dimension-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/cell-dimension-cs5" %}

## Customizing the minimum and maximum date values

Providing the [`minDate`](../api/schedule/#mindate) and  [`maxDate`](../api/schedule/#maxdate) property with some date values, allows the Scheduler to set the minimum and maximum date range. The Scheduler date that lies beyond this minimum and maximum date range will be in a disabled state so that the date navigation will be blocked beyond the specified date range.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/schedule/cell-dimension-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/cell-dimension-cs6" %}

>By default, the [`minDate`](../api/schedule/#mindate) property value is set to new Date(1900, 0, 1) and [`maxDate`](../api/schedule/#maxdate) property value is set to new Date(2099, 11, 31). The user can also set the customized `minDate` and `maxDate` property values.

## How to disable multiple cell and row selection in Schedule

By default, the [`allowMultiCellSelection`](../api/schedule/#allowmulticellselection) and [`allowMultiRowSelection`](../api/schedule/#allowmultirowselection) properties of the Schedule are set to `true`. So, the Schedule allows user to select multiple cells and rows. If the user want to disable this multiple cell and row selection. The user can disable this feature by setting up `false` to these properties.

> You can refer to our [Vue Scheduler](https://www.syncfusion.com/vue-components/vue-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [Vue Scheduler example](https://ej2.syncfusion.com/vue/demos/#/material/schedule/overview.html) to knows how to present and manipulate data.