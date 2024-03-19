

<template>
    <div id="app">
        <ejs-circularchart3d id="container" :tilt='tilt' :legendSettings='legendSettings'>
            <e-circularchart3d-series-collection>
                <e-circularchart3d-series :dataSource='seriesData' xName='x' yName='y'></e-circularchart3d-series>
            </e-circularchart3d-series-collection>
        </ejs-circularchart3d>
    </div>
</template>
<script>
import { CircularChart3DComponent, CircularChart3DSeriesCollectionDirective, CircularChart3DSeriesDirective, PieSeries3D, CircularChartLegend3D } from "@syncfusion/ej2-vue-charts";

export default {
  components: {
    'ejs-circularchart3d': CircularChart3DComponent,
    'e-circularchart3d-series-collection': CircularChart3DSeriesCollectionDirective,
    'e-circularchart3d-series': CircularChart3DSeriesDirective
  },
  data() {
    return {
      seriesData: [
          { x: 'Jan', y: 3 },  { x: 'Feb', y: 3.5 }, 
          { x: 'Mar', y: 7 },  { x: 'Apr', y: 13.5 },
          { x: 'May', y: 19 }, { x: 'Jun', y: 23.5 }, 
          { x: 'Jul', y: 26 }, { x: 'Aug', y: 25 },
          { x: 'Sep', y: 21 }, { x: 'Oct', y: 15 }, 
          { x: 'Nov', y: 15 }, { x: 'Dec', y: 15 }
      ],
      tilt: -45,
      legendSettings: {
        width: '260px', 
        height: '50px', 
        position: 'Bottom', 
        itemPadding: 30
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


