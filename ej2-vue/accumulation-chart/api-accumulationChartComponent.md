---
layout: post
title: Api accumulationChartComponent in Vue Accumulation chart component | Syncfusion
description: Learn here all about Api accumulationChartComponent in Syncfusion Vue Accumulation chart component of Syncfusion Essential JS 2 and more.
control: Api accumulationChartComponent 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Api accumulationChartComponent in Vue Accumulation chart component

## Properties

### accumulationDataLabelModule [`AccumulationDataLabel`](https://ej2.syncfusion.com/vue/documentation/api-accumulationDataLabel.html)

`accumulationDataLabelModule` is used to manipulate and add dataLabel in accumulation chart.

### accumulationLegendModule [`AccumulationLegend`](https://ej2.syncfusion.com/vue/documentation/api-accumulationLegend.html)

`accumulationLegendModule` is used to manipulate and add legend in accumulation chart.

### accumulationSelectionModule [`AccumulationSelection`](https://ej2.syncfusion.com/vue/documentation/api-accumulationSelection.html)

`accumulationSelectionModule` is used to manipulate and add selection in accumulation chart.

### accumulationTooltipModule [`AccumulationTooltip`](https://ej2.syncfusion.com/vue/documentation/api-accumulationTooltip.html)

`accumulationTooltipModule` is used to manipulate and add tooltip in accumulation chart.

### annotationModule [`AccumulationAnnotation`](https://ej2.syncfusion.com/vue/documentation/api-accumulationAnnotation.html)

`annotationModule` is used to manipulate and add annotation in chart.

### annotations `AccumulationAnnotationSettingsModel[]`

The configuration for annotation in chart.

### background `string`

The background color of the chart, which accepts value in hex, rgba as a valid CSS color string.

Defaults to *null*

### border `BorderModel`

Options for customizing the color and width of the chart border.

### dataSource `Object` &#124;  `DataManager`

Specifies the dataSource for the AccumulationChart. It can be an array of JSON objects or an instance of DataManager.
```
<div id='Pie'></div>
```
```ts
let dataManager: DataManager = new DataManager({
        url: 'http://mvc.syncfusion.com/Services/Northwnd.svc/Tasks/'
});
let query: Query = new Query().take(50).where('Estimate', 'greaterThan', 0, false);
let pie: AccumulationChart = new AccumulationChart({
...
    dataSource: dataManager,
    series: [{
       xName: 'Id',
       yName: 'Estimate',
       query: query
   }],
...
});
pie.appendTo('#Pie');
```

Defaults to *''*

### enablePersistence `boolean`

Enable or disable persisting component's state between page reloads.

Defaults to *false*

### enableRtl `boolean`

Enable or disable rendering component in right to left direction.

Defaults to *false*

### enableSmartLabels `boolean`

If set true, labels for the point will be placed smartly without overlapping.

Defaults to *true*

### height `string`

The height of the chart as a string in order to provide input as both like '100px' or '100%'.
If specified as '100%, chart will render to the full height of its parent element.

Defaults to *null*

### isMultiSelect `boolean`

If set true, enables the multi selection in accumulation chart. It requires `selectionMode` to be `Point`.

Defaults to *false*

### legendSettings `LegendSettingsModel`

Options for customizing the legend of accumulation chart.

### locale `string`

Overrides the global culture and localization value for this component. Default global culture is 'en-US'.

Defaults to *undefined*

### margin `MarginModel`

 Options to customize the left, right, top and bottom margins of accumulation chart.

### selectedDataIndexes `IndexesModel[]`

Specifies the point indexes to be selected while loading a accumulation chart.
It requires `selectionMode` to be `Point`.
```
<div id='Pie'></div>
```
```ts
let pie: AccumulationChart = new AccumulationChart({
...
  selectionMode: 'Point',
  selectedDataIndexes: [ { series: 0, point: 1},
                         { series: 2, point: 3} ],
...
});
pie.appendTo('#Pie');
```

