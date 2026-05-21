
import Vue from "vue";
import { GridPlugin, Page, Sort, Filter, Edit, Toolbar } from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-grid :dataSource='data' :allowSorting='true' :allowPaging='true' :pageSettings='pageSettings' :allowFiltering='true' 
          :filterSettings='filterSettings' :editSettings='editSettings' :toolbar='toolbar'>
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' :isPrimaryKey='true' :validationRules='orderIDRules' textAlign='Right' width=90></e-column>
            <e-column field='CustomerName' headerText='Customer Name' :validationRules=' customerNameRules' width=120></e-column>
            <e-column field='OrderDate' headerText='Order Date' width='100' format='yMd' editType='datepickeredit' textAlign='Right'></e-column>
            <e-column field='Freight' headerText='Freight' format='C2' editType='numericedit' textAlign='Right' width=90></e-column>
            <e-column field='ShipCountry' headerText='Ship Country' editType='dropdownedit' width=120></e-column>
          </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
      pageSettings: { pageSize: 6 },
      filterSettings: { type: "CheckBox" },
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
      orderIDRules: {required: true, number: true},
      customerNameRules: { required: true },
    };
  },
  provide: {
    grid: [Page, Sort, Filter, Edit, Toolbar]
  }

});