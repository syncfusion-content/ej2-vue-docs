<template>
    <div id="app">
        <ejs-grid :dataSource='data' height='315px'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                <e-column field='Freight' headerText='Freight' textAlign='Right' width=150></e-column>
                <e-column field='OrderDate' headerText='Order Date' :template='columnTemplate' textAlign='Right' width=150></e-column>
                <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';


Vue.use(GridPlugin);

export default {
    data() {
        return {
            data: data,
            columnTemplate: function () {
                return {
                    template: Vue.component('columnTemplate', {
                        template: `<div> {{formatDate(data.OrderDate)}} </div>`,
                        methods: {
                            formatDate(date) {
                                return new Date(date).toLocaleDateString("en-US", { day: "2-digit", month: "short", year: "numeric" });
                            },
                        },
                    })
                }
            }
        };
    }
}
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>



