<template>
  <div id="app">
    <div id="container">
      <ejs-recurrenceeditor ref="EditorObj"></ejs-recurrenceeditor>
    </div>
  </div>
</template>
<script>
import { RecurrenceEditorComponent } from "@syncfusion/ej2-vue-schedule";

export default {
  name: "App",
  components: {
    "ejs-recurrenceeditor": RecurrenceEditorComponent
  },
  mounted: function () {
    let recObject = this.$refs.EditorObj;
    recObject.setProperties({ endTypes: ["until", "count"] });
  }
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-schedule/styles/tailwind3.css";
</style>
