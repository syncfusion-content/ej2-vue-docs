

<template>
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
</template>
<script>
import Vue from "vue";
import { GridPlugin, Aggregate } from "@syncfusion/ej2-vue-grids";
import { DataUtil } from '@syncfusion/ej2-data';
import { data } from './datasource.js';

Vue.use(GridPlugin);

export default {
  data() {
    return {
      data: data,
      footerTemp: function () {
        return  { template : Vue.component('footerTemplate', {
            template: `<span>Distinct Count: {{data.Custom}}</span>`,
            data () {return { data: {}};}
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
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-vue-buttons/styles/tailwind.css";
</style>



