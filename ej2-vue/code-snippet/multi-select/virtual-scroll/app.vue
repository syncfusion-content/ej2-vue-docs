<template>
    <div id="app">
        <div id="wrapper1">
            <ejs-multiselect id='multiselect' :dataSource='itemData' placeholder='e.g Item 1' :fields='fields'
                :enableVirtualization='true' :allowFiltering='false' popupHeight="200px"></ejs-multiselect>
        </div>
    </div>
</template>
<script>
import { MultiSelectComponent, VirtualScroll } from "@syncfusion/ej2-vue-dropdowns";

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

//Component registeration
export default {
    name: "App",
    components: {
        "ejs-multiselect": MultiSelectComponent
    },
    data() {
        return {
            itemData: records,
            fields: { value: 'id', text: 'text' },
            allowFiltering: true,
        }
    },
    provide: {
        multiselect: [VirtualScroll]
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
