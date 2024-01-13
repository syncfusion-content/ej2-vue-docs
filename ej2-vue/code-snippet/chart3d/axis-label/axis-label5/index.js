
import Vue from "vue";
import { Chart3DPlugin, Category3D, ColumnSeries3D } from "@syncfusion/ej2-vue-charts";

Vue.use(Chart3DPlugin);
let series1 = [];
let point1;
let value = 80;
let i;
for (i = 1; i < 50; i++) {
  if (Math.random() > 0.5) {
    value += Math.random();
  } else {
    value -= Math.random();
  }
  point1 = { x: i, y: value.toFixed(1) };
  series1.push(point1);
}
;
new Vue({
  el: '#app',
  template: `
    <ejs-chart3d id="container" :primaryXAxis="primaryXAxis" :primaryYAxis="primaryYAxis" :title='title'
            :wallColor='wallColor' :enableRotation='enableRotation' :rotation='rotation' :tilt='tilt' :depth='depth'>
      <e-chart3d-series-collection>
        <e-chart3d-series :dataSource="seriesData" type="Column" xName="x" yName="y" name="Product X">
          <e-chart3d-series-animation enable="false"></e-chart3d-series-animation>
        </e-chart3d-series>
      </e-chart3d-series-collection>
    </ejs-chart3d>
`,

  data() {
    return {
      seriesData: series1,
      primaryXAxis: {
        title: 'Years',
        edgeLabelPlacement: 'Shift',
        majorGridLines: { width: 0 },
        maximumLabels: 1
      },
      primaryYAxis: {
        title: 'Profit ($)',
        rangePadding: 'None',
        majorTickLines: { width: 0 }
      },
      title: 'Sales History of Product X',
      wallColor: 'transparent',
      enableRotation: true,
      rotation: 7,
      tilt: 10,
      depth: 100
    };
  },
  provide: {
    chart3d: [ColumnSeries3D, Category3D]
  }
});