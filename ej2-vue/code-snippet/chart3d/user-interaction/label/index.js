
import Vue from "vue";
import { Chart3DPlugin, Category3D, ColumnSeries3D, DataLabel3D } from "@syncfusion/ej2-vue-charts";

Vue.use(Chart3DPlugin);

;
new Vue({
  el: '#app',
  template: `
    <div id="app">
      <ejs-chart3d id="container" :primaryXAxis='primaryXAxis' :title='title' :wallColor='wallColor' 
        :enableRotation='enableRotation' :rotation='rotation' :tilt='tilt' :depth='depth' :textRender='textRender'>
        <e-chart3d-series-collection>
          <e-chart3d-series :dataSource='seriesData' type='Column' xName='country' yName='gold' :dataLabel='dataLabel'></e-chart3d-series>
        </e-chart3d-series-collection>
      </ejs-chart3d>
    </div>
`,

  data() {
    return {
      seriesData: [
        { x: 'USA', y: 46 }, 
        { x: 'GBR', y: 27 }, 
        { x: 'CHN', y: 26 }
      ],
      primaryXAxis: {
        valueType: 'Category'
      },
      dataLabel: {
        visible: true
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
    chart3d: [ColumnSeries3D, Category3D, DataLabel3D]
  },
  methods: {
    textRender: function (args) {
      if (args.point.index === 2) {
        args.text = 'Label';
      }
      else {
        args.cancel = true;
      }
    }
  }
});