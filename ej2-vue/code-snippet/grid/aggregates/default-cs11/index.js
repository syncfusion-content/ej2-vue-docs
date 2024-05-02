
import Vue from "vue";
import { GridPlugin, Aggregate } from "@syncfusion/ej2-vue-grids";
import { DataUtil } from '@syncfusion/ej2-data';
import { data } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
  el: '#app',
  template: `
    <div id="app">
        <ejs-grid :dataSource='data' height='268px'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='right' width=120></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                <e-column field='Freight' format='C2' width=150></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' width=150></e-column>
            </e-columns>
            <e-aggregates>
                <e-aggregate>
                    <e-columns>
                        <e-column columnName="ShipCountry" type="Custom" :customAggregate="customAggregateFn" :footerTemplate='footerTemp'></e-column>
                    </e-columns>
                </e-aggregate>
          </e-aggregates>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
      footerTemp: function () {
        return {
          template: Vue.component('footerTemplate', {
            template: `<span>Distinct count: {{data.Custom}}</span>`,
            data() { return { data: {} }; }
          })
        }
      }
    };
  },
  methods: {
    customAggregateFn: function () {
      const distinct = DataUtil.distinct(this.data, 'ShipCountry', true);
      return distinct.length;
    }
  },
  provide: {
    grid: [Aggregate]
  }

});