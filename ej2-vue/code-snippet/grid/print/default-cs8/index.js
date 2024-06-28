
import Vue from 'vue';
import { DataManager, Query } from '@syncfusion/ej2-data';
import { GridPlugin, Page, Toolbar } from '@syncfusion/ej2-vue-grids';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { ChartPlugin, LineSeries, DateTime } from '@syncfusion/ej2-vue-charts';
import { data } from './datasource.js';  // Ensure this path is correct

Vue.use(ButtonPlugin);
Vue.use(GridPlugin);
Vue.use(ChartPlugin);

new Vue({
  el: '#app',
  template: `
  <div id="app">
    <ejs-button style="margin-bottom: 20px" cssClass="e-danger"  v-on:click.native="onClick">Print</ejs-button >
    <ejs-grid ref="grid" :dataSource="data" :allowPaging="true" :pageSettings="pageSettings" :printMode="printMode" 
    :dataBound="dataBound" :actionComplete="actionComplete" :beforePrint="beforePrint">
      <e-columns>
        <e-column field="OrderDate" headerText="Order Date" width="130" format="yMd" textAlign="right"></e-column>
        <e-column field="Freight" width="120" format="C2" textAlign="right"></e-column>
      </e-columns>
    </ejs-grid>
    <h4>Chart</h4>
    <div>
      <ejs-chart ref="chart" id="chart-container" :primaryXAxis="primaryXAxis" :primaryYAxis="primaryYAxis" :title="title" width="60%">
        <e-series-collection>
          <e-series type="Line" xName="OrderDate" yName="Freight" width="1" columnWidth="0.4" name="dataview" :marker="marker"></e-series>
        </e-series-collection>
      </ejs-chart>
    </div>
  </div>
`,

data() {
  return {
    data :new DataManager(data).executeLocal(new Query().take(100)),
    printMode:"CurrentPage",
    pageSettings: { pageSize: 10 },
    primaryXAxis: {
      valueType: 'DateTime',
      labelFormat: 'MMMd'

    },
    primaryYAxis: {
      labelFormat: '{value}'
    },
    title: 'Order Data',
    marker: { visible: true }
  };
},
methods: {
  dataBound() {
    if( this.$refs.chart){
    this.$refs.chart.ej2Instances.series[0].marker = { visible: true };
    this.$refs.chart.ej2Instances.series[0].xName = 'OrderDate';
    this.$refs.chart.ej2Instances.series[0].yName = 'Freight';
    this.$refs.chart.ej2Instances.series[0].dataSource = this.$refs.grid.getCurrentViewRecords();
  }
  },
  onClick() {
    this.$refs.grid.ej2Instances.print();
  },
  beforePrint(args) {
      const clonedChartContainer = this.$refs.chart.$el.cloneNode(true);
      args.element.appendChild(clonedChartContainer);
  },
  actionComplete(args) {
    if (args.requestType === 'paging') {
      this.$refs.chart.ej2Instances.series[0].dataSource = this.$refs.grid.getCurrentViewRecords();
      this.$refs.chart.ej2Instances.refresh();
    }
  }
},
provide: {
  grid: [Page, Toolbar],
  chart: [LineSeries,DateTime]
}

});