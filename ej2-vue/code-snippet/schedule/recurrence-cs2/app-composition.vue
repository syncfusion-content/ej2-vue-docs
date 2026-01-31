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
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-vue-schedule/styles/tailwind3";
</style>
