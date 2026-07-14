
import Vue from "vue";
import { GridPlugin,Toolbar, Page,Edit } from "@syncfusion/ej2-vue-grids";
import { inventoryStoreData } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
  <div id="app">
    <ejs-grid ref="grid" :dataSource="data" allowPaging="true" :editSettings="editSettings" :toolbar="toolbar">
      <e-columns>
        <e-column field="ID" headerText="ID" width="120" textAlign="Right" isPrimaryKey="true" :validationRules="idRules"></e-column>
        <e-column field="Product" headerText="Product Name" width="180" editType="dropdownedit" :edit="editParams"></e-column>
        <e-column field="VendorA" headerText="Vendor A (units)" width="160" textAlign="Right" editType="numericedit" :edit="numericEditParams"></e-column>
        <e-column field="VendorB" headerText="Vendor B (units)" width="160" textAlign="Right" editType="numericedit" :edit="numericEditParams"></e-column>
        <e-column field="VendorC" headerText="Vendor C (units)" width="160" textAlign="Right" editType="numericedit" :edit="numericEditParams"></e-column>
        <e-column field="VendorD" headerText="Vendor D (units)" width="160" textAlign="Right" editType="numericedit" :edit="numericEditParams"></e-column>
        <e-column field="UnitPrice" headerText="Price (per unit)" width="160" textAlign="Right" format="C2" editType="numericedit" :edit="numericEditParams" :validationRules="unitPriceRules"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
`,

data() {
  return {
    data: inventoryStoreData,
    idRules : { required: true, number: true },
    unitPriceRules : { required: true, min: 1 },
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch', enableUndoRedo: true },
    toolbar: ['Add', 'Delete', 'Update', 'Cancel', 'Undo', 'Redo'],
    editParams: { params: { popupHeight: "200px" } },
    numericEditParams : { params: { showSpinButton: false } },
  };
},

provide: {
  grid: [Page, Edit, Toolbar]
}

});