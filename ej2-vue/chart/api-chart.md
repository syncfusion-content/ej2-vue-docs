---
layout: post
title: Api chart in Vue Chart component | Syncfusion
description: Learn here all about Api chart in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Api chart 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Api chart in Vue Chart component

Represents the Chart control.
```
<div id="chart"/>
<script>
  var chartObj = new Chart({ isResponsive : true });
  chartObj.appendTo("#chart");
</script>
```

## Properties

### accumulationDistributionIndicatorModule [`AccumulationDistributionIndicator`](https://ej2.syncfusion.com/vue/documentation/api-accumulationDistributionIndicator.html)

`accumulationDistributionIndicatorModule` is used to predict the market trend using Accumulation Distribution approach

### annotationModule [`ChartAnnotation`](https://ej2.syncfusion.com/vue/documentation/api-chartAnnotation.html)

`annotationModule` is used to manipulate and add annotation in chart.

### annotations `ChartAnnotationSettingsModel[]`

The configuration for annotation in charthttps://ej2.syncfusion.com/vue/documentation

### areaSeriesModule [`AreaSeries`](./api-areaSeries.html)

`areaSeriesModule` is used to add area series in the chart.

### atrIndicatorModule [`AtrIndicator`](https://ej2.syncfusion.com/vue/documentation/api-atrIndicator.html)

`atrIndicatorModule` is used to predict the market trend using ATR approach

### axes `AxisModel[]`

Secondary axis collection for the charthttps://ej2.syncfusion.com/vue/documentation

### background `string`

The background color of the chart that accepts value in hex and rgba as a valid CSS color string.

Defaults to *null*

### barSeriesModule [`BarSeries`](./api-barSeries.html)

`barSeriesModule` is used to add bar series to the chart.

### bollingerBandsModule [`BollingerBands`](https://ej2.syncfusion.com/vue/documentation/api-bollingerBands.html)

`bollingerBandsModule` is used to predict the market trend using Bollinger approach

### border [`BorderModel`](https://ej2.syncfusion.com/vue/documentation/api-borderModel.html)

Options for customizing the color and width of the chart border.

### boxAndWhiskerSeriesModule [`BoxAndWhiskerSeries`](https://ej2.syncfusion.com/vue/documentation/api-boxAndWhiskerSeries.html)

`boxAndWhiskerSeriesModule` is used to add line series to the chart.

### bubbleSeriesModule [`BubbleSeries`](https://ej2.syncfusion.com/vue/documentation/api-bubbleSeries.html)

`bubbleSeries` is used to add bubble series in chart.

### candleSeriesModule [`CandleSeries`](https://ej2.syncfusion.com/vue/documentation/api-candleSeries.html)

'CandleSeriesModule' is used to add candle series in the chart.

### categoryModule [`Category`](https://ej2.syncfusion.com/vue/documentation/api-category.html)

`categoryModule` is used to manipulate and add category axis to the chart.

### chartArea [`ChartAreaModel`](https://ej2.syncfusion.com/vue/documentation/api-chartAreaModel.html)

Options for configuring the border and background of the chart area.

### columnSeriesModule [`ColumnSeries`](https://ej2.syncfusion.com/vue/documentation/api-columnSeries.html)

`columnSeriesModule` is used to add column series to the chart.

### columns `ColumnModel[]`

Options to split chart into multiple plotting areas verticallyhttps://ej2.syncfusion.com/vue/documentation
Each object in the collection represents a plotting area in the chart.

### crosshair [`CrosshairSettingsModel`](./api-crosshairSettingsModel.html)

Options for customizing the crosshair of the chart.

### crosshairModule [`Crosshair`](https://ej2.syncfusion.com/vue/documentation/api-crosshair.html)

`crosshairModule` is used to manipulate and add crosshair to the chart.

### dataLabelModule [`DataLabel`](https://ej2.syncfusion.com/vue/documentation/api-dataLabel.html)

`dataLabelModule` is used to manipulate and add data label to the series.

### dataSource `Object` &#124;  `DataManager`

Specifies the DataSource for the chart. It can be an array of JSON objects or an instance of DataManager.
```
<div id='Chart'></div>
```
```ts
let dataManager: DataManager = new DataManager({
        url: 'http://mvc.syncfusion.com/Services/Northwnd.svc/Tasks/'
});
let query: Query = new Query().take(50).where('Estimate', 'greaterThan', 0, false);
let chart: Chart = new Chart({
...
 dataSource:dataManager,
  series: [{
       xName: 'Id',
       yName: 'Estimate',
       query: query
   }],
...
});
chart.appendTo('#Chart');
```

