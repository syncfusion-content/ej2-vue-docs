<template>
  <div id="app">
    <ejs-circularchart3d id="container" :tilt='tilt' :legendSettings='legendSettings' :tooltip='tooltip'>
      <e-circularchart3d-series-collection>
        <e-circularchart3d-series :dataSource='seriesData' xName='x' yName='y'></e-circularchart3d-series>
      </e-circularchart3d-series-collection>
    </ejs-circularchart3d>
  </div>
</template>
<script>
import { CircularChart3DComponent, CircularChart3DSeriesCollectionDirective, CircularChart3DSeriesDirective, PieSeries3D, CircularChartTooltip3D, CircularChartLegend3D } from "@syncfusion/ej2-vue-charts";

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
      tooltip: {
        enable: true,
        template: "<div id='templateWrap' style='background-color:#bd18f9;border-radius: 3px; float: right;padding: 2px;line-height: 20px;text-align: center;'>" +
          "<img src='https://ej2.syncfusion.com/demos/src/chart/images/sunny.png' />" +
          "<div style='color:white; font-family:Roboto; font-style: medium; fontp-size:14px;float: right;padding: 2px;line-height: 20px;text-align: center;padding-right:6px'><span>${y}</span></div></div>"
      }
    };
  },
  provide: {
    circularchart3d: [PieSeries3D, CircularChartTooltip3D, CircularChartLegend3D]
  }
};
</script>
<style>
#container {
  height: 350px;
}
</style>