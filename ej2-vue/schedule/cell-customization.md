---
layout: post
title: Cell customization in Vue Schedule component | Syncfusion
description: Learn here all about Cell customization in Syncfusion Vue Schedule component of Syncfusion Essential JS 2 and more.
control: Cell customization 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Cell Customization in Vue Schedule Component

Cells in the Vue Schedule component can be customized using either the `cellTemplate` option or the [`renderCell`](https://ej2.syncfusion.com/vue/documentation/api/schedule#rendercell) event. These options allow modifying cell appearance, content, and behavior based on specific requirements across all views..

## Setting cell dimensions in all views

The height and width of Schedule cells can be customized using the [`cssClass`](https://ej2.syncfusion.com/vue/documentation/api/schedule#cssclass) property. Applying a custom CSS class enables overriding the default styles applied to cells.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/cell-dimension-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/cell-dimension-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/cell-dimension-cs1" %}

## Check for Cell Availability

The [`isSlotAvailable`](https://ej2.syncfusion.com/vue/documentation/api/schedule#isslotavailable) method checks whether given time range slots are available for event creation or if they are already occupied.. In the following code example, if a specific time slot already contains an appointment, then no more appointments can be added to that cell.

>Note: The `isSlotAvailable` method evaluates availability only within the current view’s date range. It does not check recurrence occurrences that fall outside the displayed range.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/cell-dimension-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/cell-dimension-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/cell-dimension-cs2" %}

## Customizing Cells in all the Views

Cells can be customized visually using templates or through the [`renderCell`](https://ej2.syncfusion.com/vue/documentation/api/schedule#rendercell) event across all views of the Schedule component.

### Using Template

The [`cellTemplate`](../api/schedule#celltemplate) property accepts a template string and allows applying custom content such as background images, text, or formatted values based on date values.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/cell-dimension-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/cell-dimension-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/cell-dimension-cs3" %}

### Using RenderCell Event

The [`cellTemplate`](../api/schedule#celltemplate) is the [`renderCell`](https://ej2.syncfusion.com/vue/documentation/api/schedule#rendercell) event, which can also be used to customize the cells with appropriate images or formatted text values.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/cell-dimension-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/cell-dimension-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/cell-dimension-cs4" %}

You can customize cells such as work cells, month cells, all-day cells, header cells, resource header cells using [`renderCell`](https://ej2.syncfusion.com/vue/documentation/api/schedule#rendercell) event by checking the [`elementType`](https://ej2.syncfusion.com/vue/documentation/api/schedule/renderCellEventArgs#elementtype) option within the event. You can check elementType with any of the following.

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

## Customizing Cell Header in Month View

The month view cell header can be customized using the [`cellHeaderTemplate`](../api/schedule#cellheadertemplate) property, which accepts a template string or HTMLElement and includes the corresponding date.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/cell-dimension-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/cell-dimension-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/cell-dimension-cs5" %}

## Customizing the Minimum and Maximum Date Values

Providing the [`minDate`](../api/schedule#mindate) and  [`maxDate`](../api/schedule#maxdate) property with some date values, allows the Scheduler to set the minimum and maximum date range. The Scheduler date that lies beyond this minimum and maximum date range will be in a disabled state so that the date navigation will be blocked beyond the specified date range.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/cell-dimension-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/cell-dimension-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/cell-dimension-cs6" %}

>By default, the [`minDate`](../api/schedule#mindate) property value is set to new Date(1900, 0, 1) and [`maxDate`](../api/schedule#maxdate) property value is set to new Date(2099, 11, 31). The user can also set the customized `minDate` and `maxDate` property values.

## Customizing the Weekend Cells Background Color

Weekend cell background color can be customized using the [`renderCell`](https://ej2.syncfusion.com/vue/documentation/api/schedule#rendercell) event by checking the [`elementType`](https://ej2.syncfusion.com/vue/documentation/api/schedule/renderCellEventArgs#elementtype) property.

```ts

onRenderCell: function (args) {
    if (args.elementType == "workCells") {
        // To change the color of weekend columns in week view
        if (args.date) {
            if (args.date.getDay() === 6) {
                (args.element).style.background = '#ffdea2';
            }
            if (args.date.getDay() === 0) {
                (args.element).style.background = '#ffdea2';
            }
        }
    }
}

```

And, the background color for weekend cells in the Month view through the [`cssClass`](https://ej2.syncfusion.com/vue/documentation/api/schedule#cssclass) property, which overrides the default CSS applied on cells.

```css

.schedule-cell-customization.e-schedule .e-month-view .e-work-cells:not(.e-work-days) {
    background-color: #f08080;
}

```

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/weekend-cell-color/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/weekend-cell-color/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/weekend-cell-color" %}

## How to Disable Multiple Cell and Row Selection in Schedule

By default, the [`allowMultiCellSelection`](../api/schedule#allowmulticellselection) and [`allowMultiRowSelection`](../api/schedule#allowmultirowselection) properties of the Schedule are set to `true`. So, the Schedule allows user to select multiple cells and rows. If the user want to disable this multiple cell and row selection. The user can disable this feature by setting up `false` to these properties.

> Refer to the [Vue Scheduler](https://www.syncfusion.com/vue-components/vue-scheduler) feature tour page for detailed feature information. Explore the [Vue Scheduler example](https://ej2.syncfusion.com/vue/demos/#/tailwind3/schedule/overview.html) for demonstrations of data binding and interaction.