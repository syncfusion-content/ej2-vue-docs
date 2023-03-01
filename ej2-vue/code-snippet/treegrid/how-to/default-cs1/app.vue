


<template>
  <div id="app">
      <ejs-treegrid :dataSource="data" :treeColumnIndex="1" height='300px' idMapping='TaskID' parentIdMapping='parentID' :allowFiltering='true' :filterSettings='filterOptions' ref="treegrid">
        <e-columns>
          <e-column field="TaskID" headerText="Task ID" :isPrimaryKey='true' width="70" :filter='filterParams' textAlign="Right"></e-column>
          <e-column field="TaskName" headerText="Task Name" width="100" ></e-column>
          <e-column field="StartDate" headerText="Start Date" format="yMd" width="100" textAlign="Right"></e-column>
          <e-column field="EndDate" headerText="End Date" width="100" format="yMd" textAlign="Right"></e-column>
          <e-column field="Duration" headerText="Duration" width="90" :filter='filterParams' textAlign="Right"></e-column>
          <e-column field="Priority" headerText="Priority" width="90" textAlign="Left"></e-column>
        </e-columns>
       </ejs-treegrid>
  </div>
</template>
<script>
import Vue from "vue";
import { TreeGridPlugin, Page, Filter } from "@syncfusion/ej2-vue-treegrid";
import { projectData } from "./datasource.js";

Vue.use(TreeGridPlugin);
export default {
  data() {
    return {
      data: projectData,
      filterOptions: {
           type: 'Menu'
      },
      filterParams: { params: {showSpinButton: false}}
    };
  },
  provide: {
    treegrid: [Page, Filter]
  }
}
</script>



