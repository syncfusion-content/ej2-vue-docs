

<template>
    <div id="app">
        <ejs-grid :dataSource='data' height='290px' :allowPaging="true" :allowGrouping="true" :groupSettings="groupOptions">
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='right' width=120></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                <e-column field='OrderDate' headerText='Order Date' format='yMd' width=120 type='date'></e-column>
                <e-column field='Freight' format='C2' width=150></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' width=150></e-column>
            </e-columns>
            <e-aggregates>
                <e-aggregate>
                    <e-columns>
                        <e-column type="Sum" field="Freight" format="C2" :groupFooterTemplate ='footerSum'></e-column>
                    </e-columns>
                </e-aggregate>
                <e-aggregate>
                    <e-columns>
                        <e-column type="Average" field="Freight" format="C2" :groupCaptionTemplate ='footerAvg'></e-column>
                    </e-columns>
                </e-aggregate>
          </e-aggregates>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin, Group, Aggregate, Page } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);

export default {
  data() {
    return {
      data: data,
      groupOptions: {showDropArea: false, columns: ['ShipCountry'] },
      footerSum: function () {
        return  { template : Vue.component('sumTemplate', {
            template: `<span>Sum: {{data.Sum}}</span>`,
            data () {return { data: {}};}
            })
          }
      },
      footerAvg: function () {
        return  { template : Vue.component('maxTemplate', {
            template: `<span>Average: {{data.Average}}</span>`,
            data () {return { data: {}};}
            })
          }
      }
    };
  },
  provide : {
      grid: [Group, Aggregate, Page]
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