Defaults to *''*

### dateTimeCategoryModule [`DateTimeCategory`](https://ej2.syncfusion.com/vue/documentation/api-dateTimeCategory.html)

`dateTimeCategoryModule` is used to manipulate date time and category axis

### dateTimeModule [`DateTime`](https://ej2.syncfusion.com/vue/documentation/api-dateTime.html)

`datetimeModule` is used to manipulate and add dateTime axis to the chart.

### description `string`

Description for chart.

Defaults to *null*

### eMAIndicatorModule [`EmaIndicator`](https://ej2.syncfusion.com/vue/documentation/api-emaIndicator.html)

`eMAIndicatorModule` is used to predict the market trend using EMA approach

### enablePersistence `boolean`

Enable or disable persisting component's state between page reloads.

Defaults to *false*

### enableRtl `boolean`

Enable or disable rendering component in right to left direction.

Defaults to *false*

### enableSideBySidePlacement `boolean`

To enable the side by side placing the points for column type series.

Defaults to *true*

### errorBarModule [`ErrorBar`](https://ej2.syncfusion.com/vue/documentation/api-errorBar.html)

`errorBarModule` is used to manipulate and add errorBar for series.

### height `string`

The height of the chart as a string accepts input both as '100px' or '100%'.

If specified as '100%, chart renders to the full height of its parent element.

Defaults to *null*

### hiloOpenCloseSeriesModule [`HiloOpenCloseSeries`](https://ej2.syncfusion.com/vue/documentation/api-hiloOpenCloseSeries.html)

hiloOpenCloseSeriesModule is used to add hilo series in chart

### hiloSeriesModule [`HiloSeries`](https://ej2.syncfusion.com/vue/documentation/api-hiloSeries.html)

hiloSeriesModule is used to add hilo series in chart

### histogramSeriesModule [`HistogramSeries`](https://ej2.syncfusion.com/vue/documentation/api-histogramSeries.html)

histogramSeriesModule is used to add histogram series in chart

### indicators `TechnicalIndicatorModel[]`

Defines the collection of technical indicators, that are used in financial markets

### isMultiSelect `boolean`

If set true, enables the multi selection in charthttps://ej2.syncfusion.com/vue/documentation It requires `selectionMode` to be `Point` | `Series` | or `Cluster`.

Defaults to *false*

### isTransposed `boolean`

It specifies whether the chart should be render in transposed manner or not.

Defaults to *false*

### legendModule [`Legend`](./api-legend.html)

`legendModule` is used to manipulate and add legend to the chart.

### legendSettings [`LegendSettingsModel`](https://ej2.syncfusion.com/vue/documentation/api-legendSettingsModel.html)

Options for customizing the legend of the chart.

### lineSeriesModule [`LineSeries`](https://ej2.syncfusion.com/vue/documentation/api-lineSeries.html)

`lineSeriesModule` is used to add line series to the chart.

### locale `string`

Overrides the global culture and localization value for this component. Default global culture is 'en-US'.

Defaults to *undefined*

### logarithmicModule [`Logarithmic`](https://ej2.syncfusion.com/vue/documentation/api-logarithmic.html)

`logarithmicModule` is used to manipulate and add log axis to the chart.

### macdIndicatorModule [`MacdIndicator`](https://ej2.syncfusion.com/vue/documentation/api-macdIndicator.html)

`macdIndicatorModule` is used to predict the market trend using Macd approach

### margin [`MarginModel`](https://ej2.syncfusion.com/vue/documentation/api-marginModel.html)

 Options to customize left, right, top and bottom margins of the chart.

### momentumIndicatorModule [`MomentumIndicator`](https://ej2.syncfusion.com/vue/documentation/api-momentumIndicator.html)

`momentumIndicatorModule` is used to predict the market trend using Momentum approach

### multiColoredAreaSeriesModule [`MultiColoredAreaSeries`](https://ej2.syncfusion.com/vue/documentation/api-multiColoredAreaSeries.html)

`multiColoredAreaSeriesModule` is used to add multi colored area series to the chart.

### multiColoredLineSeriesModule [`MultiColoredLineSeries`](https://ej2.syncfusion.com/vue/documentation/api-multiColoredLineSeries.html)

`multiColoredLineSeriesModule` is used to add multi colored line series to the chart.

