
import Vue from "vue";
import { GridPlugin, Group } from "@syncfusion/ej2-vue-grids";
import { DropDownListPlugin  } from "@syncfusion/ej2-vue-dropdowns";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { data } from './datasource.js';

Vue.use(GridPlugin);
Vue.use(DropDownListPlugin);
Vue.use(ButtonPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div style="display: flex">
        <label style='padding:  10px 10px 15px 0'> Column name :  </label> 
        <ejs-dropdownlist ref='dropDown' id='dropDown' style="margin-top:3px" index="0"
        width="100" :dataSource="columnData" :fields='fields'></ejs-dropdownlist>
      </div>
    <ejs-button ref='button' style="margin-top: 10px " cssClass='e-outline' v-on:click="groupColumn">Group column</ejs-button>
    <ejs-button ref='button' style="margin-top: 10px; margin-right: 5px " cssClass='e-outline' v-on:click="unGroupColumn"> UnGroup column</ejs-button>
    <ejs-grid ref='grid' style="padding: 10px 10px" :dataSource='data' :allowGrouping='true' :groupSettings='groupOptions' height='267px'>
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
      groupOptions: { showDropArea: false, columns: ['CustomerID', 'ShipCity'] },
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
    groupColumn() {
      let grid = this.$refs.grid.$el.ej2_instances[0];
      grid.groupColumn(this.$refs.dropDown.$el.ej2_instances[0].value);
    },
    
    unGroupColumn() {
      let grid = this.$refs.grid.$el.ej2_instances[0];
      grid.ungroupColumn(this.$refs.dropDown.$el.ej2_instances[0].value);
    }
  },
  provide: {
    grid: [Group]
  }

});