<template>
    <div id="app">
    <div id='container'>
        <table>
      <tbody>
        <tr>
          <td>
            <span id="immutableDelete"></span>
          </td>
        </tr>
        <tr>
          <td>
            <span id="normalDelete"></span>
          </td>
        </tr>
        <tr>
          <td>
            <div>
              <ejs-button cssClass="e-info" v-on:click="addTopEvent">Add row at top</ejs-button>
              <ejs-button cssClass="e-info" v-on:click="addBottomEvent">Add row at bottom</ejs-button>
              <ejs-button cssClass="e-info" v-on:click="deleteEvent">Delete 5 rows</ejs-button>
              <ejs-button cssClass="e-info" v-on:click="sortEvent">Sort Task ID</ejs-button>
              <ejs-button cssClass="e-info" v-on:click="pageEvent">Paging</ejs-button>
            </div>
          </td>
        </tr>
        <tr>
          <td>
        <span><b>Immutable TreeGrid</b></span>
        <ejs-treegrid ref="immutablegrid" :dataSource='data' childMapping='subtasks' :treeColumnIndex='1' height=350 :allowPaging='true' :pageSettings='pageSettings' :editSettings='editSettings' :selectionSettings='selectionOptions' :enableImmutableMode='true' :beforeDataBound="immutableBeforeDataBound" :dataBound="immutableDataBound">
        <e-columns>
                <e-column field='taskID' :isPrimaryKey='true' headerText='Task ID' width='90' textAlign='Right'></e-column>
                <e-column field='taskName' headerText='Task Name' width='200'></e-column>
                <e-column field='startDate' headerText='Start Date' textAlign='Right' width='90' format='yMd' type='date'></e-column>
                <e-column field='endDate' headerText='End Date' textAlign='Right' width='90' format='yMd' type='date'></e-column>
                <e-column field='duration' headerText='Duration' width='90' textAlign='Right'></e-column>
                <e-column field='priority' headerText='Priority' width='90' textAlign='Right'></e-column>
                <e-column field='approved' headerText='Approved' width='90' textAlign='Right'></e-column>
                </e-columns>
        </ejs-treegrid>
          </td>
          <td>
            <span><b>Normal TreeGrid</b></span>
        <ejs-treegrid ref="nomalgrid" :dataSource='data' childMapping='subtasks' :treeColumnIndex='1' height=350 :allowPaging='true' :pageSettings='pageSettings' :editSettings='editSettings' :selectionSettings='selectionOptions' :enableImmutableMode='true'  :beforeDataBound="beforeDataBound" :dataBound="dataBound">
        <e-columns>
                <e-column field='taskID' :isPrimaryKey='true' headerText='Task ID' width='90' textAlign='Right'></e-column>
                <e-column field='taskName' headerText='Task Name' width='200'></e-column>
                <e-column field='startDate' headerText='Start Date' textAlign='Right' width='90' format='yMd' type='date'></e-column>
                <e-column field='endDate' headerText='End Date' textAlign='Right' width='90' format='yMd' type='date'></e-column>
                <e-column field='duration' headerText='Duration' width='90' textAlign='Right'></e-column>
                <e-column field='priority' headerText='Priority' width='90' textAlign='Right'></e-column>
                <e-column field='approved' headerText='Approved' width='90' textAlign='Right'></e-column>
                </e-columns>
        </ejs-treegrid>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
</template>

<script setup>
import { provide, ref } from "vue";

import { TreeGridComponent as EjsTreegrid, Page, Edit, ColumnDirective as EColumn,
ColumnsDirective as EColumns
 } from "@syncfusion/ej2-vue-treegrid";
import { sampleData, sampleData2, dataSource1 } from "./datasource.js";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";

if(sampleData2.length == 0){
  dataSource1();
}

const normalgrid = ref(null);
const immutablegrid = ref(null);


const data = sampleData2;
const pageSettings = { pageSize: 50 };
const selectionOptions = { type: 'Multiple' };
const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Cell' };
let immutableStart = 0;
let normalStart = 0;
let immutableInit = true;
let init = true;

const addTopEvent = function () {
  let immutableInstance = immutablegrid.value;
  let instance = normalgrid.value;
  immutableInstance.addRecord(sampleData[0], 0, "Top");
  instance.addRecord(sampleData[0], 0, "Top");

};

const addBottomEvent = function () {
  let immutableInstance = immutablegrid.value;
  let instance = normalgrid.value;
  immutableInstance.addRecord(sampleData[0], 0, "Bottom");
  instance.addRecord(sampleData[0], 0, "Bottom");
};

const deleteEvent = function () {
  let immutableInstance = immutablegrid.value;
  let instance = normalgrid.value;
  immutableInstance.selectRows([0, 2, 4]);
  instance.selectRows([0, 2, 4]);
  immutableInstance.deleteRecord();
  instance.deleteRecord();

};

const sortEvent = function () {
  let immutableInstance = immutablegrid.value;
  let instance = normalgrid.value;
  let aData = immutableInstance.dataSource.reverse();
  immutableInstance.setProperties({ dataSource: aData });
  instance.setProperties({ dataSource: aData });
};

const pageEvent = function () {
  let immutableInstance = immutablegrid.value;
  let instance = normalgrid.value;
  let page = instance.ej2Instances.pageSettings.currentPage + 1;
  immutableInstance.goToPage(page);
  instance.goToPage(page);
};

const immutableBeforeDataBound = function () {
  immutableStart = new Date().getTime();
};

const immutableDataBound = function () {
  let val = immutableInit ? '' : new Date().getTime() - immutableStart;
  document.getElementById("immutableDelete").innerHTML =
    "Immutable rendering Time: " + "<b>" + val + "</b>" + "<b>ms</b>";
  immutableStart = 0; immutableInit = false;
};

const beforeDataBound = function () {
  normalStart = new Date().getTime();
};

const dataBound = function () {
  let val = init ? '' : new Date().getTime() - normalStart;
  document.getElementById("normalDelete").innerHTML =
    "Normal rendering Time: " + "<b>" + val + "</b>" + "<b>ms</b>";
  normalStart = 0; init = false;
};

provide('treegrid',  [Page, Edit]);

</script>
<style>
.e-treegrid {
  pointer-events: none;
}
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>