<template>
    <div id="app">
        <div id="wrapper1">
            <ejs-dropdownlist id='dropdownlist' :dataSource='itemData' placeholder='e.g Item 1' :fields='fields'
                :enableVirtualization='true' :allowFiltering='true' popupHeight="200px"></ejs-dropdownlist>
        </div>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { DropDownListComponent as EjsDropdownlist, VirtualScroll } from "@syncfusion/ej2-vue-dropdowns";
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

let remoteData = new DataManager({
    url: 'https://services.syncfusion.com/vue/production/api/Orders',
    adaptor: new WebApiAdaptor,
    crossDomain: true
});

const itemData = remoteData;
const fields = { text: 'OrderID', value: 'OrderID' };
const allowFiltering = true;

provide('dropdownlist', [VirtualScroll]);

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
