<template>
  <div id='app'>
    <div>
      <ejs-grid ref='gridInstance' id='gridInstance' :dataSource="data" :allowPaging='true' :showColumnChooser='true' :columnChooserSettings='columnChooserSettings' :toolbar='toolbar'>
        <e-columns>
          <e-column field='CustomerID' headerText='Customer ID' width='160'  textAlign='Right' :showInColumnChooser="false" :isPrimaryKey='true'></e-column>
          <e-column field='CustomerName' headerText='Name' width='100' minWidth='100'></e-column>
          <e-column headerText='Order Details' :columns='orderColumns' textAlign='Center'></e-column>
          <e-column headerText='Shipping Details' :columns='shipColumns' textAlign='Center'></e-column>
          <e-column headerText='Delivery Status' :columns='deliveryColumns' textAlign='Center'></e-column>
        </e-columns>
        <template v-slot:template="{data}">
          <div  v-if="data && data.columns && data.columns.length">
            <ejs-treeview id='treeview' :fields='dataProcess(data)' cssClass="no-border"  :enableRtl="enableRTL"  :showCheckBox='true' :keyPress='nodeCheck' :nodeClicked='nodeCheck'></ejs-treeview>
          </div>
          <div v-else class="no-record-text">No Matches Found</div>
        </template>
        <template v-slot:headerTemplate>
          <div>
            <span class="e-icons e-columns" id="column-chooser-icon"></span> 
            <span id="column-chooser-text">Column Options</span>
          </div>
        </template>
        <template v-slot:footerTemplate>
          <ejs-button v-on:click='columnChooserSubmit'>Apply</ejs-button>
          <ejs-button v-on:click='columnChooserClose'>Close</ejs-button>
        </template>
      </ejs-grid>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { provide,onMounted } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns,ColumnChooser, Toolbar,Page } from "@syncfusion/ej2-vue-grids";
import { TreeViewComponent as EjsTreeview } from "@syncfusion/ej2-vue-navigations";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import stackedHeaderData from './datasource';

const gridInstance = ref(null);
const enableRTL = ref(false);
const data = stackedHeaderData;
const toolbar = ["ColumnChooser"];
const columnChooserSettings = {
  enableSearching: true,
  template: "template",
  headerTemplate: "headerTemplate",
  footerTemplate: "footerTemplate",
};
const orderColumns = [
  { field: "OrderID", headerText: "ID", textAlign: "Right", width: 90 },
  { field: "OrderDate", headerText: "Date", textAlign: "Right", width: 110,format: "yMd"},
];
const shipColumns = [ 
  { field: "ShipCountry", headerText: "Country", textAlign: "Left", width: 115,},
  { field: "Freight", headerText: "Charges",textAlign: "Right",width: 130,format: "C2"},
];
const deliveryColumns = [
  { field: "Status", headerText: "Status", textAlign: "Center", width: 110 },
];

const dataProcess = (args) => {
  const parentNodes = [
    { id: 1, name: "Order Details", hasChild: true, expanded: true },
    { id: 2, name: "Shipping Details", hasChild: true, expanded: true },
    { id: 3, name: "Delivery Status", hasChild: true, expanded: true },
  ];
  let treeData = [];
  if (args.columns && args.columns.length) {
    treeData = args.columns.map((column) => {
      let parentId;
      switch (column.field) {
        case "OrderID":
        case "OrderDate":
          parentId = 1;
          break;
        case "ShipCountry":
        case "Freight":
          parentId = 2;
          break;
        case "Status":
          parentId = 3;
          break;
        default:
          break;
      }
      return {
        id: column.uid,
        name: column.headerText,
        pid: parentId,
        isChecked: column.visible,
      };
    });
    const uniquePids = [];
    treeData.forEach((item) => {
      if (uniquePids.indexOf(item.pid) === -1) {
        uniquePids.push(item.pid);
      }
    });
    const filteredParents = parentNodes.filter(
      (parent) => uniquePids.indexOf(parent.id) !== -1
    );
    treeData.push(...filteredParents);
  } else {
    treeData = [];
  }
  const fields = {
    dataSource: treeData,
    id: "id",
    parentID: "pid",
    text: "name",
    hasChildren: "hasChild",
  };
  return fields;
};

const nodeCheck = (args) => {
  let checkedNode = [args.node];
  var treeObj = document.getElementById("treeview").ej2_instances[0];
  if (
    args.event.target.classList.contains("e-fullrow") ||
    args.event.key == "Enter"
  ) {
    let getNodeDetails = treeObj.getNode(args.node);
    if (getNodeDetails.isChecked == "true") {
      treeObj.uncheckAll(checkedNode);
    } else {
      treeObj.checkAll(checkedNode);
    }
  }
};

const columnChooserClose = () => {
  gridInstance.value.ej2Instances.columnChooserModule.hideDialog();
};

const columnChooserSubmit = () => {
  const checkedElements = [];
  const uncheckedElements = [];
  const treeObj = document.getElementById("treeview").ej2_instances[0];

  document.querySelectorAll(".e-list-item").forEach((item) => {
    const itemDetails = treeObj.getNode(item);
    if (!itemDetails.hasChildren) {
      if (item.getAttribute("aria-checked") === "true") {
        checkedElements.push(itemDetails.text);
      } else {
        uncheckedElements.push(itemDetails.text);
      }
    }
  });

  const showColumns = gridInstance.value
    .getVisibleColumns()
    .filter((col) => col.showInColumnChooser)
    .map((col) => col.headerText)
    .filter((col) => !uncheckedElements.includes(col));

  checkedElements.forEach((item) => {
    if (!showColumns.includes(item)) {
      showColumns.push(item);
    }
  });

  gridInstance.value.ej2Instances.columnChooserModule.changeColumnVisibility({
    visibleColumns: showColumns,
    hiddenColumns: uncheckedElements,
  });
};

onMounted(() => {
  if (gridInstance.value?.ej2Instances) {
    enableRTL.value = gridInstance.value.ej2Instances.enableRtl;
  }
});
provide("grid", [ColumnChooser, Toolbar, Page]);
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