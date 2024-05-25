<template>
  <div id='app'>
    <div id='container'>
      <div style='padding-bottom:15px;'>
        <label id='rule-label'>Date Collections</label>
        <div class='rule-output-container'>
          <div id='rule-output'>
            <div v-for="(date, index) in dates" :key="index">{{ date }}</div>
          </div>
        </div>
      </div>
      <ejs-recurrenceeditor id='editor' style="display: none;" ref='EditorObj' :selectedType='selectedType'>
      </ejs-recurrenceeditor>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { RecurrenceEditorComponent as EjsRecurrenceeditor } from '@syncfusion/ej2-vue-schedule';

const EditorObj = ref(null);
const selectedType = 1;
const dates = ref([]);

onMounted(function () {
  dates.value = EditorObj.value.getRecurrenceDates(new Date(2018, 0, 7, 10, 0), 'FREQ=DAILY;INTERVAL=1', '20180108T114224Z,20180110T114224Z', 4, new Date(2018, 0, 7));
  for (let index = 0; index < dates.value.length; index++) {
    dates.value[index] = new Date(dates.value[index]).toString();
  }
})

</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-calendars/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-schedule/styles/material.css';

.recurrence-editor-wrap {
  margin: 0 25%;
}

.rule-output-container {
  height: auto;
  border: 1px solid #969696;
}

#rule-output {
  padding: 8px 4px;
  text-align: center;
  min-height: 20px;
  overflow: hidden;
  overflow-wrap: break-word;
}

@media (max-width: 580px) {
  .recurrence-editor-wrap {
    margin: 0 5%;
  }
}
</style>
