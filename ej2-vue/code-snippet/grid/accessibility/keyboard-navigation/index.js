
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js'

Vue.use(GridPlugin);


new Vue({
  el: '#app',
  template: `
  <div id="app">
    <ejs-grid :dataSource="data" :keyPressed="keyPressed">
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
        <e-column field='ShipName' headerText='Shipped Name' width=120></e-column>          
      </e-columns>
    </ejs-grid>
  </div>`,

  data() {
    return {
      data: data,
    }
  },
  methods: {
    keyPressed: function (args) {
      if (args.keyCode === 13) {
        // Prevent the default Enter key action
        args.cancel = true;
      }
    },
  }

});