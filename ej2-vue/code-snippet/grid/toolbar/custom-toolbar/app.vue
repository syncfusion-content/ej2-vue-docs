<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource='data' height='270px' :toolbar='toolbar' :editSettings='editSettings'>
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

<script>
  import { GridComponent, ColumnsDirective, ColumnDirective, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
  import { AutoCompleteComponent } from '@syncfusion/ej2-vue-dropdowns';
  import { data } from './datasource.js';
  export default {
    name: "App",
    components: {
    "ejs-grid":GridComponent,
    "e-columns":ColumnsDirective,
    "e-column":ColumnDirective, 
    "ejs-autocomplete": AutoCompleteComponent
    },
    data() {
      return {
        data: data,
        dropDownData: [
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
        ],
        editSettings: {
          allowEditing: true,
          allowAdding: true,
          allowDeleting: true,
          mode: "Normal",
        },
        toolbar: [
          'Add',
          'Edit',
          'Delete',
          {
            template:'#toolbar-template', 
            align:"Left", 
            tooltipText:"Custom Component AutoComplete"
          }
        ]
      };
    },
    methods: {
      onChange: function (event) {
        const selectedCity = event.value;
        // perform search action for ShipCity column.
        this.$refs.grid.ej2Instances.search(selectedCity);
      }
    },
    provide: {
      grid: [Toolbar, Edit]
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