<template>
  <ejs-accumulationchart
    id="container"
    ref="pie"
    style="display: block"
    :legendSettings="legendSettings"
    :tooltip="tooltip"
    :enableAnimation="enableAnimation"
    :enableSmartLabels="enableSmartLabels"
  >
    <e-accumulation-series-collection>
      <e-accumulation-series
        :dataSource="data"
        xName="x"
        yName="y"
        :radius="radius"
        innerRadius="20%"
        :dataLabel="dataLabel"
      >
      </e-accumulation-series>
    </e-accumulation-series-collection>
  </ejs-accumulationchart>
</template>
<script>

import {
  AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective,
  AccumulationLegend,
  PieSeries,
  AccumulationDataLabel,
  AccumulationTooltip,
} from "@syncfusion/ej2-vue-charts";



export default{
  name: "App",
  components: {
    "ejs-accumulationchart": AccumulationChartComponent,
    "e-accumulation-series-collection": AccumulationSeriesCollectionDirective,
    "e-accumulation-series": AccumulationSeriesDirective
  },
  data: function () {
    return {
      data: [
        { x: "Argentina", y: 505370, r: "50%" },
        { x: "Belgium", y: 551500, r: "70%" },
        { x: "Cuba", y: 312685, r: "84%" },
        { x: "Dominican Republic", y: 350000, r: "97%" },
        { x: "Egypt", y: 301000, r: "84%" },
        { x: "Kazakhstan", y: 300000, r: "70%" },
        { x: "Somalia", y: 357022, r: "90%" },
      ],
      radius: "r",
      legendSettings: { visible: true, reverse: true },
      dataLabel: { visible: true, position: "Outside", name: "x" },
      tooltip: {
        enable: true,
        header: "<b>${point.x}</b>",
        format: "Composition: <b>${point.y}</b>",
      },
      enableAnimation: true,
      enableSmartLabels: true,
    };
  },
  provide: {
    accumulationchart: [
      AccumulationLegend,
      PieSeries,
      AccumulationDataLabel,
      AccumulationTooltip
    ]
  },
};
</script>