### multiLevelLabelModule [`MultiLevelLabel`](https://ej2.syncfusion.com/vue/documentation/api-multiLevelLabel.html)

`multiLevelLabelModule` is used to manipulate and add multiLevelLabel in chart.

### palettes `string[]`

Palette for the chart serieshttps://ej2.syncfusion.com/vue/documentation

Defaults to *[]*

### polarSeriesModule [`PolarSeries`](./api-polarSeries.html)

`polarSeriesModule` is used to add polar series in the chart.

### primaryXAxis [`AxisModel`](https://ej2.syncfusion.com/vue/documentation/api-axisModel.html)

Options to configure the horizontal axis.

### primaryYAxis [`AxisModel`](https://ej2.syncfusion.com/vue/documentation/api-axisModel.html)

Options to configure the vertical axis.

### radarSeriesModule [`RadarSeries`](https://ej2.syncfusion.com/vue/documentation/api-radarSeries.html)

 `radarSeriesModule` is used to add radar series in the chart.

### rangeAreaSeriesModule [`RangeAreaSeries`](https://ej2.syncfusion.com/vue/documentation/api-rangeAreaSeries.html)

`rangeAreaSeriesModule` is used to add rangeArea series in chart.

### rangeColumnSeriesModule [`RangeColumnSeries`](https://ej2.syncfusion.com/vue/documentation/api-rangeColumnSeries.html)

`rangeColumnSeriesModule` is used to add rangeColumn series to the chart.

### rows `RowModel[]`

Options to split Chart into multiple plotting areas horizontallyhttps://ej2.syncfusion.com/vue/documentation Each object in the collection represents a plotting area in the Chart.

### rsiIndicatorModule [`RsiIndicator`](./api-rsiIndicator.html)

`rSIIndicatorModule` is used to predict the market trend using RSI approach

### sMAIndicatorModule [`SmaIndicator`](https://ej2.syncfusion.com/vue/documentation/api-smaIndicator.html)

`sMAIndicatorModule` is used to predict the market trend using SMA approach

### scatterSeriesModule [`ScatterSeries`](https://ej2.syncfusion.com/vue/documentation/api-scatterSeries.html)

`scatterSeriesModule` is used to add scatter series to the chart.

### selectedDataIndexes `IndexesModel[]`

Specifies the point indexes to be selected while loading a chart. It requires `selectionMode` to be `Point` | `Series` | or `Cluster`.

```
<div id='Chart'></div>
```
```ts
let chart: Chart = new Chart({
...
  selectionMode: 'Point',
  selectedDataIndexes: [ { series: 0, point: 1},
                         { series: 2, point: 3} ],
...
});
chart.appendTo('#Chart');
```

Defaults to *[]*

### selectionMode `string`

Specifies whether series or data point has to be selectedhttps://ej2.syncfusion.com/vue/documentation They are,
* none: Disables the selection.
* series: selects a series.
* point: selects a point.
* cluster: selects a cluster of point
* dragXY: selects points by dragging with respect to both horizontal and vertical axes
* dragX: selects points by dragging with respect to horizontal axis.
* dragY: selects points by dragging with respect to vertical axis.

Defaults to *None*

### selectionModule [`Selection`](https://ej2.syncfusion.com/vue/documentation/api/chart#selectionmodule)

`selectionModule` is used to manipulate and add selection to the chart.

### series `SeriesModel[]`

The configuration for series in the charthttps://ej2.syncfusion.com/vue/documentation

### splineAreaSeriesModule [`SplineAreaSeries`](./api-splineAreaSeries.html)

`splineAreaSeriesModule` is used to add spline area series to the chart.

### splineSeriesModule [`SplineSeries`](https://ej2.syncfusion.com/vue/documentation/api-splineSeries.html)

`splineSeriesModule` is used to add spline series to the chart.

### stackingAreaSeriesModule [`StackingAreaSeries`](https://ej2.syncfusion.com/vue/documentation/api-stackingAreaSeries.html)

`stackingAreaSeriesModule` is used to add stacking area series to the chart.

### stackingBarSeriesModule [`StackingBarSeries`](https://ej2.syncfusion.com/vue/documentation/api-stackingBarSeries.html)

`stackingBarSeriesModule` is used to add stacking bar series to the chart.

### stackingColumnSeriesModule [`StackingColumnSeries`](https://ej2.syncfusion.com/vue/documentation/api-stackingColumnSeries.html)

