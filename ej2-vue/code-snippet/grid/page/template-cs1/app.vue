<template>
  <div id="app">
    <ejs-grid :dataSource="data" :allowPaging="true" :pageSettings="initialPage" :pagerTemplate="'pagerTemplate'">
      <template  v-slot:pagerTemplate="{ data}">
        <div class="e-pagertemplate">
          <div class="col-lg-12 control-section">
            <div class="content-wrapper">
              <ejs-numerictextbox
                format="###.##"
                :step="1"
                :min="1"
                :max="3"
                :value="data.currentPage"
                :change="onPageChange"
                :width="200"
              ></ejs-numerictextbox>
            </div>
          </div>
          <div id="totalPages" class="e-pagertemplatemessage" style="margin-top:5px;margin-left:30px;border:none;display:inline-block">
            <span class="e-pagenomsg">{{ data.currentPage }} of {{ data.totalPages }} pages ({{ data.totalRecordsCount }} items)</span>
          </div>
        </div>
      </template>
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" :width="120"></e-column>
        <e-column field="CustomerID" headerText="Customer ID" :width="150"></e-column>
        <e-column field="ShipCity" headerText="Ship City" :width="150"></e-column>
        <e-column field="ShipName" headerText="Ship Name" :width="150"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script>
import { GridComponent, ColumnsDirective, ColumnDirective, Page} from "@syncfusion/ej2-vue-grids";
import { NumericTextBoxComponent} from '@syncfusion/ej2-vue-inputs';
import { data } from './datasource.js';

export default {
  name: "App",
  components: {
    "ejs-grid": GridComponent,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective,
    "ejs-numerictextbox":NumericTextBoxComponent
  },
  data() {
    return {
      data: data,
      initialPage : { pageSize: 5 }
    };
  },
  methods: {
    onPageChange(args) {
      this.initialPage = { currentPage: args.value };
    }
  },
  provide() {
    return {
      grid: [Page],
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
