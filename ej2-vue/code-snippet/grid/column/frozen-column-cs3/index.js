
import Vue from "vue";
import { GridPlugin, Freeze } from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { data } from "./datasource.js";

Vue.use(GridPlugin);
Vue.use(ButtonPlugin);
Vue.use(DropDownListPlugin);

new Vue({
  el: '#app',
  template: `
  <div id="app">
    <div style="display: inline-block;">
      <label> Change column: </label> 
      <ejs-dropdownlist ref='columnDropdown' id='columnDropdown' :dataSource='columnData' index="0" :fields='fields' width="150"></ejs-dropdownlist>
      <label> Change freeze direction: </label> 
      <ejs-dropdownlist ref='directionDropdown' id='directionDropdown' :dataSource='directionData' index="0" :fields='fields' width="150"></ejs-dropdownlist>
    </div>
    <ejs-button ref='button' cssClass='e-outline' v-on:click.native="freezeDirectionFn">Update</ejs-button>
    <ejs-grid ref='grid' style="padding: 5px 5px"  :dataSource="data" height='315px'  :enableHover='false'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' width='90' textAlign='Right'></e-column>
        <e-column field='Freight' headerText='Freight' width='90' format='C2' textAlign='Right' freeze='Fixed'></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width='100' freeze='Right'></e-column>
        <e-column field='OrderDate' headerText='Order Date' width='100' format="yMd" textAlign='Right'></e-column>
        <e-column field='ShipName' headerText='Ship Name' width='100'></e-column>
        <e-column field='ShipAddress' headerText='Ship Address' width='120'></e-column>
        <e-column field='ShipCity' headerText='Ship City' width='110'></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' width='100' freeze='Left'></e-column>
      </e-columns>
    </ejs-grid>
  </div>`,

  data() {
    return {
      data: data,
      fields: { text: 'name', value: 'id' },
      columnData: [
        { id: 'OrderID', name: 'Order ID' },
        { id: 'Freight', name: 'Freight' },
        { id: 'CustomerID', name: 'Customer ID' },
        { id: 'OrderDate', name: 'Order Date' },
        { id: 'ShipName', name: 'Ship Name' },
        { id: 'ShipAddress', name: 'Ship Address' },
        { id: 'ShipCity', name: 'Ship City' },
        { id: 'ShipCountry', name: 'Ship Country' },
      ],
      directionData: [
        { id: 'Left', name: 'Left' },
        { id: 'Right', name: 'Right' },
        { id: 'Fixed', name: 'Fixed' },
      ]
    };
  },
  methods: {
    freezeDirectionFn: function () {
      const grid = this.$refs.grid.$el.ej2_instances[0]
      grid.getColumnByField(this.$refs.columnDropdown.$el.ej2_instances[0].value).freeze = this.$refs.directionDropdown.$el.ej2_instances[0].value
      grid.refreshColumns();
    }
  },
  provide: {
    grid: [Freeze]
  }

});