<template>
  <div id="app">
    <ejs-circularchart3d id="container" :tilt='tilt' :subTitle='subTitle' :subTitleStyle='subTitleStyle' :title='title'
      :legendSettings='legendSettings'>
      <e-circularchart3d-series-collection>
        <e-circularchart3d-series :dataSource='seriesData' xName='x' yName='y'></e-circularchart3d-series>
      </e-circularchart3d-series-collection>
    </ejs-circularchart3d>
  </div>
</template>
<script>
import { CircularChart3DComponent, CircularChart3DSeriesCollectionDirective, CircularChart3DSeriesDirective, PieSeries3D, CircularChartLegend3D } from "@syncfusion/ej2-vue-charts";

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
        { x: 'Saudi Arabia', y: 58 },
        { x: 'Persian Gulf', y: 15 },
        { x: 'Canada', y: 13 },
        { x: 'Venezuela', y: 8 },
        { x: 'Mexico', y: 3 },
        { x: 'Russia', y: 2 },
        { x: 'Miscellaneous', y: 1 }
      ],
      tilt: -45,
      title: 'Oil and other liquid imports in USA',
      subTitle: 'In the year 2014 - 2015',
      subTitleStyle: {
        fontFamily: "Arial",
        fontStyle: 'italic',
        fontWeight: 'regular',
        color: "#E27F2D",
        size: '13px'
      },
      legendSettings: {
        visible: false
      }
    };
  },
  provide: {
    circularchart3d: [PieSeries3D, CircularChartLegend3D]
  }
};
</script>
<style>
#container {
  height: 350px;
}
</style>