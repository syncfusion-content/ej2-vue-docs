import Vue from "vue";
import { GridPlugin, Page } from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { data } from './datasource.js';

Vue.use(GridPlugin);
Vue.use(ButtonPlugin);


new Vue({
  el: '#app',
  template: `
    <div id="app">
      <div style="padding: 20px 0px">
        <ejs-button @click.native="Onclick">Selected Records count</ejs-button>
      </div>
      <p id="message" > {{ showMessage }}</p>
      <div class="control-section">
        <ejs-grid ref="grid" :dataSource="data" allowPaging="true" :allowSelection="true" 
        :selectionSettings="selectionOptions">
          <e-columns>
            <e-column field="OrderID" isPrimaryKey="true" headerText="Order ID" width="120" 
            textAlign="Right"></e-column>
            <e-column field="CustomerID" headerText="Customer ID" width="100"></e-column>
            <e-column type="date" field="OrderDate" headerText="Order Date" width="130" format="yMd" 
            textAlign="Right"></e-column>
            <e-column field="Freight" headerText="Freight" width="100" format="C2" 
            textAlign="Right"></e-column>
            <e-column field="ShipCountry" headerText="Ship Country" width="130" format="yMd" ></e-column>
          </e-columns>
        </ejs-grid>
      </div>
    </div>
`,
data() {
  return {
    data: data,
    showMessage :"",
    selectionOptions : { type: 'Multiple',persistSelection: true  }
  };
},
methods: {
  Onclick() {
    var selectedRecordscount = this.$refs.grid.getSelectedRecords().length;
    this.showMessage = "Selected record count:" + selectedRecordscount ;
  }
},
provide:{
  grid:[Page]
}

});