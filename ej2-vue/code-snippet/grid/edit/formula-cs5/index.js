import Vue from "vue";
import { GridPlugin, Edit, Formula } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);

new Vue({
  el: '#app',
  template: `
    <div id="app">
      <ejs-grid :dataSource="data" :editSettings="editSettings" :enableAutoFill="true" :selectionSettings="selectionSettings" height="272px">
        <e-columns>
          <e-column field="Id" headerText="ID" textAlign="Right" :isPrimaryKey="true" :validationRules="requiredRule" width="100"></e-column>
          <e-column field="Product" headerText="Product Name" :validationRules="requiredRule" width="180"></e-column>
          <e-column field="Quantity" headerText="Quantity" textAlign="Right" width="120"></e-column>
          <e-column field="Price" headerText="Price Per Unit" textAlign="Right" editType="numericedit" format="C2" width="140"></e-column>
          <e-column field="GrossAmount" headerText="Gross Amount" :allowFormula="true" :allowEditing="false" format="C2" width="150"></e-column>
          <e-column field="TaxAmount" headerText="Tax Amount" textAlign="Right" :allowFormula="true" format="C2" width="130"></e-column>
          <e-column field="TotalAmount" headerText="Total Amount" textAlign="Right" :allowFormula="true" format="C2" width="150"></e-column>
        </e-columns>
      </ejs-grid>
    </div>
  `,
  data() {
    return {
      data: data,
      requiredRule: { required: true },
      editSettings: { allowEditing: true, mode: "Cell" },
      selectionSettings: { mode: "Cell", cellSelectionMode: "Box", type: "Multiple" }
    };
  },
  provide: {
    grid: [Edit, Formula]
  }
});
