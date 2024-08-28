
import Vue from "vue";
import { GridPlugin, Page,Edit, Toolbar, Filter,Sort} from "@syncfusion/ej2-vue-grids";
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";

Vue.use(GridPlugin);
Vue.use(DropDownListPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div style="display: inline-block">
        <label style="padding: 10px 10px 26px 0"> Change the loading indicator type: </label>
        <ejs-dropdownlist ref="dropdown"  index="0" width="120" :dataSource="drobDownData" :fields='fields' :change="valueChange">
        </ejs-dropdownlist>
    </div>
    <ejs-grid ref="grid" style="padding: 10px 10px" :dataSource='dataGrid' :allowPaging='true'
    :allowSorting='true' :allowFiltering='true' :pageSettings='pageSettings' :loadingIndicator='loadingIndicator'>
        <e-columns>
            <e-column field='EmployeeID' headerText='Employee ID' width='130' textAlign='Right'></e-column>
            <e-column field='Employees' headerText='Employee Name' width='145'></e-column>
            <e-column field='Designation' headerText='Designation' width='130'></e-column>
            <e-column field='CurrentSalary' headerText='Current Salary' width='140' format="C2" textAlign='Right'></e-column>
        </e-columns>
    </ejs-grid>
  </div>
`,

data() {
  return {
    dataGrid : new DataManager({ url: 'https://services.syncfusion.com/vue/production/api/urldatasource', adaptor: new UrlAdaptor }),
    loadingIndicator :{ indicatorType: 'Spinner' },
    pageSettings : { pageCount: 3 },
    drobDownData: [
        { id: 'Spinner', value: 'Spinner' },
        { id: 'Shimmer', value: 'Shimmer' }
    ],
    fields: { text: 'value', value: 'id' }
  };
},
methods: {
  valueChange(args) {
    this.$refs.grid.ej2Instances.loadingIndicator.indicatorType = args.value;
    this.$refs.grid.ej2Instances.refreshColumns();
    } 
},
provide: {
  grid: [Page, Edit, Toolbar, Filter,Sort]
},

});