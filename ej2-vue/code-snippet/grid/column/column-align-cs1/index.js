
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { data } from './datasource.js';

Vue.use(GridPlugin);
Vue.use(DropDownListPlugin);


new Vue({
  el: '#app',
  template: `
  <div id='app'>
  <div style='display: flex'>
  <label style='padding:  10px 10px 12px 0'> Align the text for columns: </label> 
  <ejs-dropdownlist ref='dropdown' id='dropdownlist' style='margin-top:5px' index='0'
  width='150' :dataSource='alignmentData' :fields='fields' :change='change' 
  ></ejs-dropdownlist>
</div>
      <ejs-grid ref='grid' id='grid' :dataSource='data' height='315'>
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
          <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
          <e-column field='Freight' headerText='Freight' format ='C2' width=80></e-column>
          <e-column field='OrderDate' headerText='Order Date' format='yMd' textAlign='Right' width=80></e-column>
        </e-columns>
      </ejs-grid>
  </div>
`,

  data() {
    return {
      data: data,
      fields: { text: 'text', value: 'value' },
      alignmentData: [
        { text: 'Left', value: 'Left' },
        { text: 'Right', value: 'Right' },
        { text: 'Center', value: 'Center' },
        { text: 'Justify', value: 'Justify' },
      ],
    };
  },
  methods: {
    change: function (args) {
      let grid = this.$refs.grid.$el.ej2_instances[0];
      grid.columns.forEach(col => {
        col.textAlign = args.value;
      });
      grid.refreshColumns();
    }
  }

});

