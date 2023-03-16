
import Vue from "vue";
import { TreeGridPlugin, Edit, CommandColumn, IRow, Column } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./datasource.js";
import { closest } from '@syncfusion/ej2-base';

Vue.use(TreeGridPlugin);


new Vue({
	el: '#app',
	template: `
<div id="app">
        <ejs-treegrid ref='treegrid' :dataSource='data' childMapping='subtasks' :treeColumnIndex='1' height='270px' :editSettings='editSettings'>
        <e-columns>
        <e-column field='taskID'  :isPrimaryKey='true'  headerText='Task ID'  width=90 textAlign='Right'></e-column>
        <e-column field='taskName' headerText='Task Name' width=180></e-column>
        <e-column field='duration' headerText='Duration' width=80  textAlign='Right'></e-column>
        <e-column  headerText='Commands' :commands='commands'  width=120></e-column>
        </e-columns>
        </ejs-treegrid>
</div>
`,

  data() {
    return {
      data: sampleData,
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true,  mode: 'Row' },
       commands: [{ buttonOption: { content: 'Details', cssClass: 'e-flat', click: this.onClick } }]
    };
  },
    provide: {
    treegrid: [ Edit, CommandColumn ]
  },
    methods: {
    onClick: function(args) {
    let rowIndex: number = (closest(args.target as Element, '.e-row')).rowIndex;
    let data: Object = this.$refs.treegrid.ej2Instances.getCurrentViewRecords();
    alert(JSON.stringify(data[rowIndex]));
    }
  }

});