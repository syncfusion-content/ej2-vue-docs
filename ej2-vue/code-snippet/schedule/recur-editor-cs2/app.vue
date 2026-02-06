<template>
  <div id='app'>
    <div id='container'>
      <div style='padding-bottom:15px;'>
        <label>Rule Output</label>
        <div class='rule-output-container'>
          <div id='rule-output'>{{ selectRule }}</div>
        </div>
      </div>
      <ejs-recurrenceeditor id='editor' ref='EditorObj' :selectedType='selectedType'
        :change='onChange'></ejs-recurrenceeditor>
    </div>
  </div>
</template>
<script>
import { RecurrenceEditorComponent } from '@syncfusion/ej2-vue-schedule';

export default {
  name: "App",
  components: {
    "ejs-recurrenceeditor": RecurrenceEditorComponent
  },
  data() {
    return {
      selectedType: 1,
      selectRule: ''
    }
  },
  mounted: function () {
    let recObject = this.$refs.EditorObj;
    recObject.setRecurrenceRule('FREQ=DAILY;INTERVAL=2;COUNT=8');
  },
  methods: {
    onChange: function (args) {
      if (args.value == "") {
        this.selectRule = 'Select Rule';
      } else {
        this.selectRule = args.value;
      }
    }
  }
}
</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3';
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3';
@import '../node_modules/@syncfusion/ej2-calendars/styles/tailwind3';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3';
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3';
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3';
@import '../node_modules/@syncfusion/ej2-vue-schedule/styles/tailwind3';

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
