<template>
  <div id="app">
   <ejs-kanban id="kanban" ref="KanbanObj" keyField="Status" :dataSource="kanbanData"
    :cardSettings="cardSettings" :actionFailure='actionFailure'>
      <e-columns>
        <e-column headerText="To Do" keyField="Open"></e-column>
        <e-column headerText="In Progress" keyField="InProgress"></e-column>
        <e-column headerText="Testing" keyField="Testing"></e-column>
        <e-column headerText="Done" keyField="Close"></e-column>
      </e-columns>
    </ejs-kanban>
  </div>
</template>


<script setup>

import { KanbanComponent as EjsKanban, ColumnDirective as EColumn, ColumnsDirective as EColumns} from '@syncfusion/ej2-vue-kanban';
import { DataManager, ODataAdaptor } from "@syncfusion/ej2-data";
import {ref} from 'vue';

const kanbanData = new DataManager({
  url: 'http://some.com/invalidUrl',
  adaptor: new ODataAdaptor()
});
const cardSettings = {
  contentField: "Summary",
  headerField: "Id"
};
const KanbanObj = ref(null);
const actionFailure = function() {
  var span = document.createElement('span');
  KanbanObj.value.ej2Instances.element.parentNode.insertBefore(span, KanbanObj.value.ej2Instances.element);
  span.style.color = '#FF0000'
  span.innerHTML = 'Server exception: 404 Not found';
};

</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-layouts/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-kanban/styles/material.css';
</style>