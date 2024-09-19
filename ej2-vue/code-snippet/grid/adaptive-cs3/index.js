
import Vue from "vue";
import { GridPlugin, Filter, Sort, Edit, Toolbar, Page, ColumnChooser, Group, ExcelExport, PdfExport } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js'
import Vue from "vue";
Vue.use(GridPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div class="e-adaptive-demo e-bigger">
      <div class="e-mobile-layout">
        <div class="e-mobile-content">
          <ejs-grid ref='grid' id='Grid' :dataSource="data" height='100%' :enableAdaptiveUI='true' :adaptiveUIMode= 'adaptiveUIMode'
            :allowPaging='true' :allowSorting='true' :allowFiltering='true' :editSettings='editSettings'
            :toolbar='toolbar' :filterSettings='filterSettings' :allowExcelExport='true' :allowPdfExport='true' 
            :allowGrouping=true :selectionSettings="selectionSettings" :showColumnChooser='true'
            :load='load' :toolbarClick="toolbarClick">
            <e-columns>
              <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' :isPrimaryKey='true' :validationRules='orderidrules'></e-column>
              <e-column field='CustomerID' headerText='Customer Name' width='160' minWidth=80 maxWidth=300 :validationRules='customeridrules'></e-column>
              <e-column field='Freight' headerText='Freight' width='150' minWidth=80 maxWidth=300 format='C2' textAlign='Right' editType='numericedit' :validationRules='freightrules'></e-column>
              <e-column field='OrderDate' headerText='Order Date' width='200' :format='dateFormat' textAlign='Right' editType='datepickeredit'></e-column>
              <e-column field='ShipCountry' headerText='Ship Country' width='150' editType='dropdownedit'></e-column>
            </e-columns>
          </ejs-grid>
        </div>
      </div>
    </div>
  </div>
`,

data() {
  return {
    data: data,
    adaptiveUIMode: 'Mobile',
    orderidrules: { required: true, number: true },
    customeridrules: { required: true },
    freightrules: { required: true },
    dateFormat: { type: 'dateTime', format: 'M/d/y hh:mm a' },
    editSettings: { allowAdding: true, allowEditing: true, allowDeleting: true, mode: 'Dialog' },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search', 'ColumnChooser', 'ExcelExport', 'PdfExport'],
    filterSettings: { type: 'Excel' },
    selectionSettings: { type: 'Multiple' },
  };
},
methods: {
  load: function () {
    this.$refs.grid.ej2Instances.adaptiveDlgTarget = document.getElementsByClassName('e-mobile-content')[0];
  },
  toolbarClick: function(args) {
    switch (args.item.id) {
      case 'Grid_pdfexport':
        this.$refs.grid.pdfExport();
        break;
      case 'Grid_excelexport':
        this.$refs.grid.excelExport();
        break;
    }
  }
},
provide: {
  grid: [Filter, Sort, Edit, Toolbar, Page, ColumnChooser, Group, ExcelExport, PdfExport]
}

});