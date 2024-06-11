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
<script setup>
import { provide } from "vue";

import { TreeGridComponent as EjsTreegrid, Aggregate, AggregateDirective as EAggregate, AggregatesDirective as EAggregates,
ColumnDirective as EColumn, ColumnsDirective as EColumns
 } from "@syncfusion/ej2-vue-treegrid";
import { summaryData } from "./datasource.js";
import { createApp } from 'vue';

const app = createApp({});

const minTemplate = app.component('minTemplate', {
    template: `<span>Min: {{data.Sum}}</span>`,
    data () {return { data: {}};}
});

const data = summaryData;

const footerSum = function () {
    return  { template : minTemplate}
};

provide('treegrid',  [Aggregate]);

</script>