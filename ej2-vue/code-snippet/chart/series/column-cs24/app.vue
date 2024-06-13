<template>
  <div id="app">
    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
      :tooltip='tooltip'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='Column' columnFacet='Cylinder' xName='country' yName='gold'
          tooltipMappingName='tooltipMappingName'> </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
<script>

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, ColumnSeries, Category } from "@syncfusion/ej2-vue-charts";

export default {
  name: "App",
  components: {
    'ejs-chart': ChartComponent,
    'e-series-collection': SeriesCollectionDirective,
    'e-series': SeriesDirective
  },
  data: function () {
    return {
      seriesData: [
        { country: "USA", gold: 50, tooltipMappingName: 'USA' },
        { country: "Japan", gold: 70, tooltipMappingName: 'Japan' },
        { country: "Australia", gold: 60, tooltipMappingName: 'Australia' },
        { country: "France", gold: 50, tooltipMappingName: 'France' },
        { country: "Italy", gold: 40, tooltipMappingName: 'Italy' },
        { country: "Sweden", gold: 55, tooltipMappingName: 'Sweden' }
      ],
      primaryXAxis: {
        valueType: 'Category',
        interval: 1
      },
      primaryYAxis:
      {
        minimum: 0,
        maximum: 80,
        interval: 10,
        title: 'Medal Count'
      },
      tooltip: { enable: true, header: "<b>${point.tooltip}</b>", format: "Gold Medal: <b>${point.y}</b>" },
      title: "Olympic Gold Medal Counts - RIO"
    };
  },
  provide: {
    chart: [ColumnSeries, Category]
  }
};
</script>
<style>
#container {
  height: 350px;
}
</style>