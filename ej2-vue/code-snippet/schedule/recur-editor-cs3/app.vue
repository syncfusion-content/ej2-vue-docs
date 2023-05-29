

<template>
  <div id='app'>
    <div id='container'>
        <div style='padding-bottom:15px;'>
            <label id='rule-label'>Rule Output</label>
                <div class='rule-output-container'>
                    <div id='rule-output'></div>
                </div>
            </div>
        <ejs-recurrenceeditor id='editor' style="display: none;" ref='EditorObj' :selectedType='selectedType'>
        </ejs-recurrenceeditor>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue';
  import { RecurrenceEditorPlugin } from '@syncfusion/ej2-vue-schedule';
  import { createElement } from '@syncfusion/ej2-base';

  Vue.use(RecurrenceEditorPlugin);

  export default {
    data () {
      return {
        selectedType: 1  
      }
    },
    mounted: function () {
        let recObject = this.$refs.EditorObj;
        let outputElement = document.querySelector('#rule-output');
        let labelElement = document.querySelector('#rule-label');
        let dates = recObject.getRecurrenceDates(new Date(2018, 0, 7, 10, 0), 'FREQ=DAILY;INTERVAL=1', '20180108T114224Z,20180110T114224Z', 4, new Date(2018, 0, 7));
        labelElement.innerText = 'Date Collections';
        outputElement.innerHTML = '';
        for (let index = 0; index < dates.length; index++) {
              outputElement.appendChild(createElement('div', { innerHTML: new Date(dates[index]).toString() }));
        }
    }
  }
</script>
<style>
@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-calendars/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-vue-schedule/styles/material.css';

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


