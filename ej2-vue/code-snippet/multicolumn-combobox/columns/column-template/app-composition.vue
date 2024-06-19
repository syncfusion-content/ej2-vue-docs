<template>
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:500px;">
        <br>
        <ejs-multicolumncombobox id='multicolumn' :dataSource='empData' :fields='fields' placeholder='Select an employee'>
            <e-columns>
              <e-column field='Eimg' header='Photos' width='90' template='<div><img class="empImage" src="https://ej2.syncfusion.com/demos/src/multicolumn-combobox/Employees/${data.Eimg}.png" alt="employee"/> </div>'></e-column>
              <e-column field='Name' header='Employee Name' width='160' template='<div class="ename"> ${Name} </div> <div class="job"> ${Designation} </div>'></e-column>
              <e-column field='DateofJoining' header='Date of Joining' width='165' template='<div class="dateOfJoining"> ${DateofJoining} </div>'></e-column>
              <e-column field='Country' header='Country' width='100' template='<div class="country"> ${Country} </div>'></e-column>
            </e-columns>
        </ejs-multicolumncombobox>
    </div>
  </div>
</template>

<script setup>
import { MultiColumnComboBoxComponent as EjsMulticolumncombobox } from "@syncfusion/ej2-vue-multicolumn-combobox";
import { ColumnsDirective as EColumns, ColumnDirective as EColumn } from "@syncfusion/ej2-vue-multicolumn-combobox";
const empData = [ 
  { "Name": "Andrew Fuller", "Eimg": 7, "Designation": "Team Lead", "Country": "England", "DateofJoining": "12/10/2010" },
  { "Name": "Anne Dodsworth", "Eimg": 1, "Designation": "Developer", "Country": "USA", "DateofJoining": "10/05/2000" },
  { "Name": "Janet Leverling", "Eimg": 3, "Designation": "HR", "Country": "Russia", "DateofJoining": "23/02/2016" },
  { "Name": "Laura Callahan", "Eimg": 2, "Designation": "Product Manager", "Country": "Ukraine", "DateofJoining": "30/1/2012" },
  { "Name": "Margaret Peacock", "Eimg": 6, "Designation": "Developer", "Country": "Egypt", "DateofJoining": "15/08/2014" },
  { "Name": "Michael Suyama", "Eimg": 9, "Designation": "Team Lead", "Country": "Africa", "DateofJoining": "27/07/2015" },
  { "Name": "Nancy Davolio", "Eimg": 4, "Designation": "Product Manager", "Country": "Australia", "DateofJoining": "24/05/2017" },
  { "Name": "Robert King", "Eimg": 8, "Designation": "Developer ", "Country": "India", "DateofJoining": "08/09/2018" },
  { "Name": "Steven Buchanan", "Eimg": 10, "Designation": "CEO", "Country": "Ireland", "DateofJoining": "05/03/2020" }
];
const fields = { text: 'Name', value: 'Eimg' };
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-grids/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-multicolumn-combobox/styles/material.css";
</style>
