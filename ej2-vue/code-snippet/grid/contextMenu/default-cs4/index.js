
import Vue from "vue";
import { GridPlugin, ContextMenu, Page, Edit } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-grid  ref='grid' :dataSource='data' id="gridcomp" :allowPaging='true' height='215px'
        :contextMenuItems="contextMenuItems" :editSettings='editSettings' :rowSelected='rowSelected'>
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' width='120' textAlign="Right" isPrimaryKey='true'></e-column>
            <e-column field='CustomerID' headerText='Customer Name'></e-column>
            <e-column field='Freight' headerText='Freight' format='C2' textAlign="Right" editType='numericedit'></e-column>
            <e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
        </e-columns>
    </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
      contextMenuItems: ['Copy', 'Edit', 'Delete'],
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true }
    };
  },
  methods: {
     rowSelected: function (args) {
      if (args.data.OrderID % 2 === 0) {
           this.$refs.grid.ej2Instances.contextMenuModule.contextMenu.enableItems(['Copy'], false);
       } else {
           this.$refs.grid.ej2Instances.contextMenuModule.contextMenu.enableItems(['Copy'], true);
      }
     }
  },
  provide : {
      grid: [ContextMenu, Page, Edit]
  }

});