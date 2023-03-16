

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
<script>
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js'
Vue.use(GridPlugin);
Vue.prototype.$eventHub = new Vue();

export default {
    data() {
        return {
            data: data,
            cTemplate: function(){
                return {
                    template: Vue.component("columnTemplate", {
                        template: `<button v-on:click="click(event)">button</button>`,
                        data: function () {
                            return {
                                data: {},
                            };
                        },
                        methods: {
                            click: function (event) {
                                this.$eventHub.$emit("detail", this.data.index);
                            },
                        },
                    }),
                };
            },
        };
    },
    created() {
        this.$eventHub.$on("detail", (event) => {
            alert("passed value:" + event);
        });
    },
};
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>


