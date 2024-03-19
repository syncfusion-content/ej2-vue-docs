

<template>
    <div id="app">
        <ejs-circularchart3d id="container" :tilt='tilt' :legendSettings='legendSettings'>
            <e-circularchart3d-series-collection>
                <e-circularchart3d-series :dataSource='seriesData' xName='x' yName='y' :pointColorMapping='pointColorMapping' :dataLabel='dataLabel'></e-circularchart3d-series>
            </e-circularchart3d-series-collection>
        </ejs-circularchart3d>
    </div>
</template>
<script>
import { CircularChart3DComponent, CircularChart3DSeriesCollectionDirective, CircularChart3DSeriesDirective, PieSeries3D, CircularChartDataLabel3D, CircularChartLegend3D } from "@syncfusion/ej2-vue-charts";

export default {
  components: {
    'ejs-circularchart3d': CircularChart3DComponent,
    'e-circularchart3d-series-collection': CircularChart3DSeriesCollectionDirective,
    'e-circularchart3d-series': CircularChart3DSeriesDirective
  },
  data() {
    return {
      seriesData: [
          { x: 'Jan', y: 3, fill: '#498fff', text:'January' }, 
          { x: 'Feb', y: 3.5, fill: '#ffa060', text: 'February' },
          { x: 'Mar', y: 7, fill: '#ff68b6', text: 'March' }, 
          { x: 'Apr', y: 13.5, fill: '#81e2a1', text: 'April' }
      ],
      tilt: -45,
      legendSettings: {
        visible: false
      },
      pointColorMapping: 'fill',
      dataLabel: {
        visible: true,
        name: 'text'
      }
    };
  },
  provide: {
    circularchart3d: [PieSeries3D, CircularChartDataLabel3D, CircularChartLegend3D]
  }
};
</script>
<style>
  #container {
    height: 350px;
  }
</style>


