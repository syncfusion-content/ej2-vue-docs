<template>
  <div id="app">
    <div id='container' style="margin:10px auto 0; width:250px;">
      <ejs-listbox :dataSource='groupA' sortOrder="Descending" :fields="fields"></ejs-listbox>
    </div>
  </div>
</template>
<script>
import { ListBoxComponent } from "@syncfusion/ej2-vue-dropdowns";

export default {
  name: "App",
  components: {
    "ejs-listbox": ListBoxComponent
  },
  data() {
    return {
      groupA: [
        { "Name": "Australia", "Code": "AU" },
        { "Name": "Bermuda", "Code": "BM" },
        { "Name": "Canada", "Code": "CA" },
        { "Name": "Cameroon", "Code": "CM" },
        { "Name": "Denmark", "Code": "DK" },
        { "Name": "France", "Code": "FR" },
        { "Name": "Finland", "Code": "FI" },
        { "Name": "Germany", "Code": "DE" },
        { "Name": "Hong Kong", "Code": "HK" }
      ],
      fields: { text: "Name" }
    }
  }
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
</style>
