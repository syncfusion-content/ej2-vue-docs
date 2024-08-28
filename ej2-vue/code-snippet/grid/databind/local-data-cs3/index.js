
import Vue from "vue";
import { GridPlugin, Page } from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js';
Vue.use(GridPlugin);
Vue.use(ButtonPlugin);


new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div style="padding:0px 0px 20px 0px">
      <ejs-button  v-on:click.native="next">Change datasource and column</ejs-button >
    </div>
    <ejs-grid ref="grid" :dataSource="dataGrid"  allowPaging="true" :pageSettings="pageSettings" >
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
        <e-column field='CustomerID' headerText='Customer ID' textAlign='Right' width=120></e-column>
        <e-column field='Freight' headerText='Freight' textAlign='Right' width=120></e-column>
      </e-columns>
    </ejs-grid>
  </div>
`,
data() {
  return {
    dataGrid : data,
    pageSettings: { pageSize: 5, pageCount: 3 },
    count : 0,
    newColumn : [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 125 },
        { field: 'CustomerName', headerText: 'Customer Name', width: 125 },
        { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'Right'},
        { field: 'Freight', headerText: 'Freight', width: 120, textAlign: 'Right'},
    ]
  };
},
methods: {
  next() {
    debugger;
      this.count = this.count + 100;
     this.$refs.grid.ej2Instances.changeDataSource(data.slice(0, this.count + 100), this.newColumn);
    }
},
provide: {
  grid: [Page]
}

});