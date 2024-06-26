
import Vue from "vue";
import { TreeGridPlugin, ContextMenu, Page, TreeGridComponent  } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./datasource.js";
import { BeforeOpenCloseEventArgs } from '@syncfusion/ej2-vue-inputs';
import { MenuEventArgs } from '@syncfusion/ej2-vue-navigations';
import { getValue, isNullOrUndefined } from '@syncfusion/ej2-base';

Vue.use(TreeGridPlugin);


new Vue({
	el: '#app',
	template: `
<div id="app">
        <ejs-treegrid ref='treegrid' :dataSource='data' childMapping='subtasks' :treeColumnIndex='1' :allowPaging='true' :pageSettings='pageSettings' :contextMenuItems="contextMenuItems" :contextMenuOpen='contextMenuOpen' :contextMenuClick='contextMenuClick'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' width='90' textAlign='Right'></e-column>
                <e-column field='taskName' headerText='Task Name' width='160'></e-column>
                <e-column field='startDate' headerText='Start Date' width='90' format="yMd" textAlign='Right'></e-column>
                <e-column field='duration' headerText='Duration' width='80' textAlign='Right'></e-column>
            </e-columns>
        </ejs-treegrid>
</div>
`,

  data ()  {
    return {
      data: sampleData,
      pageSettings: { pageSize: 7 },
      contextMenuItems: [
          {text: 'Collapse the Row', target: '.e-content', id: 'collapserow'},
          {text: 'Expand the Row', target: '.e-content', id: 'expandrow'}
      ],
    };
  },
  provide: {
      treegrid: [ ContextMenu, Page ]
  },
  methods:{
      contextMenuOpen:function (arg: BeforeOpenCloseEventArgs) {
        let elem: Element = arg.event.target as Element;
        let uid = (elem.closest('.e-row') as HTMLTableRowElement).getAttribute('data-uid');
        if (isNullOrUndefined(getValue('hasChildRecords', this.$refs.treegrid.ej2Instances.grid.getRowObjectFromUID(uid).data))) {
            arg.cancel = true;
        } else {
          let flag: boolean = getValue('expanded', this.$refs.treegrid.ej2Instances.grid.getRowObjectFromUID(uid).data);
          let val: string = flag ? 'none' : 'block';
          document.querySelectorAll('li#expandrow')[0].setAttribute('style', 'display: ' + val + ';');
          val = !flag ? 'none' : 'block';
          document.querySelectorAll('li#collapserow')[0].setAttribute('style', 'display: ' + val + ';');
        }
      },
      contextMenuClick:function (args: MenuEventArgs) {
        let selectedRows = this.$refs.treegrid.getSelectedRows() as any;
        let selectedRecords = this.$refs.treegrid.getSelectedRecords() as any;
        if (args.item.id === 'collapserow') {
          this.$refs.treegrid.collapseRow(selectedRows[0] as HTMLTableRowElement, selectedRecords[0]);
        } else {
          this.$refs.treegrid.expandRow(selectedRows[0] as HTMLTableRowElement, selectedRecords[0]);
        }
      }
  }

});