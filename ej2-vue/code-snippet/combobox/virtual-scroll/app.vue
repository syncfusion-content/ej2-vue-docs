

<template>
<div id="app">
    <div id="wrapper1">
           <ejs-combobox id='combobox' :dataSource='itemData' placeholder='e.g Item 1' :fields='fields' :enableVirtualization='true' :allowFiltering='true' popupHeight="200px"></ejs-combobox>
    </div>
</div>
</template>
<script>
import Vue from 'vue';
import { ComboBoxPlugin } from '@syncfusion/ej2-vue-dropdowns';
import { ComboBox, VirtulScroll } from '@syncfusion/ej2-dropdowns';
ComboBox.Inject(VirtulScroll);
Vue.use(ComboBoxPlugin);
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

export default {
  name: 'app',
   data () {
    return {
      itemData: records,
      fields: { value: 'id', text: 'text' }
    }
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
    margin-left: 100px;
}
#wrapper2{
  min-width: 250px;
    float: right;
     margin-right: 100px;
}
</style>


