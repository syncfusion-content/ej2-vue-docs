
import Vue from "vue";
import { Chart3DPlugin, Category3D, ColumnSeries3D } from "@syncfusion/ej2-vue-charts";

Vue.use(Chart3DPlugin);

;
new Vue({
  el: '#app',
  template: `
    <div id="app">
    <ejs-chart3d id="container" :primaryXAxis="primaryXAxis" :primaryYAxis="primaryYAxis" :pointRender="pointRender">
      <e-chart3d-series-collection>
        <e-chart3d-series :dataSource="seriesData" type="Column" xName="country" yName="gold" name="Sales">
        </e-chart3d-series>
      </e-chart3d-series-collection>
    </ejs-chart3d>
    </div>
`,

  data() {
    return {
      seriesData: [
        { country: 'USA', gold: 50 },
        { country: 'China', gold: 40 },
        { country: 'Japan', gold: 70 },
        { country: 'Australia', gold: 60 },
        { country: 'France', gold: 50 },
        { country: 'Germany', gold: 40 },
        { country: 'Italy', gold: 40 },
        { country: 'Sweden', gold: 30 },
      ],
      primaryXAxis: {
        valueType: 'Category',
      },
      primaryYAxis: {
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
        labelFormat: '{value}°C',
        interval: 10,
      },
      pointRender: function (args) {
        let colors = ['#00bdae', '#404041', '#357cd2', '#e56590', '#f8b883',
          '#70ad47', '#dd8abd', '#7f84e8', '#7bb4eb', '#ea7a57'];
        args.fill = colors[args.point.index];
      },
    };
  },
  provide: {
    chart3d: [ColumnSeries3D, Category3D]
  }
});