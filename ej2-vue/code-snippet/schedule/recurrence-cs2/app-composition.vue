<template>
  <div id="app">
    <div id="container">
      <ejs-recurrenceeditor ref="EditorObj"></ejs-recurrenceeditor>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { RecurrenceEditorComponent as EjsRecurrenceeditor } from "@syncfusion/ej2-vue-schedule";

const EditorObj = ref(null);
onMounted(function () {
  EditorObj.value.endTypes = ["until", "count"];
})

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/material.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-schedule/styles/material.css";
</style>
