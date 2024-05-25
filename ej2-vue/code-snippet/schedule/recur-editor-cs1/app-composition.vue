<template>
    <div id='app'>
        <div id='container'>
            <div style='padding-bottom:15px;'>
                <label>Rule Output</label>
                <div class='rule-output-container'>
                    <div id='rule-output'>{{ selectRule }}</div>
                </div>
            </div>
            <ejs-recurrenceeditor :selectedType='selectedType' :change='onChange'></ejs-recurrenceeditor>
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue";
import { RecurrenceEditorComponent as EjsRecurrenceeditor } from '@syncfusion/ej2-vue-schedule';

const selectedType = 1;
const selectRule = ref('Select Rule');

const onChange = function (args) {
    if (args.value == "") {
        selectRule.value = 'Select Rule';
    } else {
        selectRule.value = args.value;
    }
}

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
