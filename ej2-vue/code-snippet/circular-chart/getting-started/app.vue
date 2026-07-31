<template>
  <div id="app">
    <ejs-circularchart3d id="container" :title='title' :tilt='tilt'>
      <e-circularchart3d-series-collection>
        <e-circularchart3d-series :dataSource='seriesData' xName='fruit' yName='share'></e-circularchart3d-series>
      </e-circularchart3d-series-collection>
    </ejs-circularchart3d>
  </div>
</template>
<script>
import { CircularChart3DComponent, CircularChart3DSeriesCollectionDirective, CircularChart3DSeriesDirective, PieSeries3D } from "@syncfusion/ej2-vue-charts";

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
        { fruit: 'Apple', share: 25 },
        { fruit: 'Mango', share: 20 },
        { fruit: 'Orange', share: 18 },
        { fruit: 'Banana', share: 17 },
        { fruit: 'Grapes', share: 20 }
      ],
      title: "Fruit Distribution",
      tilt: -45
    };
  },
  provide: {
    circularchart3d: [PieSeries3D]
  }
};