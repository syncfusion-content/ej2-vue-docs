<template>
  <div id="app">
    <ejs-circularchart3d id="container" :tilt='tilt' :legendSettings='legendSettings' :tooltip='tooltip'
      :highlightColor='highlightColor' :highlightMode='highlightMode'>
      <e-circularchart3d-series-collection>
        <e-circularchart3d-series :dataSource='seriesData' xName='x' yName='y'></e-circularchart3d-series>
      </e-circularchart3d-series-collection>
    </ejs-circularchart3d>
  </div>
</template>
<script>
import { CircularChart3DComponent, CircularChart3DSeriesCollectionDirective, CircularChart3DSeriesDirective, PieSeries3D, CircularChartTooltip3D, CircularChartLegend3D, CircularChartHighlight3D } from "@syncfusion/ej2-vue-charts";

export default {
  name: "App",
  components: {
    'ejs-circularchart3d': CircularChart3DComponent,
    'e-circularchart3d-series-collection': CircularChart3DSeriesCollectionDirective,
    'e-circularchart3d-series': CircularChart3DSeriesDirective
  },
  data() {
    return {
      seriesData: [
        { x: 'Jan', y: 13 },
        { x: 'Feb', y: 13 },
        { x: 'Mar', y: 17 },
        { x: 'Apr', y: 13.5 }
      ],
      tilt: -45,
      legendSettings: {
        visible: false
      },
      highlightColor: 'red',
      highlightMode: 'Point',
      tooltip: {
        enable: true,
        format: '${series.name} ${point.x} : ${point.y}',
        fill: '#7bb4eb',
        border: {
          width: 2,
          color: 'grey'
        }
      }
    };
  },
  provide: {
    circularchart3d: [PieSeries3D, CircularChartTooltip3D, CircularChartLegend3D, CircularChartHighlight3D]
  }
};
</script>
<style>
#container {
  height: 350px;
}
</style>