<template>
  <div id="app">
    <ejs-grid ref='grid' :dataSource='data' height='270px' :editSettings='editSettings' :toolbar='toolbar'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey="true" width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
      </e-columns>
    </ejs-grid>
    <div id="toolbar-template">
      <ejs-autocomplete :dataSource='dropDownData' placeholder="Search ShipCity" @change="onChange"></ejs-autocomplete>
    </div>
  </div>
</template>

<script setup>
  import { provide, ref } from "vue";
  import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
  import { AutoCompleteComponent as EjsAutocomplete } from '@syncfusion/ej2-vue-dropdowns';
  import { data } from './datasource.js';
  
  const grid = ref(null);
  const dropDownData = ref([   
    'Reims',
    'Münster',
    'Rio de Janeiro',
    'Lyon',
    'Charleroi',
    'Bern',
    'Genève',
    'San Cristóbal',
    'Graz',
    'México D.F.',
    'Albuquerque',
    'Köln'
  ]);
  const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
  const toolbar = [
    'Add', 
    'Edit',
    'Delete',
    { 
      template: '#toolbar-template', 
      align:"Left", 
      tooltipText:"Custom component AutoComplete" 
    }
  ];

  const onChange = function (event){
    const selectedCity = event.value;
    // perform search action for ShipCity column.
    grid.value.search(selectedCity);
  }
  provide('grid', [Toolbar, Edit]);
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material3.css";
</style>