
import Vue from "vue";
import { Chart3DPlugin, Category3D, ColumnSeries3D } from "@syncfusion/ej2-vue-charts";

Vue.use(Chart3DPlugin);

;
new Vue({
  el: '#app',
  template: `
  <<ejs-chart3d id="container" :primaryXAxis="primaryXAxis" :primaryYAxis="primaryYAxis">
  <e-chart3d-series-collection>
    <e-chart3d-series :dataSource="seriesData" type="Column" xName="country" yName="gold" name="Sales">
    </e-chart3d-series>
  </e-chart3d-series-collection>
</ejs-chart3d>
`,

  data() {
    return {
      seriesData: [
        { country: 'USA', gold: 50, siver: 30 },
        { country: 'China', gold: 40, siver: 20 },
        { country: 'Japan', gold: 70, siver: 50 },
        { country: 'Australia', gold: 60, siver: 40 },
        { country: 'France', gold: 50, siver: 30 },
        { country: 'Germany', gold: 40, siver: 20 },
        { country: 'Italy', gold: 40, siver: 20 },
        { country: 'Sweden', gold: 30, siver: 10 },
      ],
      primaryXAxis: {
        valueType: 'Category',
        isInversed: true
      },
      primaryYAxis: {
        interval: 10,
        isInversed: true
      }
    };
  },
  provide: {
    chart3d: [ColumnSeries3D, Category3D]
  }
});