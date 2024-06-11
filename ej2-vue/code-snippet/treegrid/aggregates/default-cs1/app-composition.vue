<template>
<div id="app">
        <ejs-treegrid :dataSource="data" childMapping='children' :treeColumnIndex='1' height='260px'>
            <e-columns>
                <e-column field='FreightID' headerText='Freight ID' width=90 textAlign='Right'></e-column>
                <e-column field='FreightName' headerText='Freight Name' width=180></e-column>
                <e-column field='UnitWeight' headerText='Unit Per Weight' width=90 type='number'textAlign='Right'></e-column>
                <e-column field='TotalUnits' headerText='Total Units' type='number' width=80 textAlign='Right'></e-column>
            </e-columns>
              <e-aggregates>
                <e-aggregate :showChildSummary='true'>
                    <e-columns>
                        <e-column type="Max" field="UnitWeight" :footerTemplate='footerMax'></e-column>
                        <e-column type="Min" field="TotalUnits" :footerTemplate='footerMin'></e-column>
                    </e-columns>
                </e-aggregate>
          </e-aggregates>
        </ejs-treegrid>
</div>
</template>
<script setup>
import { provide } from "vue";

import { TreeGridComponent as EjsTreegrid, Aggregate, ColumnDirective as EColumn, ColumnsDirective as EColumns,
AggregatesDirective as EAggregates, AggregateDirective as EAggregate
} from "@syncfusion/ej2-vue-treegrid";
import { summaryRowData } from "./datasource.js";
import { createApp } from 'vue';

const app = createApp({});

const minimumTemplate = app.component('minTemplate', {
    template: `<span>Min: {{data.Min}}</span>`,
    data () {return { data: {}};}
});

const maximumTemplate = app.component('maxTemplate', {
    template: `<span>Max: {{data.Max}}</span>`,
    data () {return { data: {}};}
});

const data = summaryRowData;

const footerMin = function () {
    return  { template : minimumTemplate}
};

const footerMax = function () {
    return  { template : maximumTemplate}
};

provide('treegrid',  [Aggregate]);

</script>