```vue
<template>
  <div id="app">
    <ejs-treegrid
      :dataSource="data"
      childMapping="subtasks"
      :treeColumnIndex="1"
      :allowPaging="true"
      :pageSettings="initialPage"
      :pagerTemplate="'pagerTemplate'"
    >
      <template v-slot:pagerTemplate="{ data }">
        <div class="e-pagertemplate">
          <div class="col-lg-12 control-section">
            <div class="content-wrapper">
              <ejs-numerictextbox
                format="###.##"
                :step="1"
                :min="1"
                :max="data.totalPages"
                :value="data.currentPage"
                :change="onPageChange"
                :width="200"
              ></ejs-numerictextbox>
            </div>
          </div>
          <div
            id="totalPages"
            class="e-pagertemplatemessage"
            style="margin-top: 5px; margin-left: 30px; border: none; display: inline-block"
          >
            <span class="e-pagenomsg">{{ data.currentPage }} of {{ data.totalPages }} pages ({{ data.totalRecordsCount }} items)</span>
          </div>
        </div>
      </template>
      <e-columns>
        <e-column field="taskID" headerText="Task ID" :width="90" textAlign="Right"></e-column>
        <e-column field="taskName" headerText="Task Name" :width="160" textAlign="Left"></e-column>
        <e-column field="startDate" headerText="Start Date" :width="90" textAlign="Right" format="yMd"></e-column>
        <e-column field="duration" headerText="Duration" :width="80" textAlign="Right"></e-column>
      </e-columns>
    </ejs-treegrid>
  </div>
</template>

<script>
import { TreeGridComponent, ColumnDirective, ColumnsDirective, Page } from "@syncfusion/ej2-vue-treegrid";
import { NumericTextBoxComponent } from "@syncfusion/ej2-vue-inputs";
import { sampleData } from "./data-source";

export default {
  name: "App",
  components: {
    "ejs-treegrid": TreeGridComponent,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective,
    "ejs-numerictextbox": NumericTextBoxComponent
  },
  data() {
    return {
      data: sampleData,
      initialPage: { pageSize: 5 }
    };
  },
  methods: {
    onPageChange(args) {
      this.initialPage = { currentPage: args.value };
    }
  },
  provide() {
    return {
      treegrid: [Page]
    };
  }
};
</script>

<style>
</style>
```