`stackingColumnSeriesModule` is used to add stacking column series in the chart.

### stepAreaSeriesModule [`StepAreaSeries`](https://ej2.syncfusion.com/vue/documentation/api-stepAreaSeries.html)

`stepAreaSeriesModule` is used to add step area series to the chart.

### stepLineSeriesModule [`StepLineSeries`](https://ej2.syncfusion.com/vue/documentation/api-stepLineSeries.html)

`stepLineSeriesModule` is used to add step line series to the chart.

### stochasticIndicatorModule [`StochasticIndicator`](https://ej2.syncfusion.com/vue/documentation/api-stochasticIndicator.html)

`stochasticIndicatorModule` is used to predict the market trend using Stochastic approach

### stripLineModule [`StripLine`](https://ej2.syncfusion.com/vue/documentation/api-stripLine.html)

`stripLineModule` is used to manipulate and add stripLine in chart.

### tMAIndicatorModule [`TmaIndicator`](https://ej2.syncfusion.com/vue/documentation/api-tmaIndicator.html)

`tMAIndicatorModule` is used to predict the market trend using TMA approach

### tabIndex `number`

TabIndex value for the chart.

Defaults to *1*

### theme `string`

Specifies the theme for the chart.

Defaults to *'Material'*

### title `string`

Title of the chart

Defaults to *''*

### titleStyle [`FontModel`](https://ej2.syncfusion.com/vue/documentation/api-fontModel.html)

Options for customizing the title of the Chart.

### tooltip [`TooltipSettingsModel`](https://ej2.syncfusion.com/vue/documentation/api-tooltipSettingsModel.html)

Options for customizing the tooltip of the chart.

### tooltipModule [`Tooltip`](https://ej2.syncfusion.com/vue/documentation/api-tooltip.html)

`tooltipModule` is used to manipulate and add tooltip to the series.

### trendLineModule [`Trendlines`](https://ej2.syncfusion.com/vue/documentation/api-trendlines.html)

'TrendlineModule' is used to predict the market trend using trendlines

### useGroupingSeparator `boolean`

Specifies whether a grouping separator should be used for a number.

Defaults to *false*

### waterfallSeriesModule [`WaterfallSeries`](https://ej2.syncfusion.com/vue/documentation/api-waterfallSeries.html)

`waterfallSeries` is used to add waterfall series in chart.

### width `string`

The width of the chart as a string accepts input as both like '100px' or '100%'.

If specified as '100%, chart renders to the full width of its parent element.

Defaults to *null*

### zoomModule [`Zoom`](https://ej2.syncfusion.com/vue/documentation/api-zoom.html)

`zoomModule` is used to manipulate and add zooming to the chart.

### zoomSettings [`ZoomSettingsModel`](https://ej2.syncfusion.com/vue/documentation/api-zoomSettingsModel.html)

Options to enable the zooming feature in the chart.

## Methods

### addEventListener

Adds the handler to the given event listener.

Returns *void*

### addSeries

To add series for the chart

| Parameter | Type | Description |
|------|------|-------------|
| seriesCollection |  `SeriesModel[]` | Defines the series collection to be added in chart. |

Returns *void*

### appendTo

Appends the control within the given HTML element

| Parameter | Type | Description |
|------|------|-------------|
| selector (*optional*) |  `string` &#124;  `HTMLElement` | Target element where control needs to be appended<br> |

Returns *void*

### dataBind

When invoked, applies the pending property changes immediately to the component.

Returns *void*

### destroy

To destroy the widget

Returns *void*

### export

Handles the export method for chart control.

Returns *void*

### getLocalizedLabel

Gets the localized label by locale keyword.

Returns *string*

### getModuleName

Get component name

Returns *string*

### print

Handles the print method for chart control.

Returns *void*

### refresh

Applies all the pending property changes and render the component again.

Returns *void*

### removeEventListener

Removes the handler from the given event listener.

Returns *void*

### removeSeries

To Remove series for the chart

| Parameter | Type | Description |
|------|------|-------------|
| index |  `number` | Defines the series index to be remove in chart series |

Returns *void*

### setAnnotationValue

Method to set the annotation content dynamically for chart.

Returns *void*

### Inject

Dynamically injects the required modules to the component.

Returns *void*

## Events

### animationComplete [`EmitType<IAnimationCompleteEventArgs>`](https://ej2.syncfusion.com/vue/documentation/api-iAnimationCompleteEventArgs.html)

