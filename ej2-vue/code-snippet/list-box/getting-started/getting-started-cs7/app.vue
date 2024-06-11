<template>
  <div id='container' style="margin:10px auto 0; width:250px;">
    <div class="listbox1">
      <h4>Group A</h4>
      <ejs-listbox id="listbox1" :dataSource='groupA' :allowDragAndDrop="true" :fields="fields"
        scope="combined-list"></ejs-listbox>
    </div>
    <div class="listbox2">
      <h4>Group B</h4>
      <ejs-listbox id="listbox2" :dataSource='groupB' :allowDragAndDrop="true" :fields="fields"
        scope="combined-list"></ejs-listbox>
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
      groupB: [
        { "Name": "India", "Code": "IN" },
        { "Name": "Italy", "Code": "IT" },
        { "Name": "Japan", "Code": "JP" },
        { "Name": "Mexico", "Code": "MX" },
        { "Name": "Norway", "Code": "NO" },
        { "Name": "Poland", "Code": "PL" },
        { "Name": "Switzerland", "Code": "CH" },
        { "Name": "United Kingdom", "Code": "GB" },
        { "Name": "United States", "Code": "US" }
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

.listbox1 {
  float: left;
  width: 48%;
}

.listbox2 {
  float: right;
  width: 48%;
}
</style>
