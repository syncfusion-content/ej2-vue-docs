import Vue from "vue";
import { GridPlugin, Edit as GridEdit, RowDD, Page } from "@syncfusion/ej2-vue-grids";
import { TreeGridPlugin, Edit as TreeGridEdit } from "@syncfusion/ej2-vue-treegrid";
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { employeeData } from "./datasource.js";
Vue.use(GridPlugin);
Vue.use(TreeGridPlugin);

new Vue({
  el: '#app',
  template: `
    <div id="app">
      <ejs-grid ref="grid" id='Grid' :dataSource='data' :allowPaging="true" :pageSettings="true"
      allowSelection="true" :allowRowDragAndDrop="true" :selectionSettings="selectionOptions"
      :rowDropSettings="srcDropOptions" :rowDrop='onRowDrop' :editSettings="gridEditSettings">
        <e-columns> 
          <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
          <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
          <e-column field='description' headerText='Description' textAlign='Left' width=180></e-column>
          <e-column field='category' headerText='Category' textAlign='Left' width=180></e-column>
          <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=120></e-column>
          <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
        </e-columns>
      </ejs-grid>
      <ejs-treegrid ref="treegrid" style="margin-top: 20px" id='TreeGrid'  childMapping='subtasks' :editSettings='treeGridEditSettings'>
        <e-columns>
          <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
          <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
          <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
          <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
        </e-columns>
      </ejs-treegrid>
    </div>
`,

data() {
  return {
    data: employeeData,
    selectionOptions: { type: 'Multiple' },
    srcDropOptions: { targetID: 'TreeGrid' },
    gridEditSettings: { allowDeleting: true },
    treeGridEditSettings: { allowAdding: true, allowEditing: true }
  };
},
methods: {
  onRowDrop(args) {
    if (args.target.closest('.e-treegrid')) {
      args.cancel = true;
      var rowIndex = !isNullOrUndefined(args.target.closest('.e-row'))
        ? args.target.closest('.e-row').rowIndex
        : 0;
      for (var i = 0; i < args.data.length; i++) {
        this.$refs.treegrid.ej2Instances.addRecord(args.data[i], rowIndex);
        this.$refs.grid.ej2Instances.deleteRecord('taskID', args.data[i]);
      }
    }
  }
},
provide: {
  grid: [RowDD, Page,  GridEdit],
  treegrid: [RowDD, Page, TreeGridEdit]
}

});