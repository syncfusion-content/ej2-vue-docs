<template>
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;">
      <br>
      <ejs-multiselect id='multiselect' :dataSource='data' :noRecordsTemplate='noRecordsTemplate'
        placeholder="Select an item"></ejs-multiselect>
    </div>
  </div>
</template>
<script>
import { createApp } from "vue";
import { MultiSelectComponent } from "@syncfusion/ej2-vue-dropdowns";

let footerVue = createApp().component("footerTemplate", {
  template: `<span class='norecord'> NO DATA AVAILABLE</span>`,
  data() {
    return {
      data: {}
    };
  }
});

export default {
  name: "App",
  components: {
    "ejs-multiselect": MultiSelectComponent
  },
  data() {
    return {
      data: [],
      noRecordsTemplate: function (e) {
        return {
          template: footerVue
        }
      }
    }
  }
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
</style>
