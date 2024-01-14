<template>
  <div id="app">
    <ejs-chart3d id="container" :primaryXAxis="primaryXAxis" :primaryYAxis="primaryYAxis">
      <e-chart3d-series-collection>
        <e-chart3d-series :dataSource="seriesData" type="Column" xName="x" yName="y" name="Sales">
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
        { x: 'South Korea', y: 39.4 },
        { x: 'India', y: 61.3 },
        { x: 'Pakistan', y: 20.4 },
        { x: 'Germany', y: 65.1 },
        { x: 'Australia', y: 15.8 },
        { x: 'Italy', y: 29.2 },
        { x: 'United Kingdom', y: 44.6 },
        { x: 'Saudi Arabia', y: 9.7 },
        { x: 'Russia', y: 40.8 },
        { x: 'Mexico', y: 31 },
        { x: 'Brazil', y: 75.9 },
        { x: 'China', y: 51.4 },
      ],
      primaryXAxis: {
        valueType: 'Category',
        title: 'Countries',
        labelIntersectAction: 'Rotate90'
      },
      primaryYAxis: {
        interval: 10,
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
