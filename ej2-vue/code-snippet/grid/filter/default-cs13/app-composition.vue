<template>
    <div id="app">
        <ejs-grid ref="grid" :dataSource="data" height="272px">
           <e-columns>
                <e-column
                field="OrderID" headerText="Order ID" textAlign="Right" width="100" isPrimaryKey="true"
                ></e-column>
                <e-column
                field="CustomerID" headerText="Customer ID" width="120"
                ></e-column>
                <e-column
                field="ShipCity" headerText="Ship City" width="100"
                ></e-column>
                <e-column
                field="ShipName" headerText="Ship Name" width="100" :template="cTemplate"
                ></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script setup>
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js'
import { createApp } from "vue";
const app = createApp();
import mitt from "mitt";
var bus = mitt();
const cTemplate = function() {
                return {
                    template: app.component("columnTemplate", {
                        template: `<button v-on:click="click(event)">button</button>`,
                        data: function () {
                            return {
                                data: {},
                            };
                        },
                        methods: {
                            click: function () {
                                bus.emit("detail", this.data.index);
                            },
                        },
                    }),
                };
            }
    const created = () => {
        bus.on("detail", (event) => {
            alert("passed value:" + event);
        });
    }
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>