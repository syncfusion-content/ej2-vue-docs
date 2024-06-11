<template>
<div id="app">
        <ejs-treegrid :dataSource="data" childMapping='subtasks' :treeColumnIndex='1' height='260px'>
            <e-columns>
                <e-column field='category' headerText='Category' width=160 textAlign='Right'></e-column>
                <e-column field='units' headerText='Total Units' width=130  type='number'></e-column>
                <e-column field='unitPrice' headerText='Unit Price($)' width=110 type='number' format= 'C2' textAlign='Right'></e-column>
                <e-column field='price' headerText='Price($)' type='number' width=160 format= 'C2' textAlign='Right'></e-column>
            </e-columns>
              <e-aggregates>
                <e-aggregate>
                    <e-columns>
                        <e-column type="Sum" field="price"  format="C2" :footerTemplate='footerSum'></e-column>
                    </e-columns>
                </e-aggregate>
          </e-aggregates>
        </ejs-treegrid>
</div>
</template>
<script>

import { TreeGridComponent, Aggregate, ColumnDirective, ColumnsDirective, AggregateDirective, AggregatesDirective } from "@syncfusion/ej2-vue-treegrid";
import { summaryData } from "./datasource.js";
import { createApp } from 'vue';

const app = createApp({});

const minTemplate = app.component('minTemplate', {
    template: `<span>Min: {{data.Sum}}</span>`,
    data () {return { data: {}};}
});

export default {
name: "App",
components: {
"ejs-treegrid":TreeGridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,
"e-aggregates":AggregatesDirective,
"e-aggregate":AggregateDirective,

},

  data() {
    return {
      data: summaryData,
            footerSum: function () {
        return  { template : minTemplate
          }
      }
    };
  },
    provide: {
      treegrid: [Aggregate]
  }
}
</script>