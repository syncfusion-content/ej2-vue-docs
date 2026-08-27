<template>
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;">
      <br>
      <ejs-multiselect id='multiselect' :dataSource='records' :fields='fields' mode='CheckBox'
        :enableVirtualization='true' :allowFiltering='true' :showDropDownIcon='true'
        :showSelectAll='true' :maximumSelectionLength='15000' :summaryTagCount='5'
        :summaryTagTemplate='summaryTagTemplate' :value='value' placeholder="Select items"></ejs-multiselect>
    </div>
  </div>
</template>
<script>
import { MultiSelectComponent, CheckBoxSelection, VirtualScroll } from "@syncfusion/ej2-vue-dropdowns";

let records = [];

for (let i = 1; i <= 15000; i++) {
    const item = {
        id: 'id' + i,
        text: 'Item ' + i,
    };
    records.push(item);
}

const value = records.map((item) => item.text);

export default {
  name: "App",
  components: {
    "ejs-multiselect": MultiSelectComponent
  },
  data() {
    return {
      records: records,
      fields: { text: 'id', value: 'text' },
      summaryTagTemplate: '${selectedCount} items selected',
      value: value
    }
  },
  provide: {
    multiselect: [CheckBoxSelection, VirtualScroll]
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
</style>
