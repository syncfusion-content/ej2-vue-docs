
import Vue from "vue";
import { GridPlugin, Sort } from "@syncfusion/ej2-vue-grids";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { data } from './datasource.js';

Vue.use(GridPlugin);
Vue.use(DropDownListPlugin);
Vue.use(ButtonPlugin);


new Vue({
  el: '#app',
  template: `
  <div id="app">
    <div style="display: inline-block;">
      <label style='padding:  10px 10px 15px 0'> Column name :  </label> 
      <ejs-dropdownlist ref='dropDown' id='dropDown' index="0"
      width="140" :dataSource="columnData" :fields='fields'></ejs-dropdownlist>
    </div>
    <ejs-button ref='button' cssClass='e-outline' v-on:click.native="removeSortColumn">Remove sort column</ejs-button>
    <ejs-grid ref='grid' style="padding: 10px 10px" :dataSource='data' :allowSorting='true' :sortSettings='initialSort' height='315px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
      </e-columns>
    </ejs-grid>
</div>
`,

  data() {
    return {
      data: data,
      initialSort: {
        columns: [
          { field: 'CustomerID', direction: 'Ascending' },
          { field: 'ShipName', direction: 'Descending' },
        ]
      },
      fields: { text: 'text', value: 'value' },
      columnData : [
        { text: 'Customer ID', value: 'CustomerID' },        
        { text: 'Order ID', value: 'OrderID' },
        { text: 'Ship Name', value: 'ShipName' },
        { text: 'Ship City', value: 'ShipCity' },
      ],
    };
  },
  methods: {
    removeSortColumn: function() {
      let grid = this.$refs.grid.$el.ej2_instances[0];
      grid.removeSortColumn(this.$refs.dropDown.$el.ej2_instances[0].value);
    }
  },
  provide: {
    grid: [Sort]
  }

});