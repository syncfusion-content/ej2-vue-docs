<template>
    <div id="app">
       <div style="padding: 10px 0px 20px 0px">
        <ejs-button @click="selectRows([1, 3])">
        select [1, 3] </ejs-button>
        <ejs-button  @click="selectRows([0, 2])">
        select [0, 2]</ejs-button>
        <ejs-button @click="selectRows([2, 4])">
        select [2, 4] </ejs-button>
        <ejs-button  @click="selectRows([0,5])">
        select [0,5]</ejs-button>
        <ejs-button @click="selectRows([1,6])">
        select [1,6]</ejs-button>
      </div>
      <div style="padding: 10px 0px 20px 0px">
        <ejs-button @click="selectRows([0,7,8])">
        select [0,7,8]</ejs-button>
        <ejs-button @click="selectRows([1,9,10])">
        select [1,9,10]</ejs-button>
        <ejs-button @click="selectRows([4,7,12])">
        select [4,7,12]</ejs-button>
        <ejs-button @click="selectRows([2,5,6])">
        select [2,5,6]</ejs-button>
      </div>
        <div style="padding: 20px 0px 0px 0px">
          <ejs-grid ref="grid" :dataSource="data" :selectionSettings="selectionOptions">
            <e-columns>
              <e-column field="OrderID" headerText="Order ID" textAlign="Right" 
              width="120"></e-column>
              <e-column field="CustomerID" headerText="Customer ID" width="120">
              </e-column>
              <e-column field="ShipCountry" headerText="Ship Country" width="130">
              </e-column>
              <e-column field="Freight" headerText="Freight" format="C2" width="100">
              </e-column>
            </e-columns>
          </ejs-grid>
        </div>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { data } from './datasource.js';
import { ref } from 'vue';
const grid = ref(null);
const selectionOptions = { type: 'Multiple', mode: 'Row' };
const pageOptions = { pageSize: 5 };
const selectRows = function (rowIndexes) {
  grid.value.clearRowSelection();        
  grid.value.selectRows(rowIndexes);
}
provide('grid',  [Page]);
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