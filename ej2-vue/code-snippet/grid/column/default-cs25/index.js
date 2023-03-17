
import Vue from "vue";
import { GridPlugin, Sort, Group, Filter, Reorder, Edit } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-grid :dataSource='data' :allowReordering="true" :editSettings='editSettings' :allowSorting="true" :allowFiltering="true" :allowGrouping="true" height="220px">
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90 :allowGrouping="false" :allowReordering="false"></e-column>
                <e-column field='CustomerID' headerText='Customer ID' :allowEditing="false" width=120></e-column>
                <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90 :allowFiltering="false"></e-column>
                <e-column field='OrderDate' headerText='Order Date' textAlign='Right' type='date' format='yMd' width=120 :allowSorting="false"></e-column>
            </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    };
  },
  provide: {
      grid: [Sort, Group, Filter, Reorder, Edit]
  }

});