import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { data } from "./datasource.js";
Vue.use(GridPlugin);
Vue.use(ButtonPlugin);

new Vue({
  el: '#app',
  template: `
    <div id="app">
      <ejs-button cssClass="e-success" v-on:click='changeHeaderText'>Change Header Text</ejs-button>
      <div style="padding: 20px 17px 0 0">
        <ejs-grid ref="grid" :dataSource='data' height='280'>
          <e-columns>
            <e-column field='OrderID' textAlign='Right' width=90></e-column>
            <e-column field='CustomerID' width=120></e-column>
            <e-column field='Freight' textAlign='Right' format='C2' width=90></e-column>
            <e-column field='ShipCity' width=120></e-column>
          </e-columns>
        </ejs-grid>
      </div>
  </div>`,

  data() {
    return {
      data: data,
      headerTextMap: {
        'OrderID': 'Order ID',
        'CustomerID': 'Customer ID',
        'Freight': 'Freight Charge',
        'ShipCity': 'Ship To City'
      }
    };
  },
  methods: {
    changeHeaderText: function () {
      this.$refs.grid.$el.ej2_instances[0].columnModel.forEach((column) => {
        column.headerText = this.headerTextMap[column.field];
      })
      this.$refs.grid.refreshHeader();
    }
  }
});