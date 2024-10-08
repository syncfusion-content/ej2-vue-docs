
import Vue from "vue";
import { GridPlugin, Group } from "@syncfusion/ej2-vue-grids";
import { ChipListPlugin } from '@syncfusion/ej2-vue-buttons';
import { data } from './datasource.js';

Vue.use(ChipListPlugin);
Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
      <ejs-grid :dataSource='data' :allowGrouping='true' :groupSettings='groupOptions' :dataBound='dataBound' height='267px'>
        <e-columns>
          <e-column field='OrderID' headerText='ID' textAlign='Right' width=90></e-column>
          <e-column field='CustomerID' headerText='Name' width=100></e-column>
          <e-column field='ShipCity' headerText='City' width=100></e-column>
          <e-column field='Freight' headerText='Value' width=80></e-column>
        </e-columns>
      </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
      groupOptions: { columns: ['CustomerID'],
        captionTemplate: '<span class="groupItems"> ${key } - ${count } Records : ${headerText} </span>' }
    };
  },
  provide: {
    grid: [Group]
  }

});