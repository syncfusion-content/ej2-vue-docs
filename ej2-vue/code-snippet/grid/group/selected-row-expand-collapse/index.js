
import Vue from "vue";
import { GridPlugin, Group } from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { NumericTextBoxPlugin  } from '@syncfusion/ej2-vue-inputs';
import { data } from './datasource.js';

Vue.use(GridPlugin);
Vue.use(ButtonPlugin);
Vue.use(NumericTextBoxPlugin );

new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div style="display: inline-block;">
      <ejs-numerictextbox id='textbox' floatLabelType="Auto" format="##"  width='250px' placeholder="Enter Grouped Row Index"></ejs-numerictextbox>
      <ejs-button style="margin-top:25px"ref='button' cssClass='e-outline' v-on:click="onExpandCollapseButtonClick">Collapse or Expand Row</ejs-button>
    </div> 
    <div style="padding-top:5px"><p style="color:red;" id="message">{{ message }}</p></div>
    <ejs-grid ref='grid' style="padding-top: 5px" :dataSource='data' :allowGrouping='true' :groupSettings='groupOptions' height='267px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' :allowGrouping='false' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
        <e-column field='ShipCity' headerText='Ship City' :allowGrouping='false' width=100></e-column>
        <e-column field='ShipName' headerText='Ship Name' :allowGrouping='false' width=120></e-column>
      </e-columns>
    </ejs-grid>
  </div>
`,

  data() {
    return {
      data: data,
      groupOptions: { columns: ['CustomerID'] },
      message:'',
    };
  },
  methods: {
    onExpandCollapseButtonClick: function(args) {
      let grid = this.$refs.grid.$el.ej2_instances[0];
      const groupedRowIndex = parseInt(textbox.value);
      const groupedRows = Array.from(
        grid.getContentTable().querySelectorAll('.e-recordplusexpand, .e-recordpluscollapse')
      );
  
      if (groupedRows.length >= 0 && groupedRowIndex < groupedRows.length) {
        this.message = '';
        const groupCaptionElement = groupedRows[groupedRowIndex];
        grid.groupModule.expandCollapseRows(groupCaptionElement);
      } else {
        this.message =
          'The entered index exceeds the total number of grouped rows. Please enter a valid grouped index.';
      }
    }
  },
  provide: {
    grid: [Group]
  }

});