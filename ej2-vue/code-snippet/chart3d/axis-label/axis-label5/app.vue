<template>
  <div id="app">
    <ejs-chart3d id="container" :primaryXAxis="primaryXAxis" :primaryYAxis="primaryYAxis" :title='title'
      :wallColor='wallColor' :enableRotation='enableRotation' :rotation='rotation' :tilt='tilt' :depth='depth'>
      <e-chart3d-series-collection>
        <e-chart3d-series :dataSource="seriesData" type="Column" xName="x" yName="y" name="Product X">
          <e-chart3d-series-animation enable="false"></e-chart3d-series-animation>
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

let series1 = [];
let point1;
let value = 80;
let i;
for (i = 1; i < 50; i++) {
  if (Math.random() > 0.5) {
    value += Math.random();
  } else {
    value -= Math.random();
  }
  point1 = { x: i, y: value.toFixed(1) };
  series1.push(point1);
}

export default {
  name: "App",
  components: {
    'ejs-chart3d': Chart3DComponent,
    'e-chart3d-series-collection': Chart3DSeriesCollectionDirective,
    'e-chart3d-series': Chart3DSeriesDirective
  },
  data() {
    return {
      seriesData: series1,
      primaryXAxis: {
        title: 'Years',
        edgeLabelPlacement: 'Shift',
        majorGridLines: { width: 0 },
        maximumLabels: 1
      },
      primaryYAxis: {
        title: 'Profit ($)',
        rangePadding: 'None',
        majorTickLines: { width: 0 }
      },
      title: 'Sales History of Product X',
      wallColor: 'transparent',
      enableRotation: true,
      rotation: 7,
      tilt: 10,
      depth: 100
    };
  },
  provide: {
    chart3d: [ColumnSeries3D, Category3D]
  }
};
</script>
<style>
#container {
  height: 350px;
}
</style>