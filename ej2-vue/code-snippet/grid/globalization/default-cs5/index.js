
import Vue from "vue";
import { L10n, setCulture } from '@syncfusion/ej2-base';
import { GridPlugin, Page, Group, Edit, Toolbar, Sort, Reorder, ColumnMenu, ColumnChooser } from "@syncfusion/ej2-vue-grids";
import { SwitchPlugin } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js';
import arAELocalization from './locale.json';

L10n.load(arAELocalization);
setCulture('ar-AE');

Vue.use(GridPlugin);
Vue.use(SwitchPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div>
      <label style="padding: 10px 10px">
        Enable or disable HTML Encode
      </label>
      <ejs-switch id="switch" :change="onSwitchChange"></ejs-switch>
    </div>
    <ejs-grid ref='grid' style="padding: 10px 10px" :dataSource='data' :enableRtl='true' locale='ar-AE' 
    :allowGrouping='true' :allowPaging='true' :editSettings='editSettings' :allowFiltering='true' :allowSorting='true' :showColumnChooser='true' :showColumnMenu='true' :toolbar='toolbar' :pageSettings='pageOptions'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey='true' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
      </e-columns>
    </ejs-grid>
  </div>`,

  data() {
    return {
      data: data,
      pageOptions: { pageSize: 7 },
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'ColumnChooser']
    };
  },
  methods: {
    onSwitchChange: function(args) {
      if(args.checked){
        this.$refs.grid.enableRtl = false;
      }
      else{
        this.$refs.grid.enableRtl = true;
      }
    }
  },
  provide: {
    grid: [Page, Group, Edit, Toolbar, Sort, Reorder, ColumnMenu, ColumnChooser]
  }

});