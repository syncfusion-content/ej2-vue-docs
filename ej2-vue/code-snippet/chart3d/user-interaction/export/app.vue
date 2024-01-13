

<template>
    <div id="app">       
        <ejs-chart3d ref="chart" id="container" :primaryXAxis='primaryXAxis' :title='title' 
            :wallColor='wallColor' :enableRotation='enableRotation' :rotation='rotation' :tilt='tilt' :depth='depth'>
            <e-chart3d-series-collection>
                <e-chart3d-series :dataSource='seriesData' type='Column' xName='country' yName='gold' name='Gold'></e-chart3d-series>
            </e-chart3d-series-collection>
        </ejs-chart3d>
        <ejs-button id='export' @click.native='export'>Export</ejs-button>
    </div>
</template>
<script>
import { Chart3DComponent, Chart3DSeriesCollectionDirective, Chart3DSeriesDirective, ColumnSeries3D, Category3D } from "@syncfusion/ej2-vue-charts";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";

export default {
  components: {
    'ejs-chart3d': Chart3DComponent,
    'e-chart3d-series-collection': Chart3DSeriesCollectionDirective,
    'e-chart3d-series': Chart3DSeriesDirective
  },
  data() {
    return {
      seriesData: [
          { country: "USA",       gold: 50 },
          { country: "China",     gold: 40 },
          { country: "Japan",     gold: 70 },
          { country: "Australia", gold: 60 },
          { country: "France",    gold: 50 },
          { country: "Germany",   gold: 40 },
          { country: "Italy",     gold: 40 },
          { country: "Sweden",    gold: 30 }
      ],
      primaryXAxis: {
          valueType: 'Category'
      },
      title: 'Olympic Medals',
      wallColor: 'transparent',
      enableRotation: true,
      rotation: 7,
      tilt: 10,
      depth: 100
    };
  },
  provide: {
    chart3d: [ColumnSeries3D, Category3D]
  },
  methods: {
    export: function() {
        this.$refs.chart.export('PNG', 'result');
    }
  }
};
</script>
<style>
  #container {
    height: 350px;
  }
</style>


