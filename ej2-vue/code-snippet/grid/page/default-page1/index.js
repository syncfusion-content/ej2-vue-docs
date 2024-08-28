import Vue from "vue";
import { GridPlugin ,Page} from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";

Vue.use(GridPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
    <p id="message1">{{message1}}</p>
    <p id="message">{{message}}</p>    
    <ejs-grid ref="grid" :dataSource="data" allowPaging="true"
            :actionBegin="onActionBegin" :actionComplete="onActionComplete"
            :pageSettings="initialPage">
            <e-columns>
                <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="90"></e-column>
                <e-column field="CustomerID" headerText="Customer ID" width="120"></e-column>
                <e-column field="Freight" headerText="Freight" textAlign="Right" format="C2" width="90"></e-column>
                <e-column field="OrderDate" headerText="Order Date" type="date" textAlign="Right" format="yMd" width="120"></e-column>
            </e-columns>
        </ejs-grid>
  </div>`,

  data() {
    return {
      data: data,
      initialPage : { pageSize: 5 },
      message: '',
      message1: ''
    };
  },
  methods: {
      onActionBegin(args) {
      if (args.requestType === "paging") {
            this.message = args.currentPage > args.previousPage
                ? `You are going to switch to page ${parseInt(args.currentPage , 10) + 1}`
                : `You are going to switch to page ${args.previousPage}`;
        }      },
      onActionComplete(args) {
        if (args.requestType === "paging") {
            this.message1 = 'Now you are in page ' + args.currentPage;
        }      },},
provide: {
    grid: [Page]
  }

});