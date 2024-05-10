
import Vue from "vue";
import { GridPlugin, ContextMenu, Page, Edit } from "@syncfusion/ej2-vue-grids";
import { SwitchPlugin } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js';

Vue.use(GridPlugin);
Vue.use(SwitchPlugin);

new Vue({
  el: '#app',
  template: `
  <div id="app">
    <div style="display: flex;">
      <label style="margin-right:5px">
      Show or hide context menu items
      </label>
      <ejs-switch id="switch" :change="switchChange"></ejs-switch>
    </div>
    <ejs-grid style="padding: 10px 10px" ref='grid' :dataSource='data' :allowPaging='true' height='215px'
    :contextMenuItems="contextMenuItems" :editSettings='editSettings' >
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' width='90' textAlign="Right" isPrimaryKey='true'></e-column>
        <e-column field='CustomerID' headerText='Customer Name'width='100'></e-column>
        <e-column field='Freight' headerText='Freight' format='C2' textAlign="Right" editType='numericedit' width='90'></e-column>
        <e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
      </e-columns>
    </ejs-grid>
  </div>`,

  data() {
    return {
      data: data,
      contextMenuItems: ['Copy', 'Edit', 'Delete'],
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true }
    };
  },
  methods: {
    switchChange: function (args) {
      const grid = this.$refs.grid.$el.ej2_instances[0];
      if (args.checked) {
        grid.contextMenuModule.contextMenu.hideItems([
          'Edit Record',
          'Delete Record',
        ]);
      } else {
        grid.contextMenuModule.contextMenu.showItems([
          'Edit Record',
          'Delete Record',
        ]);
      }
    },
  },
  provide: {
    grid: [ContextMenu, Page, Edit]
  }
});