Defaults to *[]*

### selectionMode `string`

Specifies whether point has to get selected or nothttps://ej2.syncfusion.com/vue/documentation Takes value either 'None 'or 'Point'

Defaults to *None*

### series [`AccumulationSeriesModel[]`](./api-accumulationSeriesModel.html)

The configuration for series in accumulation chart.

### theme `string`

Specifies the theme for accumulation chart.

Defaults to *'Material'*

### title `string`

Title for accumulation chart

Defaults to *null*

### titleStyle `FontModel`

Options for customizing the `title` of accumulation chart.

### tooltip `TooltipSettingsModel`

Options for customizing the tooltip of accumulation chart.

### width `string`

The width of the chart as a string in order to provide input as both like '100px' or '100%'.
If specified as '100%, chart will render to the full width of its parent element.

Defaults to *null*

## Methods

### export

Handles the export method for accumulation control.

Returns *void*

### getModuleName

To get Module name
 @private

Returns *string*

### print

Handles the print method for accumulation chart control.

Returns *void*

### setAnnotationValue

Method to set the annotation content dynamically for accumulation.

Returns *void*

## Events

### animationComplete [`EmitType<IAccAnimationCompleteEventArgs>`](https://ej2.syncfusion.com/vue/documentation/api-iAccAnimationCompleteEventArgs.html)

Triggers after animation gets completed for series.

### annotationRender  `EmitType<IAnnotationRenderEventArgs>`

Triggers before the annotation gets rendered.

### beforePrint  `EmitType<IPrintEventArgs>`

Triggers before the prints gets started.

### chartMouseClick  `EmitType<IMouseEventArgs>`

Triggers on clicking the accumulation chart.

### chartMouseDown  `EmitType<IMouseEventArgs>`

Triggers on mouse down.

### chartMouseLeave  `EmitType<IMouseEventArgs>`

Triggers while cursor leaves the accumulation chart.

### chartMouseMove  `EmitType<IMouseEventArgs>`

Triggers on hovering the accumulation chart.

### chartMouseUp  `EmitType<IMouseEventArgs>`

Triggers on mouse up.

### legendRender  `EmitType<ILegendRenderEventArgs>`

Triggers before the legend gets rendered.

### load [`EmitType<IAccLoadedEventArgs>`](https://ej2.syncfusion.com/vue/documentation/api-iAccLoadedEventArgs.html)

Triggers before accumulation chart load.

### loaded [`EmitType<IAccLoadedEventArgs>`](https://ej2.syncfusion.com/vue/documentation/api-iAccLoadedEventArgs.html)

Triggers after accumulation chart loaded.

### pointClick  `EmitType<IPointEventArgs>`

Triggers on point click.

### pointMove  `EmitType<IPointEventArgs>`

Triggers on point move.

### pointRender [`EmitType<IAccPointRenderEventArgs>`](https://ej2.syncfusion.com/vue/documentation/api-iAccPointRenderEventArgs.html)

Triggers before each points for series gets rendered.

### resized [`EmitType<IAccResizeEventArgs>`](https://ej2.syncfusion.com/vue/documentation/api-iAccResizeEventArgs.html)

Triggers after window resize.

### seriesRender [`EmitType<IAccSeriesRenderEventArgs>`](https://ej2.syncfusion.com/vue/documentation/api-iAccSeriesRenderEventArgs.html)

Triggers before the series gets rendered.

### textRender [`EmitType<IAccTextRenderEventArgs>`](https://ej2.syncfusion.com/vue/documentation/api-iAccTextRenderEventArgs.html)

Triggers before the data label for series gets rendered.

### tooltipRender [`EmitType<IAccTooltipRenderEventArgs>`](https://ej2.syncfusion.com/vue/documentation/api-iAccTooltipRenderEventArgs.html)

Triggers before the tooltip for series gets rendered.
