
import Vue from "vue";
import { GridPlugin, Page } from "@syncfusion/ej2-vue-grids";
import { DropDownListPlugin } from '@syncfusion/ej2-vue-dropdowns';
import { data } from './datasource.js';

Vue.use(GridPlugin);
Vue.use(DropDownListPlugin);


new Vue({
  el: '#app',
  template: `
    <div id="app">
    <div style="display: inline-block">
        <label style="padding: 30px 20px 0 0" > Select Row :</label>
        <ejs-dropdownlist index='0' width='220' :dataSource='dropdownData' :change='valueChange' >
        </ejs-dropdownlist>
    </div>
    <div style="padding: 20px 17px 0 0">
        <ejs-grid ref="grid" :dataSource='data' :actionComplete='actioncomplete' allowPaging='true' 
            height=365 :pageSettings='initialPage'>
          <e-columns>
              <e-column field='OrderID' headerText='Order ID' width='120' 
                    textAlign='Right'></e-column>
                <e-column field='CustomerID' headerText='Customer Name' width='150'>
                </e-column>
                <e-column field='OrderDate' headerText='Order Date' width='130' 
                    format="yMd" textAlign='Right'></e-column>
                <e-column field='Freight' headerText='Freight' width='120' 
                    format='C2' textAlign='Right'></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' width='170'>
                </e-column>
            </e-columns>
        </ejs-grid>
    </div>
  </div>
`,

data() {
  return {
    data: data,
    dropdownData: [
      { text: "Select row index" },
      { text: "1", value: "1" },
      { text: "2", value: "2" },
      { text: "30", value: "30" },
      { text: "80", value: "80" },
      { text: "110", value: "110" },
      { text: "120", value: "120" },
      { text: "210", value: "210" },
      { text: "310", value: "310" },
      { text: "410", value: "410" },
      { text: "230", value: "230" },
    ],
    initialPage: { pageSize: 10 },
  };
},
methods: {
  actioncomplete: function () {
    this.$refs.grid.ej2Instances.selectRow(this.mod);
  },
  valueChange: function (args) {
    this.value = +args.value;
    this.mod = (this.value - 1) % 10;
    const page = Math.ceil(this.value / 10);

    if (page === 1) {
      if (this.$refs.grid.ej2Instances.pagerModule.pagerObj.currentPage != 1 ) {
        this.$refs.grid.ej2Instances.pagerModule.goToPage(1);
      }
      this.$refs.grid.ej2Instances.selectRow(this.mod);
    } else {
      this.$refs.grid.ej2Instances.pagerModule.goToPage(page);
      if ( this.$refs.grid.ej2Instances.pagerModule.pagerObj.currentPage == page) {
        this.$refs.grid.ej2Instances.selectRow(this.mod);
      }
    }
  }
},
provide: {
  grid: [Page]
}

});