<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource="dataGrid" :editSettings="editSettings" :toolbar="toolbar" :load="load" :actionBegin="actionBegin">
      <e-columns>
        <e-column field="EmployeeID" headerText="Employee ID" textAlign="Right" isPrimaryKey="true" width="120" :validationRules="employeeIDRules"></e-column>
        <e-column field="Role" headerText="Role" width="120" editType="dropdownedit" :edit="roleParams"></e-column>
        <e-column field="Salary" headerText="Salary" textAlign="Right" editType="dropdownedit" width="160" :edit="salaryParams"></e-column>
        <e-column field="Address" headerText="Address" :validationRules="addressRules" width="160"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>
import { GridComponent, ColumnsDirective, ColumnDirective, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { Query } from '@syncfusion/ej2-data';
import { employeeDetails } from './datasource.js';

const jobRole = [
  { role: 'TeamLead' },
  { role: 'Manager' },
  { role: 'Engineer' },
  { role: 'Sales' },
  { role: 'Support' },
];

const salaryDetails = [
  { salary: 6000 },
  { salary: 17000 },
  { salary: 18000 },
  { salary: 26000 },
  { salary: 25000 },
  { salary: 40000 },
  { salary: 35000 },
  { salary: 55000 },
  { salary: 65000 },
];

export default {
  name: "App",
  components: {
    "ejs-grid": GridComponent,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective,
  },
  data() {
    return {
      dataGrid: employeeDetails,
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
      toolbar: ["Add", "Edit", "Delete", "Update", "Cancel"],
      addressRules: { required: true },
      employeeIDRules: { required: true },
      roleParams: {
        params: {
          query: new Query(),
          dataSource: jobRole,
          fields: { value: 'role', text: 'role' },
          allowFiltering: true,
          change: this.valChange.bind(this),
        },
      },
      salaryParams: {
        params: {
          query: new Query(),
          dataSource: salaryDetails,
          fields: { value: 'salary', text: 'salary' },
          allowFiltering: true,
        },
      }
    };
  },
  methods: {
    valChange(args) {
      window.role = args.value.toString();
      const formObj = this.$refs.grid.ej2Instances.editModule.formObj.element['ej2_instances'][0];

      switch (window.role) {
        case 'Sales':
          formObj.rules['Salary']['required'][1] = 'Please enter valid Sales Salary >=5000 and < 15000';
          break;
        case 'Support':
          formObj.rules['Salary']['required'][1] = 'Please enter valid Support Salary >=15000 and < 19000';
          break;
        case 'Engineer':
          formObj.rules['Salary']['required'][1] = 'Please enter valid Engineer Salary between >=25000 and < 30000';
          break;
        case 'TeamLead':
          formObj.rules['Salary']['required'][1] = 'Please enter valid TeamLead Salary >= 30000 and < 50000';
          break;
        case 'Manager':
          formObj.rules['Salary']['required'][1] = 'Please enter valid Manager Salary >=50000 and < 70000';
          break;
      }
    },
    customFn(args) {
      const formObj = this.$refs.grid.ej2Instances.editModule.formObj.element['ej2_instances'][0];
      switch (window.role) {
        case 'Sales':
          if (args.value >= 5000 && args.value < 15000) return true;
          formObj.rules['Salary']['required'][1] = 'Please enter valid Sales Salary >=5000 and < 15000';
          break;
        case 'Support':
          if (args.value >= 15000 && args.value < 19000) return true;
          formObj.rules['Salary']['required'][1] = 'Please enter valid Support Salary >=15000 and < 19000';
          break;
        case 'Engineer':
          if (args.value >= 25000 && args.value < 30000) return true;
          formObj.rules['Salary']['required'][1] = 'Please enter valid Engineer Salary between >=25000 and < 30000';
          break;
        case 'TeamLead':
          if (args.value >= 30000 && args.value < 50000) return true;
          formObj.rules['Salary']['required'][1] = 'Please enter valid TeamLead Salary >= 30000 and < 50000';
          break;
        case 'Manager':
          if (args.value >= 50000 && args.value < 70000) return true;
          formObj.rules['Salary']['required'][1] = 'Please enter valid Manager Salary >=50000 and < 70000';
          break;
      }
      return false;
    },
    load() {
      let column = this.$refs.grid.ej2Instances.getColumnByField('Salary');
      column.validationRules = {
        required: [this.customFn.bind(this), 'Please enter valid salary'],
      };
    },
    actionBegin(args) {
      if (args.requestType === 'beginEdit') {
        window.role = args.rowData.Role;
      }
    },
  },
  provide() {
    return {
      grid: [Edit, Toolbar],
    };
  }
};
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
