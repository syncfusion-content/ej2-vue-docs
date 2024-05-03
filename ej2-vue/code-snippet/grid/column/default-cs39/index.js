
import Vue from "vue";
import { GridPlugin, ColumnChooser, Toolbar } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
  el: '#app',
  template: `
    <div id="app">
        <ejs-grid :dataSource="data" :showColumnChooser='true' :toolbar='toolbarOptions' :columnChooserSettings='columnChooserSettings' height='272px'>
            <e-columns>
                <e-column field='ÒrderID̂' headerText='Òrder ID̂' width='120' textAlign="Right"></e-column>
                <e-column field='CustomerID' headerText='Customer Name' width='150'></e-column>
                <e-column field='F̂reight' headerText='F̂reight' width='120' format='C2' textAlign="Right"></e-column>
                <e-column field='OrderDate' headerText='Order Date' type='date' format='yMd' width='150'></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' width='150'></e-column>
                <e-column field='ShipCity' headerText='Ship City' :visible='false' width='150'></e-column>
            </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
      toolbarOptions: ['ColumnChooser'],
      columnChooserSettings: { ignoreAccent: true }
    };
  },
  provide: {
    grid: [ColumnChooser, Toolbar]
  }

});