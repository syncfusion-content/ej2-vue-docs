

<template>
<div id="app">
    <div id="wrapper1">
          <ejs-autocomplete id='autocomplete' :dataSource='itemData' placeholder='e.g Item 1' :fields='fields' :enableVirtualization='true' popupHeight="200px"></ejs-autocomplete>
    </div>
</div>
</template>
<script>
import { AutoCompleteComponent, VirtualScroll } from "@syncfusion/ej2-vue-dropdowns";
let records = [];
function dataSource() {
    for (var i = 1; i <= 150; i++) {
        var item = {};
        item.id = 'id' + i;
        item.text = "Item ".concat(i);
        var randomGroup = Math.floor(Math.random() * 4) + 1;
        switch (randomGroup) {
            case 1:
                item.group = 'Group A';
                break;
            case 2:
                item.group = 'Group B';
                break;
            case 3:
                item.group = 'Group C';
                break;
            case 4:
                item.group = 'Group D';
                break;
            default:
                break;
        }
        records.push(item);
    }
}
dataSource();

//Component registeration
export default {
    name: 'App',
    components: {
        "ejs-autocomplete": AutoCompleteComponent
    },
    data (){
        return {
            itemData: records,
            fields: { groupBy: 'group', value: 'text' }
        }
    },
    provide: {
        autocomplete: [VirtualScroll]
    }
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


