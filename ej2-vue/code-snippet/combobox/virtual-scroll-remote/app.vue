<template>
    <div id="app">
        <div id="wrapper1">
            <ejs-combobox id='combobox' :dataSource='itemData' placeholder='e.g Item 1' :fields='fields'
                :enableVirtualization='true' :allowFiltering='true' popupHeight="200px"></ejs-combobox>
        </div>
    </div>
</template>
<script>
import { ComboBoxComponent, VirtualScroll } from "@syncfusion/ej2-vue-dropdowns";
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

const remoteData = new DataManager({
    url: 'https://services.syncfusion.com/vue/production/api/Orders',
    adaptor: new WebApiAdaptor,
    crossDomain: true
});

//Component registeration
export default {
    name: "App",
    components: {
        "ejs-combobox": ComboBoxComponent
    },
    data() {
        return {
            itemData: remoteData,
            fields: { text: 'OrderID', value: 'OrderID' },
            allowFiltering: true,
        }
    },
    provide: {
        combobox: [VirtualScroll]
    }
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
