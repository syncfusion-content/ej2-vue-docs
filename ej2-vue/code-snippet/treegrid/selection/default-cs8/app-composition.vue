<template>
  <div id="app">
    <ejs-treegrid
      ref="treegrid"
      :dataSource="data"
      :height="400"
      :treeColumnIndex="1"
      childMapping="items"
      :enableVirtualization="true"
      @checkboxChange="updateFooterTotal"
      @dataBound="updateFooterTotal"
      :autoCheckHierarchy="true"
    >
      <e-columns>
        <e-column field="id" isPrimaryKey="true" :visible="false"></e-column>
        <e-column field="name" headerText="Item" width="180" showCheckbox="true"></e-column>
        <e-column field="description" headerText="Description" width="220"></e-column>
        <e-column field="quantity" headerText="Quantity" width="100" textAlign="Right"></e-column>
        <e-column field="price" headerText="Price" width="200" textAlign="Right"></e-column>
        <e-column field="status" headerText="Status" width="100"></e-column>
        <e-column field="popularity" headerText="Popularity" width="150"></e-column>
      </e-columns>
      <e-aggregates>
        <e-aggregate :showChildSummary="false">
          <e-columns>
            <e-column field="price" type="Custom" :footerTemplate="footerTemp"></e-column>
          </e-columns>
        </e-aggregate>
      </e-aggregates>
    </ejs-treegrid>
  </div>
</template>

<script setup>
import { ref, provide, onMounted } from 'vue';
import { createApp } from 'vue';
import {
  TreeGridComponent,
  VirtualScroll,
  Aggregate,
} from '@syncfusion/ej2-vue-treegrid';
import { data } from './data-source';
import { TreeGridComponent as EjsTreegrid, ColumnDirective as EColumn, ColumnsDirective as EColumns,
AggregatesDirective as EAggregates, AggregateDirective as EAggregate
} from "@syncfusion/ej2-vue-treegrid";
import { data } from './datasource';


const data = ref(data());

 const footerTemp = function () {
        return  { template : createApp({}).component('footerTemplate', {
            template: `<span class="selected-total">Total Price of Selected Rows: $0.00</span>`,
            data () {return { data: {}};}
            })
          }
      };


const treegrid = ref(null);


const updateFooterTotal = () => {
  if (!treegrid.value?.ej2Instances) return;

  const gridInstance = treegrid.value.ej2Instances;
  const checkedRecords = gridInstance.getCheckedRecords();

  const totalPrice = checkedRecords.reduce(
    (sum, rec) => sum + (parseFloat(rec.price) || 0),
    0
  );

  const footerEl = gridInstance.getFooterContent()?.querySelector('.selected-total');
  if (footerEl) {
    footerEl.innerHTML = `Total Price of Selected Rows: <strong>$${totalPrice.toFixed(2)}</strong>`;
  }
};


provide('treegrid', [VirtualScroll, Aggregate]);


onMounted(() => {
  updateFooterTotal();
});
</script>

<style scoped>
.e-treerowcell {
    height: 60px;
    font-weight: bold;
  }
</style>