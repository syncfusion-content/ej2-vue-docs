
import Vue from "vue";
import { GridPlugin, Page, Selection } from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin, CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";
import { cdata } from './datasource.js';

Vue.use(GridPlugin);
Vue.use(ButtonPlugin, CheckBoxPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-button id='select' cssClass='e-flat' @click.native='select'>Selected Records</ejs-button>
        <ejs-grid ref='grid' :dataSource='data' :allowPaging='true' :pageSettings='pageSettings' :selectedRowIndex='2' :selectionSettings='selectionOptions'>
            <e-columns>
                <e-column type='checkbox' headerText='Check Box' width=50></e-column>
                <e-column field='OrderID' headerText='Order ID' :isPrimaryKey='true' textAlign='Right' width=120></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' width=130></e-column>
                <e-column field='Freight' headerText='Freight' format='C2' width=100></e-column>
            </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: cdata,
      selectionOptions: { persistSelection: true },
      pageSettings: { pageSize: 5 }
    };
  },
  methods: {
    select: function (args) {
      var gridObj = this.$refs.grid.ej2Instances;
      let selectedrecords = gridObj.getSelectedRecords(); // get the selected records.
      let selectedRecordsCount = selectedrecords.length;
      alert(selectedRecordsCount); // to alert the selected records count.
    }
  },
  provide: {
    grid: [Page, Selection]
  }

});