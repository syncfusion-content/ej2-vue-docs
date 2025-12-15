<template>
<div id="app">
  <ejs-treegrid ref="treegrid" :dataSource='data' :height = 400 :treeColumnIndex='1' childMapping='items' :enableVirtualization="true"
   @checkboxChange="updateFooterTotal" @dataBound="updateFooterTotal" :autoCheckHierarchy="true">
    <e-columns>
      <e-column field='id' isPrimaryKey="true" :visible="false"></e-column>        
      <e-column field='name' headerText='Item' width=180 showCheckbox="true"></e-column>
      <e-column field='description' headerText='Description' width=220></e-column>
      <e-column field='quantity' headerText='Quantity' width=100 textAlign='Right'></e-column>
      <e-column field='price' headerText='Price' width=300 textAlign='Right'> </e-column>
      <e-column field='status' headerText='Status' width=100></e-column>
      <e-column field='popularity' headerText='Popularity' width=150></e-column>
    </e-columns>
      <e-aggregates>
          <e-aggregate :showChildSummary='false'>
              <e-columns>
                  <e-column field="price" type="Custom" :footerTemplate='footerTemp'></e-column>
              </e-columns>
          </e-aggregate>
      </e-aggregates>
  </ejs-treegrid>
</div>
</template>
<script>

import { createApp } from 'vue';
import { TreeGridComponent, VirtualScroll, ColumnDirective, ColumnsDirective, Aggregate, AggregateDirective, AggregatesDirective } from "@syncfusion/ej2-vue-treegrid";
import { data } from "./datasource.js";

export default {
name: "App",
components: {
  "ejs-treegrid": TreeGridComponent,
  "e-columns": ColumnsDirective,
  "e-column": ColumnDirective,
  "e-aggregates": AggregatesDirective,
  "e-aggregate": AggregateDirective,
},

data() {
  return {
    data: data(),
    footerTemp: function () {
      return  { template : createApp({}).component('footerTemplate', {
          template: `<span class="selected-total">Total Price of Selected Rows: $0.00</span>`,
          data () {return { data: {}};}
          })
        }
    },  
  };
},
provide: {
  treegrid: [VirtualScroll, Aggregate]
},
methods: {
  updateFooterTotal() {
    const treegrid = this.$refs.treegrid.ej2Instances;
    const checkedRecords = treegrid.getCheckedRecords();
    const totalPrice = checkedRecords.reduce(
      (sum, rec) => sum + (parseFloat(rec.price) || 0),
      0
    );
    const footerEl = treegrid.getFooterContent().querySelector(".selected-total");
    if (footerEl) {
      footerEl.innerHTML = `Total Price of Selected Rows: <strong>$${totalPrice.toFixed(2)}</strong>`;
    }
  }
}
}
</script>

<style scoped>
.e-treerowcell {
    height: 60px;
    font-weight: bold;
  }
</style>

