import Vue from "vue";
import { GridPlugin, Freeze,Toolbar, Edit, Page } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
import { DatePicker } from '@syncfusion/ej2-calendars';
Vue.use(GridPlugin);

new Vue({
  el: '#app',
  template: `
  <div id="app">
    <ejs-grid ref='grid' :dataSource="data" :editSettings="editSettings" :toolbar="toolbar" :frozenColumns="2" allowPaging="true" :pageSettings="pageSettings">
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90 isPrimaryKey="true"></e-column>
        <e-column field='OrderDate' headerText='Order Date' width=100 format='yMd' textAlign='Right' :edit="datePickerParams"></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=100 freeze='Left'></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
      </e-columns>
    </ejs-grid>
  </div>`,

  data() {
    return {
      data: data,
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
      pageSettings:{ pageCount: 5 },
      datePickerParams: {
        create: this.createDatePicker,
        destroy: this.destroyDatePicker,
        read: this.readDatePicker,
        write: this.writeDatePicker,
      },
    };
  },
  methods: {
    createDatePicker() {
      return document.createElement('input');
    },
    destroyDatePicker() {
      if (this.datepickerObj) {
        this.datepickerObj.destroy();
      }
    },
    readDatePicker() {
      return this.datepickerObj.value;
    },
    writeDatePicker(args) {
      this.datepickerObj = new DatePicker({
        value: new Date(args.rowData[args.column.field]),
        floatLabelType: 'Never',
      });
      this.datepickerObj.appendTo(args.element);
    },
  },
  provide: {
    grid: [Toolbar, Edit, Freeze, Page]
  }
});