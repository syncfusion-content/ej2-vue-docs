
import Vue from 'vue';
import { GridPlugin } from '@syncfusion/ej2-vue-grids';
import { ProgressBarPlugin } from "@syncfusion/ej2-vue-progressbar";
import { data } from './datasource.js';

Vue.use(GridPlugin);
Vue.use(ProgressBarPlugin);

new Vue({
  el: '#app',
  template: `
    <div id="app">
      <ejs-grid :dataSource="data" height="315px">
        <e-columns>
          <e-column field="OrderID" headerText="Order ID" width="150"></e-column>
          <e-column field="CustomerID" headerText="Customer Name" width="150"></e-column>
          <e-column field="Freight" headerText="Freight" width="150" :template="'columnTemplate'" >
          </e-column>
        </e-columns>
        <template v-slot:columnTemplate="{data}">
              <div>
                <ejs-progressbar id='data.OrderID' type='Linear' height='60' :value='data.Freight' trackThickness=24 progressThickness='20'
                ></ejs-progressbar>
              </div>
            </template>
      </ejs-grid>
    </div>
`,

data() {
  return {
    data: data,
  };
}

});