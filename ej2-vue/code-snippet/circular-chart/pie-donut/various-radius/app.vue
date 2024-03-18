

<template>
    <div id="app">
        <ejs-circularchart3d id="container" :tilt='tilt' :title='title' :legendSettings='legendSettings' enableAnimation='true'>
            <e-circularchart3d-series-collection>
                <e-circularchart3d-series :dataSource='seriesData' xName='x' yName='y' radius='r' innerRadius='20%' :dataLabel='dataLabel'></e-circularchart3d-series>
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
          { x: 'Belgium', y: 551500, r: '110.7' },
          { x: 'Cuba', y: 312685, r: '124.6' },
          { x: 'Dominican Republic', y: 350000, r: '137.5' },
          { x: 'Egypt', y: 301000, r: '150.8' },
          { x: 'Kazakhstan', y: 300000, r: '155.5' },
          { x: 'Somalia', y: 357022, r: '160.6' },
          { x: 'Argentina', y: 505370, r: '100' }
      ],
      tilt: -15,
      title: 'Countries compared by population density and total area',
      legendSettings: {
        visible: true
      },
      dataLabel: {
        visible: true, 
        position: 'Outside',
        name: 'x'
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


