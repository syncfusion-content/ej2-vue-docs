<template>
  <div id="app">
    <ejs-grid :dataSource='data' :editSettings='editSettings' :toolbar='toolbar' height='273px' :actionComplete="actionComplete">
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' width='140' textAlign='Right' isPrimaryKey='true' :validationRules='orderIDRules'></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width='140' :validationRules='customerIDRules'></e-column>
        <e-column field='Freight' headerText='Freight' width='140' format='C2' textAlign='Right' editType='numericedit' :validationRules='freightRules' ></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' width='150' :validationRules='shipCountryRules' editType='dropdownedit' ></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>
import { L10n } from '@syncfusion/ej2-base';
import { GridComponent, ColumnsDirective, ColumnDirective,Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
L10n.load({
    'en-US': {
        'grid': {
            'SaveButton': 'Submit',
            'CancelButton': 'Discard'
        }
    }
});
export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data() {
    return {
      data: data,
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
      orderIDRules : { required: true, number: true },
      customerIDRules : { required: true },
      freightRules : { required: true },
      shipCountryRules : { required: true },
    };
  },
  methods: {
    actionComplete(args) {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            let dialog = args.dialog;
            dialog.showCloseIcon = false;
            dialog.height = 300;
            dialog.width = 300;
            dialog.header = args.requestType === 'beginEdit' ? 'Edit Record of ' + args.rowData['CustomerID'] : 'New Customer';
        }
    }
  },
  provide: {
    grid: [Edit, Toolbar]
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
</style>