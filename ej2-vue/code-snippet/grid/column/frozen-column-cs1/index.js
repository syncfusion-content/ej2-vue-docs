
import Vue from "vue";
import { GridPlugin, Freeze } from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { NumericTextBoxPlugin  } from '@syncfusion/ej2-vue-inputs';
import { data } from './datasource.js';

Vue.use(GridPlugin);
Vue.use(ButtonPlugin);
Vue.use(NumericTextBoxPlugin);

new Vue({
  el: '#app',
  template: `
  <div id="app">
    <div style="display: inline-block;">
      <label> Change the frozen columns: </label> 
      <ejs-numerictextbox ref='textbox' id='textbox' :min="0" :max="3" :validateDecimalOnType="true" floatLabelType="Auto" format="n"  width='100px' :value=2></ejs-numerictextbox>
      <ejs-button ref='button' cssClass='e-outline' v-on:click="frozenColumnFn">Update</ejs-button>
    </div>
    <ejs-grid ref='grid' style="padding: 5px 5px"  :dataSource="data" height='315px' :frozenColumns='2'  :enableHover='false'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
        <e-column field='OrderDate' headerText='Order Date' width=100 format='yMd' textAlign='Right'></e-column>
        <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=80></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=130></e-column>
        <e-column field='ShipAddress' headerText='Ship Address' width=140></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' width=100></e-column>
        <e-column field='ShipRegion' headerText='Ship Region' width=80></e-column>
        <e-column field='ShipPostalCode' headerText='Ship Postal Code' width=110></e-column>
        <e-column field='Freight' headerText='Freight' width=80></e-column>
      </e-columns>
    </ejs-grid>
  </div>`,

  data() {
    return {
      data: data
    };
  },
  methods: {
    frozenColumnFn: function() {
      this.$refs.grid.frozenColumns = this.$refs.textbox.$el.value;
    }
  },
  provide: {
    grid: [Freeze]
  }

});