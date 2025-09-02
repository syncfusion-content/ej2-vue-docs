```vue
<template>
  <div id="app">
    <ejs-treegrid
      ref="gridInstance"
      id="gridInstance"
      :toolbar="toolbar"
      :dataSource="data"
      childMapping="subtasks"
      :height="350"
      :showColumnChooser="true"
      :columnChooserSettings="columnChooserSettings"
      :treeColumnIndex="1"
      :allowPaging="true"
      clipMode="EllipsisWithTooltip"
    >
      <e-columns>
        <e-column headerText="Order Details" :columns="orderColumns" textAlign="Center"></e-column>
        <e-column headerText="Shipment Details" :columns="shipColumns" textAlign="Center"></e-column>
        <e-column headerText="Price Details" :columns="priceColumns" textAlign="Center"></e-column>
      </e-columns>

      <!-- Custom Column Chooser Template using TreeView Component -->
      <template v-slot:template="{ data }">
        <div v-if="data && data.columns && data.columns.length">
          <ejs-treeview
            id="treeview"
            :fields="dataProcess(data)"
            cssClass="no-border"
            :showCheckBox="true"
            :keyPress="nodeCheck"
            :nodeClicked="nodeCheck"
          ></ejs-treeview>
        </div>
        <div v-else class="no-record-text">No Matches Found</div>
      </template>

      <!-- Column Chooser Header Template -->
      <template v-slot:headerTemplate>
        <div>
          <span id="column-chooser-text">Column Options</span>
        </div>
      </template>

      <!-- Column Chooser Footer Template with Apply/Close Buttons -->
      <template v-slot:footerTemplate>
        <ejs-button v-on:click="columnChooserSubmit">Apply</ejs-button>
        <ejs-button v-on:click="columnChooserClose">Close</ejs-button>
      </template>
    </ejs-treegrid>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { TreeViewComponent } from "@syncfusion/ej2-vue-navigations";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { TreeGridComponent, ColumnDirective, ColumnsDirective, Page, ColumnChooser, Toolbar } from "@syncfusion/ej2-vue-treegrid";
import { stackedData } from "./datasource";

// Reactive state
const data = ref(stackedData);
const toolbar = ref(['ColumnChooser']);
const columnChooserSettings = ref({
  enableSearching: true,
  template: 'template',
  headerTemplate: 'headerTemplate',
  footerTemplate: 'footerTemplate'
});
const gridInstance = ref(null);

const orderColumns = ref([
  { field: 'orderID', headerText: 'Order ID', textAlign: 'Right', width: 90, showInColumnChooser: false },
  { field: 'orderName', headerText: 'Order Name', textAlign: 'Left', width: 180 },
  { field: 'orderDate', headerText: 'Order Date', textAlign: 'Right', format: 'yMd', width: 120 }
]);

const shipColumns = ref([
  { field: 'shipMentCategory', headerText: 'Shipment Category', textAlign: 'Left', width: 150 },
  { field: 'shippedDate', headerText: 'Shipped Date', textAlign: 'Right', format: 'yMd', width: 120 },
  { field: 'units', headerText: 'Units', textAlign: 'Right', width: 90 }
]);

const priceColumns = ref([
  { field: 'unitPrice', headerText: 'Price per unit ($)', width: 150, format: 'c2', textAlign: 'Right' },
  { field: 'price', headerText: 'Total Price ($)', width: 120, format: 'c', textAlign: 'Right' }
]);

// Handle checking/unchecking nodes in the TreeView (column chooser)
const nodeCheck = (args) => {
  const checkedNode = [args.node];
  const treeObj = document.getElementById('treeview')?.ej2_instances[0];
  if (!treeObj) return;

  if (args.event.target.classList.contains('e-fullrow') || args.event.key === "Enter") {
    const getNodeDetails = treeObj.getNode(args.node);
    if (getNodeDetails.isChecked === 'true') {
      treeObj.uncheckAll(checkedNode);
    } else {
      treeObj.checkAll(checkedNode);
    }
  }
};

// Render TreeView in the column chooser's content
const dataProcess = (args) => {
  const parentNodes = [
    { id: 1, name: 'Order Details', hasChild: true, expanded: true },
    { id: 2, name: 'Shipment Details', hasChild: true, expanded: true },
    { id: 3, name: 'Price Details', hasChild: true, expanded: true }
  ];

  let treeData = [];
  if (args.columns && args.columns.length) {
    treeData = args.columns.map((column) => {
      let parentId;
      switch (column.field) {
        case 'orderID':
        case 'orderName':
        case 'orderDate':
          parentId = 1;
          break;
        case 'shipMentCategory':
        case 'shippedDate':
        case 'units':
          parentId = 2;
          break;
        case 'unitPrice':
        case 'price':
          parentId = 3;
          break;
        default:
          break;
      }
      return {
        id: column.uid,
        name: column.headerText,
        pid: parentId,
        isChecked: column.visible
      };
    });

    const uniquePids = [];
    treeData.forEach((item) => {
      if (uniquePids.indexOf(item.pid) === -1) {
        uniquePids.push(item.pid);
      }
    });
    const filteredParents = parentNodes.filter((parent) => uniquePids.indexOf(parent.id) !== -1);
    treeData.push(...filteredParents);
  }

  return { dataSource: treeData, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' };
};

// Close the column chooser dialog
const columnChooserClose = () => {
  const gridObj = gridInstance.value?.ej2_instances[0];
  if (gridObj) {
    gridObj.grid.columnChooserModule.hideDialog();
  }
};

// Apply the column chooser selection
const columnChooserSubmit = () => {
  const checkedElements = [];
  const uncheckedElements = [];
  const gridObj = gridInstance.value?.ej2_instances[0];
  const treeObj = document.getElementById('treeview')?.ej2_instances[0];

  if (!gridObj || !treeObj) {
    gridObj?.grid.columnChooserModule.hideDialog();
    return;
  }

  const showColumns = gridObj.getVisibleColumns().filter((column) => column.showInColumnChooser === true).map((col) => col.headerText);
  const treeItems = document.querySelectorAll('.e-list-item');

  treeItems.forEach((item) => {
    const itemDetails = treeObj.getNode(item);
    if (!itemDetails.hasChildren) {
      if (item.getAttribute('aria-checked') === 'true') {
        checkedElements.push(itemDetails.text);
      } else {
        uncheckedElements.push(itemDetails.text);
      }
    }
  });

  const updatedShowColumns = showColumns.filter((col) => !uncheckedElements.includes(col));
  checkedElements.forEach((item) => {
    if (!updatedShowColumns.includes(item)) {
      updatedShowColumns.push(item);
    }
  });

  const columnsToUpdate = { visibleColumns: updatedShowColumns, hiddenColumns: uncheckedElements };
  gridObj.grid.columnChooserModule.changeColumnVisibility(columnsToUpdate);
};

// Provide dependencies
provide('treegrid', [Page, Toolbar, ColumnChooser]);
</script>
```