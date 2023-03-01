
import Vue from "vue";
import { TreeGridPlugin, Toolbar, Edit } from "@syncfusion/ej2-vue-treegrid";
import { EmitType } from '@syncfusion/ej2-base';
import { sampleData } from "./datasource.js";
import { ClickEventArgs } from '@syncfusion/ej2-vue-navigations';

Vue.use(TreeGridPlugin);


new Vue({
	el: '#app',
	template: `
<div id="app">
        <ejs-treegrid ref='treegrid' :dataSource='data' height='220' childMapping='subtasks' :treeColumnIndex='1' :toolbar='toolbar' :toolbarClick='toolbarClick' :editSettings='editSettings'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' width='90' textAlign='Right'></e-column>
                <e-column field='taskName' headerText='Task Name' width='180'></e-column>
                <e-column field='startDate' headerText='Start Date' width='90' format="yMd" textAlign='Right'></e-column>
                <e-column field='duration' headerText='Duration' width='80' textAlign='Right'></e-column>
            </e-columns>
        </ejs-treegrid>
</div>
`,

  data ()  {
    return {
      data: sampleData,
      toolbar: ['ExpandAll', 'CollapseAll', { text: 'Click', tooltipText: 'Click', prefixIcon: 'e-time', id: 'Click' }],
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    };
  },
  methods: {
    toolbarClick: function (args: ClickEventArgs) {
      if (args.item.text === 'Click') {
        alert("Custom toolbar click...");
      }
    }
  },
  provide: {
      treegrid: [ Toolbar, Edit ]
  }

});