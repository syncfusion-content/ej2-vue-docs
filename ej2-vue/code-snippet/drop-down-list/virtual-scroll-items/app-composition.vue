<template>
    <div id="app">
        <div id="wrapper1">
            <ejs-dropdownlist id='dropdownlist' :dataSource='itemData' placeholder='e.g Item 1' :fields='fields'
                :enableVirtualization='true' :query='query' :allowFiltering='false' :actionBegin='actionBegin'
                popupHeight="200px"></ejs-dropdownlist>
        </div>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { DropDownListComponent as EjsDropdownlist, VirtualScroll } from "@syncfusion/ej2-vue-dropdowns";

let records = [];
function dataSource() {
    for (let i = 1; i <= 150; i++) {
        let item = {
            id: 'id' + i,
            text: "Item " + i,
        };
        records.push(item);
    }
}
dataSource();

const itemData = records;
const fields = { value: 'id', text: 'text' };
const allowFiltering = true;
const query = new Query().take(40);

provide('dropdownlist', [VirtualScroll]);

const actionBegin = function (e) {
    e.query = new Query().take(45);
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-notifications/styles/material.css";

#wrapper1 {
    min-width: 250px;
    float: left;
    margin-left: 350px;
}

#wrapper2 {
    min-width: 250px;
    float: right;
    margin-right: 100px;
}
</style>
