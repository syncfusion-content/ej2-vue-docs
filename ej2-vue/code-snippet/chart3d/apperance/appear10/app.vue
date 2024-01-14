<template>
  <div id="app">
    <ejs-chart3d id="container" :primaryXAxis="primaryXAxis" :primaryYAxis="primaryYAxis" title="Weather report - 2022"
      :titleStyle="title">
      <e-chart3d-series-collection>
        <e-chart3d-series :dataSource="seriesData" type="Column" xName="country" yName="gold" name="Sales">
        </e-chart3d-series>
      </e-chart3d-series-collection>
    </ejs-chart3d>
  </div>
</template>
<script>
import {
  Chart3DComponent,
  Chart3DSeriesCollectionDirective,
  Chart3DSeriesDirective,
  ColumnSeries3D,
  Category3D,
} from '@syncfusion/ej2-vue-charts';

export default {
  components: {
    'ejs-chart3d': Chart3DComponent,
    'e-chart3d-series-collection': Chart3DSeriesCollectionDirective,
    'e-chart3d-series': Chart3DSeriesDirective,
  },

  data() {
    return {
      seriesData: [
        { country: 'USA', gold: 50 },
        { country: 'China', gold: 40 },
        { country: 'Japan', gold: 70 },
        { country: 'Australia', gold: 60 },
        { country: 'France', gold: 50 },
        { country: 'Germany', gold: 40 },
        { country: 'Italy', gold: 40 },
        { country: 'Sweden', gold: 30 },
      ],
      primaryXAxis: {
        valueType: 'Category',
      },
      primaryYAxis: {
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
        labelFormat: '{value}°C',
        interval: 10,
      },
      title: {
        position: 'Custom',
        x: 300,
        y: 60,
      },
    };
  },
  provide: {
    chart3d: [ColumnSeries3D, Category3D],
  },
};
</script>
<style>
#container {
  height: 350px;
}
</style>
