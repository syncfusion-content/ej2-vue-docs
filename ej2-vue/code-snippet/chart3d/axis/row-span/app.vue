<template>
  <div id="app">
    <ejs-chart3d id="container" :primaryXAxis="primaryXAxis" :primaryYAxis="primaryYAxis" :axes="axes" :rows="rows"
      :title='title' :wallColor='wallColor' :enableRotation='enableRotation' :rotation='rotation' :tilt='tilt'
      :depth='depth'>
      <e-chart3d-series-collection>
        <e-chart3d-series :dataSource="seriesData" type="Column" xName="x" yName="y" name="Germany"></e-chart3d-series>
        <e-chart3d-series :dataSource="seriesData" type="Column" xName="x" yName="y1" name="Japan"
          yAxisName="yAxis"></e-chart3d-series>
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
  Category3D
} from '@syncfusion/ej2-vue-charts';

export default {
  name: "App",
  components: {
    'ejs-chart3d': Chart3DComponent,
    'e-chart3d-series-collection': Chart3DSeriesCollectionDirective,
    'e-chart3d-series': Chart3DSeriesDirective
  },
  data() {
    return {
      seriesData: [
        { x: 'Jan', y: 15, y1: 33 }, { x: 'Feb', y: 20, y1: 31 }, { x: 'Mar', y: 35, y1: 30 },
        { x: 'Apr', y: 40, y1: 28 }, { x: 'May', y: 80, y1: 29 }, { x: 'Jun', y: 70, y1: 30 },
        { x: 'Jul', y: 65, y1: 33 }, { x: 'Aug', y: 55, y1: 32 }, { x: 'Sep', y: 50, y1: 34 },
        { x: 'Oct', y: 30, y1: 32 }, { x: 'Nov', y: 35, y1: 32 }, { x: 'Dec', y: 35, y1: 31 }
      ],
      primaryXAxis: {
        title: 'Months',
        valueType: 'Category',
        interval: 1
      },
      primaryYAxis: {
        minimum: 0, maximum: 90, interval: 20,
        title: 'Temperature (Fahrenheit)',
        labelFormat: '{value}°F',
        span: 2
      },
      rows: [
        {
          height: '50%'
        },
        {
          height: '50%'
        }
      ],
      axes: [
        {
          majorGridLines: { width: 0 },
          rowIndex: 1, opposedPosition: true,
          minimum: 24, maximum: 36, interval: 4,
          name: 'yAxis', title: 'Temperature (Celsius)',
          labelFormat: '{value}°C'
        }
      ],
      title: 'Weather Condition',
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