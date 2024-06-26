import Vue from "vue";
import { GridPlugin,Page,Edit,Toolbar,Filter} from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
      <ejs-grid ref="grid" :dataSource='data' :allowPaging='true' :allowFiltering='true' 
        :allowSelection='true' :selectionSettings='selectionOptions' 
        :editSettings='editSettings' :toolbar='toolbar' 
        :pageSettings='pageOptions' :filterSettings='filterOptions'
        :rowDataBound='rowDataBound'>
        <e-columns>
          <e-column type='checkbox' width=120></e-column>
          <e-column field='List' headerText='List' width=120></e-column>
          <e-column field='OrderID' headerText='Order ID' isPrimaryKey='true' 
          textAlign='Right' width=150></e-column>
          <e-column field='CustomerID' headerText='Customer ID' width=150>
          </e-column>
          <e-column field='EmployeeID' headerText='Employee ID' width=150>
          </e-column>
          <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
        </e-columns>
      </ejs-grid>
    </div>
`,

data() {
  for (let i = 0; i < data.length; i++) {
    data[i]['List'] = i + 1;
  }
  return {
    data: data,
    editSettings : { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' },
    toolbar : ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'],
    selectionOptions : { type: 'Multiple', persistSelection: true },
    pageOptions : { pageSize: 5 },
    filterOptions : { type: 'CheckBox' },    
  };
},
methods:{
  rowDataBound: function (args){
      args.isSelectable = args.data.List % 5 === 0;
  }
},
  provide: {
  grid: [Page,Edit,Toolbar,Filter]
}

});