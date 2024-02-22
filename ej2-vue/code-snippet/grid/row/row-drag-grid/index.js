
import Vue from "vue";
import { GridPlugin, RowDD, Selection, Page } from "@syncfusion/ej2-vue-grids";
import { employeeData } from "./datasource.js";

Vue.use(GridPlugin);


new Vue({
  el: '#app',
  template: `
      <div id="app">
        <ejs-grid id='Grid' :dataSource='data' :allowRowDragAndDrop='true' :rowDropSettings='rowDropOptions' :selectionSettings='selectionOptions'>
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
            <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
            <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
          </e-columns>
        </ejs-grid>
        <ejs-grid id='DestGrid' style="margin-top: 20px" :dataSource='destGridData' :allowRowDragAndDrop='true' :rowDropSettings='destRowDropOptions' :selectionSettings='selectionOptions'>
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
            <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
            <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
          </e-columns>
        </ejs-grid>
      </div>
`,

  data() {
    return {
      data: employeeData,
      destGridData: [],
      rowDropOptions: { targetID: 'DestGrid' },
      destRowDropOptions: { targetID: 'Grid' },
      selectionOptions: { type: 'Multiple' }

    };
  },
  provide: {
    grid: [RowDD, Page, Selection]
  }

});