

<template>
<div id="app">
    <div id="wrapper1">
           <ejs-combobox id='combobox' :dataSource='itemData' :value='value' placeholder='e.g Item 1' :allowFiltering='false' popupHeight="200px"></ejs-combobox>
    </div>
</div>
</template>
<script>
import { ComboBoxComponent } from "@syncfusion/ej2-vue-dropdowns";
let records = [];
function dataSource() {
    records = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9", "Item 10", "Item 11", "Item 12", "Item 13", "Item 14", "Item 15"];
}
dataSource();

//Component registeration
export default {
    name: 'App',
    components: {
        "ejs-combobox": ComboBoxComponent
    },
    data (){
        return {
            itemData: records,
            fields: { value: 'id', text: 'text' },
            allowFiltering: true,
            value: "Item 6",
        }
    },
}
</script>
<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-notifications/styles/material.css";

#wrapper1{
  min-width: 250px;
    float: left;
    margin-left: 350px;
}
#wrapper2{
  min-width: 250px;
    float: right;
     margin-right: 100px;
}
</style>


