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
            dates: []
        }
    },
    mounted: function () {
        let recObject = this.$refs.EditorObj;
        this.dates = recObject.getRecurrenceDates(new Date(2018, 0, 7, 10, 0), 'FREQ=DAILY;INTERVAL=1', '20180108T114224Z,20180110T114224Z', 4, new Date(2018, 0, 7));
        for (let index = 0; index < this.dates.length; index++) {
            this.dates[index] = new Date(this.dates[index]).toString();
        }
    }
}
</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-calendars/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-vue-schedule/styles/material3.css';

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