Triggers after animation is completed for the series.

### annotationRender [`EmitType<IAnnotationRenderEventArgs>`](https://ej2.syncfusion.com/vue/documentation/api-iAnnotationRenderEventArgs.html)

Triggers before the annotation gets rendered.

### axisLabelRender [`EmitType<IAxisLabelRenderEventArgs>`](https://ej2.syncfusion.com/vue/documentation/api-iAxisLabelRenderEventArgs.html)

Triggers before each axis label is rendered.

### axisMultiLabelRender [`EmitType<IAxisMultiLabelRenderEventArgs>`](https://ej2.syncfusion.com/vue/documentation/api-iAxisMultiLabelRenderEventArgs.html)

Triggers before each axis multi label is rendered.

### axisRangeCalculated [`EmitType<IAxisRangeCalculatedEventArgs>`](https://ej2.syncfusion.com/vue/documentation/api-iAxisRangeCalculatedEventArgs.html)

Triggers before each axis range is rendered.

### beforePrint [`EmitType<IPrintEventArgs>`](https://ej2.syncfusion.com/vue/documentation/api-iPrintEventArgs.html)

Triggers before the prints gets started.

### chartMouseClick [`EmitType<IMouseEventArgs>`](https://ej2.syncfusion.com/vue/documentation/api-iMouseEventArgs.html)

Triggers on clicking the chart.

### chartMouseDown [`EmitType<IMouseEventArgs>`](https://ej2.syncfusion.com/vue/documentation/api-iMouseEventArgs.html)

Triggers on mouse down.

### chartMouseLeave [`EmitType<IMouseEventArgs>`](https://ej2.syncfusion.com/vue/documentation/api-iMouseEventArgs.html)

Triggers when cursor leaves the chart.

### chartMouseMove [`EmitType<IMouseEventArgs>`](https://ej2.syncfusion.com/vue/documentation/api-iMouseEventArgs.html)

Triggers on hovering the chart.

### chartMouseUp [`EmitType<IMouseEventArgs>`](https://ej2.syncfusion.com/vue/documentation/api-iMouseEventArgs.html)

Triggers on mouse up.

### dragComplete [`EmitType<IDragCompleteEventArgs>`](https://ej2.syncfusion.com/vue/documentation/api-iDragCompleteEventArgs.html)

Triggers after the drag selection is completed.

### legendRender [`EmitType<ILegendRenderEventArgs>`](https://ej2.syncfusion.com/vue/documentation/api-iLegendRenderEventArgs.html)

Triggers before the legend is rendered.

### load [`EmitType<ILoadedEventArgs>`](https://ej2.syncfusion.com/vue/documentation/api-iLoadedEventArgs.html)

Triggers before chart load.

### loaded [`EmitType<ILoadedEventArgs>`](https://ej2.syncfusion.com/vue/documentation/api-iLoadedEventArgs.html)

Triggers after chart load.

### pointClick [`EmitType<IPointEventArgs>`](https://ej2.syncfusion.com/vue/documentation/api-iPointEventArgs.html)

Triggers on point click.

### pointMove [`EmitType<IPointEventArgs>`](https://ej2.syncfusion.com/vue/documentation/api-iPointEventArgs.html)

Triggers on point move.

### pointRender [`EmitType<IPointRenderEventArgs>`](https://ej2.syncfusion.com/vue/documentation/api-iPointRenderEventArgs.html)

Triggers before each points for the series is rendered.

### resized [`EmitType<IResizeEventArgs>`](https://ej2.syncfusion.com/vue/documentation/api-iResizeEventArgs.html)

Triggers after resizing of chart

### seriesRender [`EmitType<ISeriesRenderEventArgs>`](https://ej2.syncfusion.com/vue/documentation/api-iSeriesRenderEventArgs.html)

Triggers before the series is rendered.

### textRender [`EmitType<ITextRenderEventArgs>`](https://ej2.syncfusion.com/vue/documentation/api-iTextRenderEventArgs.html)

Triggers before the data label for series is rendered.

### tooltipRender [`EmitType<ITooltipRenderEventArgs>`](https://ej2.syncfusion.com/vue/documentation/api-iTooltipRenderEventArgs.html)

Triggers before the tooltip for series is rendered.

### zoomComplete [`EmitType<IZoomCompleteEventArgs>`](https://ej2.syncfusion.com/vue/documentation/api-iZoomCompleteEventArgs.html)

Triggers after the zoom selection is completed.
