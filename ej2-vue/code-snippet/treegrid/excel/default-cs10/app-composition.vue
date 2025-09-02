```vue
<template>
  <div class="col-lg-12 control-section">
    <div>
      <ejs-treegrid
        :dataSource="data"
        ref="treegrid"
        childMapping="subtasks"
        gridLines="Both"
        :treeColumnIndex="1"
        :allowExcelExport="true"
        :dataBound="dataBound"
        :toolbar="toolbarOptions"
        :toolbarClick="toolbarClick"
        :excelAggregateQueryCellInfo="excelAggregateQueryCellInfo"
        :height="380"
      >
        <e-columns>
          <e-column field="ID" headerText="Order ID" width="120" textAlign="Left"></e-column>
          <e-column field="Name" headerText="Shipment Name" width="230" clipMode="EllipsisWithTooltip"></e-column>
          <e-column field="shipmentDate" headerText="Shipment Date" width="150" type="date" format="yMd" textAlign="Right"></e-column>
          <e-column field="category" headerText="Category" width="220" minWidth="220"></e-column>
          <e-column field="units" headerText="Units" width="100" textAlign="Right" type="number"></e-column>
          <e-column field="unitPrice" headerText="Unit Price($)" format="c2" width="100" textAlign="Right" type="number"></e-column>
          <e-column field="price" headerText="Price($)" width="140" format="c" textAlign="Right"></e-column>
        </e-columns>
        <e-aggregates>
          <e-aggregate :showChildSummary="false">
            <e-columns>
              <e-column columnName="category" type="Custom" :customAggregate="customAggregateFn" :footerTemplate="footerTemplate"></e-column>
            </e-columns>
          </e-aggregate>
        </e-aggregates>
      </ejs-treegrid>
    </div>
  </div>
</template>

<script setup>
import { ref, h } from "vue";
import { TreeGridComponent, ColumnDirective, ColumnsDirective, AggregateDirective, AggregatesDirective, Aggregate, Page, Toolbar, ExcelExport } from "@syncfusion/ej2-vue-treegrid";
import { DropDownList } from "@syncfusion/ej2-dropdowns";
import { summaryData } from "./datasource";
import { getObject, isNullOrUndefined } from '@syncfusion/ej2-base';

// Reactive state
const data = ref(summaryData);
const selectedCategory = ref('Seafood');
const toolbarOptions = ref(['ExcelExport']);
const treegrid = ref(null);
let listObj = null;

const foods = [
  { food: 'Seafood' },
  { food: 'Dairy' },
  { food: 'Edible' },
  { food: 'Crystal' }
];

// Footer template
const FooterTemplate = () => {
  return h('span', {}, [
    'Count of ',
    h('input', { type: 'text', id: 'customers' }),
    `: ${selectedCategory.value}`
  ]);
};

const footerTemplate = FooterTemplate;

// Custom aggregate function
const customAggregateFn = (data) => {
  const sampleData = data.result ? getObject('result', data) : data;
  let countLength = 0;
  
  if (sampleData !== undefined) {
    sampleData.forEach((item) => {
      const category = getObject('category', item);
      if (category === selectedCategory.value) {
        countLength++;
      }
    });
  }
  return countLength;
};

// Data bound handler
const dataBound = () => {
  const treeGridObj = treegrid.value;
  if (!isNullOrUndefined(listObj)) {
    listObj.destroy();
  }
  listObj = new DropDownList({
    dataSource: foods,
    fields: { value: 'food' },
    placeholder: 'Select a Category',
    width: '110px',
    value: selectedCategory.value,
    change: () => {
      setTimeout(() => {
        if (listObj.value != null) {
          selectedCategory.value = listObj.value.toString();
          treeGridObj.refresh();
        }
      }, 300);
    }
  });
  listObj.appendTo('#customers');
};

// Toolbar click handler
const toolbarClick = (args) => {
  const treeGridObj = treegrid.value;
  if (args.item.text === 'Excel Export') {
    treeGridObj.excelExport();
  }
};

// Excel aggregate query cell info handler
const excelAggregateQueryCellInfo = (args) => {
  if (args.cell.column.headerText === "Category") {
    args.style.value = `Count of ${selectedCategory.value}: ${args.row.data.category.Custom}`;
  }
};

// Provide dependencies
provide('treegrid', [Aggregate, Page, Toolbar, ExcelExport]);
</script>
```
