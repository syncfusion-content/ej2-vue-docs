
import Vue from "vue";
import { ChartPlugin, ColumnSeries, Category, Highlight, DataLabel, Tooltip } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

;
new Vue({
  el: '#app',
  template: `
    <div id="app">
         <ejs-chart style='display:block' ref='chart' :theme='theme' :load='load' :loaded='loaded'
      :noDataTemplate='noDataTemplate' align='center' id='chartcontainer' :title='title' :subTitle='subTitle'
      :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :chartArea='chartArea' :tooltip='tooltip'
      :width='width'>
      <e-series-collection>
        <e-series :dataSource='seriesData' type='Line' xName='x' yName='y' :marker='marker'
          :animation='{ enable: true }' width='2'> </e-series>
      </e-series-collection>
    </ejs-chart>

    <div v-if="!hasData" class="no-data-button-overlay">
      <ejs-button content="Load Data" iconCss="e-icons e-refresh" cssClass="load-data-btn e-outline" :isPrimary="false"
        @click="loadData"></ejs-button>
    </div>
    </div>
`,

  data() {
    return {
      hasData: false,
      seriesData: [
        { x: 'January', y: 19173 },
        { x: 'February', y: 17726 },
        { x: 'March', y: 19874 },
        { x: 'April', y: 19391 },
        { x: 'May', y: 20072 },
        { x: 'June', y: 19233 }
      ],

      //Initializing Primary X Axis
      primaryXAxis: {
        valueType: 'Category',
        majorGridLines: {
          width: 0
        },
        majorTickLines: {
          width: 0
        },
      },

      chartArea: {
        border: { width: 0 }
      },

      primaryYAxis: {
        title: 'Production (in million pounds)',
        titleStyle: {
          fontWeight: '600'
        },
        majorTickLines: {
          width: 0
        },
        lineStyle: {
          width: 0
        }
      },

      marker: {
        visible: true,
        width: 7, height: 7
      },

      noDataTemplate: `
                <div id="noDataTemplateContainer" class="light-bg">
                    <div class="template-align">    
                        <img src="no-data.png" alt="No Data"/>
                    </div>
                    <div class="template-align">
                        <p style="font-size: 15px; margin: 10px 0 10px;"><strong>No data available to display.</strong></p>
                    </div>
                </div>`,
      width: '100%',
      title: "Milk Production in US - 2025",
      subTitle: "Source: nass.usda.gov",
      tooltip: { enable: true, header: 'Milk Production', format: '${point.x} : <b>${point.y}M</b>' }
    };
  },
  provide: {
    chart: [LineSeries, Category, DataLabel, Tooltip, Highlight]
  },
  methods: {
    load(args) {
      this.seriesData = this.hasData ? [
        { x: 'January', y: 19173 },
        { x: 'February', y: 17726 },
        { x: 'March', y: 19874 },
        { x: 'April', y: 19391 },
        { x: 'May', y: 20072 },
        { x: 'June', y: 19233 }
      ] : [];
    },
    loaded(args) {
    },
    loadData() {
      this.seriesData = [
        { x: 'January', y: 19173 },
        { x: 'February', y: 17726 },
        { x: 'March', y: 19874 },
        { x: 'April', y: 19391 },
        { x: 'May', y: 20072 },
        { x: 'June', y: 19233 }
      ];
      this.hasData = true;

      const values = this.seriesData.map(d => d.y);
      const min = Math.min(...values);
      const max = Math.max(...values);
      const range = max - min;

      const chart = this.$refs.chart.ej2Instances;
      chart.primaryYAxis.minimum = Math.floor(min - range * 0.1);
      chart.primaryYAxis.maximum = Math.ceil(max + range * 0.1);
      chart.primaryYAxis.interval = Math.ceil(range / 5);
      chart.series[0].animation.enable = true;
      chart.refresh();
    }
  }

});