<template>
  <div id="app">
    <ejs-button id='togglebtn' @click.native='exportIcon'>Export</ejs-button>
    <ejs-circularchart3d id="container" ref="circularchart" :tilt='tilt' :legendSettings='legendSettings'
      enableExport='true'>
      <e-circularchart3d-series-collection>
        <e-circularchart3d-series :dataSource='seriesData' xName='x' yName='y' radius='100%'></e-circularchart3d-series>
      </e-circularchart3d-series-collection>
    </ejs-circularchart3d>
  </div>
</template>
<script>

import { CircularChart3DComponent, CircularChart3DSeriesCollectionDirective, CircularChart3DSeriesDirective, PieSeries3D, CircularChartLegend3D, CircularChartExport3D } from "@syncfusion/ej2-vue-charts";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";


export default {
  name: "App",
  components: {
    'ejs-circularchart3d': CircularChart3DComponent,
    'e-circularchart3d-series-collection': CircularChart3DSeriesCollectionDirective,
    'e-circularchart3d-series': CircularChart3DSeriesDirective,
    'ejs-button': ButtonComponent
  },
  data() {
    return {
      seriesData: [
        { x: 'Jan', y: 3 }, { x: 'Feb', y: 3.5 },
        { x: 'Mar', y: 7 }, { x: 'Apr', y: 13.5 },
        { x: 'May', y: 19 }, { x: 'Jun', y: 23.5 },
        { x: 'Jul', y: 26 }, { x: 'Aug', y: 25 },
        { x: 'Sep', y: 21 }, { x: 'Oct', y: 15 }
      ],
      tilt: -45,
      legendSettings: {
        visible: false
      }
    };
  },
  provide: {
    circularchart3d: [PieSeries3D, CircularChartLegend3D, CircularChartExport3D]
  },
  methods: {
    exportIcon: function () {
      this.$refs.circularchart.ej2Instances.circularChartExport3DModule.export('PNG', 'result');
    }
  }
};
</script>
<style>
#container {
  height: 350px;
}
</style>