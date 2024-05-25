<template>
    <div id="app">
        <ejs-grid ref="grid" :dataSource="data" :allowPaging="true" :pageSettings='pageSettings' :pagerTemplate='pagerTemp'>
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
            <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
            <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
          </e-columns>
        </ejs-grid>
    </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, Page } from "@syncfusion/ej2-vue-grids";
import { NumericTextBoxComponent } from "@syncfusion/ej2-vue-inputs";
import { data } from "./datasource.js";
import { createApp } from "vue";
const app = createApp();
export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,
"ejs-numerictextbox":NumericTextBoxComponent
},
  data() {
    return {
      data: data,
      pageSettings: { pageSize: 5 },
      pagerTemp: function() {
        return {
          template: app.component("pagerTemplate", {
            template: `<div class="e-pagertemplate">
                        <div class="col-lg-12 control-section">
                            <div class="content-wrapper">
                                <ejs-numerictextbox width="100" :value="value" :change='change'></ejs-numerictextbox>
                            </div>
                        </div>
                        <div id="totalPages" class="e-pagertemplatemessage"
                          style="margin-top:5px;margin-left:30px;border: none; display: inline-block ">
                              <span class="e-pagenomsg">{{this.$data.data.currentPage}} of {{this.$data.data.totalPages}} pages
                              ({{this.$data.data.totalRecordsCount}} items)</span>
                        </div>
                      </div>`,
            computed: {
              value: function() {
                return this.$data.data.currentPage;
              }
            },
            methods: {
              change: function(args) {
                let grid = this.$el.closest(".e-grid").ej2_instances[0];
                grid.goToPage(args.value);
              }
            }
          })
        };
      }
    };
  },
  provide: {
    grid: [Page]
  }
}
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";

 .e-pagertemplate {
  display: inline-block;
  overflow: hidden;
}

.control-section {
  margin-left: 20px;
  width: 25%
}

.content-wrapper {
  width: 25%;
  margin: 0 auto;
  min-width: 185px;
}

.e-float-input.e-numeric.e-input-group {
  margin-top: 12px;
  display: inline-flex;
  width: 180px;
}

@media (max-width: 1120px) {
  .e-pager .content-wrapper {
      display: inline-block
}
}
</style>