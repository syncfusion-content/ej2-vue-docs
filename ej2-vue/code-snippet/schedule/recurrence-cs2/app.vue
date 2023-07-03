<template>
  <div id="app">
    <div id="container">
      <ejs-recurrenceeditor id="editor" ref="EditorObj"></ejs-recurrenceeditor>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { RecurrenceEditorPlugin } from "@syncfusion/ej2-vue-schedule";
Vue.use(RecurrenceEditorPlugin);
export default {
  data() {
    return {};
  },
  mounted: function () {
    let recObject = this.$refs.EditorObj;
    recObject.endTypes = ["until", "count"];
  }
};
</script>
<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-calendars/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-schedule/styles/material.css";
</style>