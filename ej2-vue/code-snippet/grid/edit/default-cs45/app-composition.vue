<template>
  <div id="app">
    <div>
      <ejs-button iconCss="e-icons e-play-icon" :isPrimary="true" :isToggle="true"
        @click="btnClick">Enable/Disable Grid</ejs-button>
      <div id="GridParent">
        <ejs-grid ref='Grid' :dataSource='data' :editSettings='editSettings' :toolbar='toolbar' height='273px'>
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' :isPrimaryKey='true' width=100></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
            <e-column field='Freight' headerText='Freight' textAlign='Right' editType='numericedit' width=120
              format='C2'></e-column>
            <e-column field='ShipCountry' headerText='Ship Country' editType='dropdownedit' width=150></e-column>
          </e-columns>
        </ejs-grid>
      </div>
    </div>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js';
const Grid = ref(null);
const editSettings = { allowAdding: true, allowDeleting: true, allowEditing: true };
const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
const btnClick = () => {
  if (Grid.value.$el.classList.contains('disablegrid')) {
    Grid.value.$el.classList.remove('disablegrid');
    document.getElementById("GridParent").classList.remove('wrapper');
  }
  else {
    Grid.value.$el.classList.add('disablegrid');
    document.getElementById("GridParent").classList.add('wrapper');
  }
}
provide('grid', [ Edit, Toolbar]);
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
.disablegrid {
  pointer-events: none;
  opacity: 0.4;
}
.wrapper {
  cursor: not-allowed;
}
#GridParent
{
  padding-top:20px;
}
</style>