```vue
<template>
  <div id="app">
    <div>
      <ejs-treegrid
        ref="treegrid"
        id="ertTreeGrid"
        :dataSource="data"
        childMapping="subtasks"
        :treeColumnIndex="1"
        :emptyRecordTemplate="'emptyRecordTemplate'"
        :allowPaging="true"
        :allowSorting="true"
        :allowFiltering="true"
        :filterSettings="filterSettings"
        :editSettings="editSettings"
        :toolbar="toolbar"
        :actionComplete="onActionComplete"
        :dataBound="onDataBound"
      >
        <e-columns>
          <e-column
            field="taskID"
            headerText="Task ID"
            width="110"
            type="number"
            textAlign="Right"
            isPrimaryKey="true"
            :validationRules="taskidrules"
          ></e-column>
          <e-column
            field="taskName"
            headerText="Task Name"
            width="130"
            type="string"
            textAlign="Left"
            :validationRules="tasknamerules"
          ></e-column>
          <e-column
            field="priority"
            headerText="Priority"
            width="100"
            type="string"
            editType="dropdownedit"
            :edit="priorityParams"
            textAlign="Left"
          ></e-column>
          <e-column
            field="assignee"
            headerText="Assignee"
            width="100"
            type="string"
            textAlign="Left"
          ></e-column>
          <e-column
            field="status"
            headerText="Status"
            width="100"
            type="string"
            editType="dropdownedit"
            :edit="statusParams"
            textAlign="Left"
          ></e-column>
          <e-column
            field="duration"
            headerText="Duration in Days"
            width="180"
            type="number"
            editType="numericedit"
            textAlign="Right"
          ></e-column>
        </e-columns>
        <template v-slot:emptyRecordTemplate>
          <div class="emptyRecordTemplate">
            <img
              :src="`https://ej2.syncfusion.com/angular/demos/assets/grid/images/emptyRecordTemplate_light.svg`"
              class="e-emptyRecord"
              alt="No record"
            />
            <div><b>There is no data available to display at the moment.</b></div><br />
          </div>
        </template>
      </ejs-treegrid>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { TreeGridComponent, ColumnDirective, ColumnsDirective, Edit, Filter, Toolbar, Sort, Page } from "@syncfusion/ej2-vue-treegrid";

// Reactive state
const data = ref([]);
const editSettings = ref({ allowDeleting: true, allowAdding: true, allowEditing: true });
const filterSettings = ref({ type: "Menu" });
const toolbar = ref(["Add", "Update", "Cancel", "Delete", "Search"]);
const taskidrules = ref({ required: true, number: true });
const tasknamerules = ref({ required: true });
const priorityParams = ref({
  params: {
    dataSource: [
      { priority: "Low" },
      { priority: "Medium" },
      { priority: "High" },
      { priority: "Critical" }
    ]
  }
});
const statusParams = ref({
  params: {
    dataSource: [
      { status: "Open" },
      { status: "Inprogress" },
      { status: "Review-Request" },
      { status: "Review-Reject" },
      { status: "Closed" }
    ]
  }
});
const treegrid = ref(null);

// Data bound handler
const onDataBound = () => {
  const treeGridObj = treegrid.value?.ej2_instances[0];
  if (!treeGridObj) return;

  const isGridEmpty = treeGridObj.flatData.length === 0;
  if (treeGridObj.searchSettings.key === "" || treeGridObj.searchSettings.key === undefined) {
    treeGridObj.toolbarModule.enableItems([treeGridObj.element.id + "_gridcontrol_searchbar"], !isGridEmpty);
  }

  const filterMenudivs = treeGridObj.element.querySelectorAll(".e-filtermenudiv");
  filterMenudivs.forEach((div) => {
    if (isGridEmpty && treeGridObj.grid.filterSettings.columns.length === 0) {
      div.classList.add("e-disabled");
      div.style.cursor = "default";
    } else {
      div.classList.remove("e-disabled");
      div.style.removeProperty("cursor");
    }
  });
};

// Action complete handler
const onActionComplete = (args) => {
  const treeGridObj = treegrid.value?.ej2_instances[0];
  if (!treeGridObj) return;

  if (
    (args.requestType === "delete" || args.requestType === "searching") &&
    treeGridObj.flatData.length === 0 &&
    treeGridObj.searchSettings.key === ""
  ) {
    treeGridObj.toolbarModule.enableItems([treeGridObj.element.id + "_gridcontrol_searchbar"], false);
  }

  if (args.action === "clearFilter" && treeGridObj.flatData.length !== 0) {
    treeGridObj.toolbarModule.enableItems([treeGridObj.element.id + "_gridcontrol_searchbar"], true);
  }

  if (args.requestType === "filterAfterOpen" && treeGridObj.flatData.length === 0) {
    if (
      args.filterModel.filterSettings.columns.length > 0 &&
      args.filterModel.filterSettings.columns.some((col) => col.field === args.columnName)
    ) {
      args.filterModel.dlgObj.show();
    } else {
      args.filterModel.dlgObj.hide();
    }
  }
};

// Provide dependencies
provide("treegrid", [Edit, Filter, Toolbar, Sort, Page]);
</script>
```