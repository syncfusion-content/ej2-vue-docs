<template>
  <div id="app">
    <div class="filter-dropdown-container">
      <label for="filterType">Select Filter Type:</label>
      <ejs-dropdownlist
        ref="dropdownList"
        id="filterType"
        width="100px"
        :dataSource="filterTypeData"
        :fields="fields"
        :value="filterOptions.type"
        @change="onFilterTypeChange"
      ></ejs-dropdownlist>
    </div>
    <ejs-grid :key="filterOptions.type" ref="grid" :dataSource="data" :allowFiltering="true" :filterSettings="filterOptions">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="100" isPrimaryKey="true"></e-column>
        <e-column field="CustomerName" headerText="Customer Name" width="120"></e-column>
        <e-column field="OrderDate" headerText="Order Date" width="100" textAlign="Right" format="yMd"></e-column>
        <e-column field="Product" headerText="Product" width="80"></e-column>
        <e-column field="Status" headerText="Status" width="80"></e-column>
        <e-column field="Amount" headerText="Amount" width="80" textAlign="Right"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, Filter } from "@syncfusion/ej2-vue-grids";
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { ordersTrackData } from './datasource.js'
export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,
"ejs-dropdownlist":DropDownListComponent,
},
  data() {
    return {
      data: ordersTrackData,
      fields: { text: 'text', value: 'value' },
      filterTypeData: [
        { text: 'CheckBox', value: 'CheckBox' },
        { text: 'Excel', value: 'Excel' }
      ],
      filterOptions: { type: "CheckBox", mode: "Immediate" },
    };
  },
  methods: {
    onFilterTypeChange(event) {
      this.filterOptions = { ...this.filterOptions, type: event.value };
    }
  },
  provide: {
    grid: [Filter],
  },
};
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

 .filter-dropdown-container {
    display: flex;
    align-items: center;
    gap: 10px;
}

.filter-dropdown-container label {
    font-weight: 600;
}

.filter-dropdown-container .e-ddl {
    width: 150px;
    margin: 10px;
}
</style>