
import Vue from "vue";
import { ChartPlugin, ColumnSeries, Category, Export } from "@syncfusion/ej2-vue-charts";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";

Vue.use(ChartPlugin);
Vue.use(ButtonPlugin);

new Vue({
  el: '#app',
  template: `
    <div id="app">
      <ejs-button cssClass="e-flat" iconCss='e-icons e-export-icon' isPrimary=true v-on:click.native='onClick' id="exportBtn">EXPORT</ejs-button>
         <ejs-chart ref="chart" id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Column' xName='x' yName='y' width=2> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
`,

  data: function () {
    return {
      seriesData: [
        { x: 'John',  y: 10000 },
        { x: 'Jake',  y: 12000 },
        { x: 'Peter', y: 18000 },
        { x: 'James', y: 11000 },
        { x: 'Mary',  y: 9700  }
      ],
      primaryXAxis: {
        title: 'Manager',
        valueType: 'Category',
        majorGridLines: { width: 0 }
      },
      primaryYAxis: {
        title: 'Sales',
        minimum: 0,
        maximum: 20000,
        majorGridLines: { width: 0 }
      },
      title: "Sales Comparision"
    };
  },
  provide: {
    chart: [ColumnSeries, Category, Export]
  },
  methods: {
    onClick: function (args) {
      const header = {
        content: 'Chart Header',
        fontSize: 15
      };
      const footer = {
        content: 'Chart Footer',
        fontSize: 15
      };
      let chart1 = document.getElementById("container").ej2_instances[0];
      chart1.exportModule.export('PDF', 'Chart', 1, [chart1], null, null, true, header, footer);
    },
  }

});