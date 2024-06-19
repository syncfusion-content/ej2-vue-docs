<template>
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:500px;">
        <br>
        <ejs-multicolumncombobox id='multicolumn' :dataSource='empData' :fields='fields' placeholder='Select an employee' :itemTemplate='itemTemplate'>
          <e-columns>
              <e-column field='EmpID' header='Employee ID' width='120'></e-column>
              <e-column field='Name' header='Name' width='100'></e-column>
              <e-column field='Designation' header='Designation' width='120'></e-column>
          </e-columns>
        </ejs-multicolumncombobox>
    </div>
  </div>
</template>

<script setup>
import { MultiColumnComboBoxComponent as EjsMulticolumncombobox } from "@syncfusion/ej2-vue-multicolumn-combobox";
import { ColumnsDirective as EColumns, ColumnDirective as EColumn } from "@syncfusion/ej2-vue-multicolumn-combobox";
const empData = [ 
    { "EmpID": 1001, "Name": "Andrew Fuller", "Designation": "Team Lead", "Country": "England" },
    { "EmpID": 1002, "Name": "Robert", "Designation": "Developer", "Country": "USA" },
    { "EmpID": 1003, "Name": "Michael", "Designation": "HR", "Country": "Russia" },
    { "EmpID": 1004, "Name": "Steven Buchanan", "Designation": "Product Manager", "Country": "Ukraine" },
    { "EmpID": 1005, "Name": "Margaret Peacock", "Designation": "Developer", "Country": "Egypt" },
    { "EmpID": 1006, "Name": "Janet Leverling", "Designation": "Team Lead", "Country": "Africa" },
    { "EmpID": 1007, "Name": "Alice", "Designation": "Product Manager", "Country": "Australia" },
    { "EmpID": 1008, "Name": "Bob", "Designation": "Developer", "Country": "India" },
    { "EmpID": 1009, "Name": "John", "Designation": "Product Manager", "Country": "Ireland"},
    { "EmpID": 1010, "Name": "Mario Pontes", "Designation": "Team Lead", "Country": "South Africa" },
    { "EmpID": 1011, "Name": "Yang Wang", "Designation": "Developer", "Country": "Russia" },
    { "EmpID": 1012, "Name": "David", "Designation": "Product Manager", "Country": "Egypt" },
    { "EmpID": 1013, "Name": "Antonio Bianchi", "Designation": "Team Lead", "Country": "USA" },
    { "EmpID": 1014, "Name": "Laura", "Designation": "Developer", "Country": "England" },
    { "EmpID": 1015, "Name": "Carlos Hernandez", "Designation": "Developer", "Country": "Canada" },
    { "EmpID": 1016, "Name": "Lily", "Designation": "Product Manager", "Country": "France" },
    { "EmpID": 1017, "Name": "Tom Williams", "Designation": "Developer", "Country": "Ukraine" },
    { "EmpID": 1018, "Name": "Grace", "Designation": "Developer", "Country": "Australia" },
    { "EmpID": 1019, "Name": "Olivia", "Designation": "Team Lead", "Country": "Ireland" },
    { "EmpID": 1020, "Name": "James", "Designation": "Developer", "Country": "China" }
];
const itemTemplate = "<tr><td class ='emp-id'>${EmpID}</td><td class='name'>${Name}</td><td class ='city'>${Designation}</td></tr>";
const fields = { text: 'Name', value: 'EmpID' };
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-grids/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-multicolumn-combobox/styles/material.css";
</style>
