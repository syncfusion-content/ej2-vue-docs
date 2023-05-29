

<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule height='550px' width='100%' :selectedDate='selectedDate'
      :eventSettings='eventSettings' :popupOpen='onPopupOpen'>
      </ejs-schedule>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue';
  import { scheduleData } from './datasource.js';
  import { SchedulePlugin, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-vue-schedule';

  Vue.use(SchedulePlugin);

  export default {
    data () {
      return {
        selectedDate: new Date(2018, 1, 15),
        eventSettings: { dataSource: scheduleData }
      }
    },
    methods: {
        onPopupOpen: function(args) {
            if (args.type == 'Editor') {
                let recurrenceEditorObj =
                    args.element.querySelector('.e-recurrenceeditor').ej2_instances[0];
                recurrenceEditorObj.frequencies = ['none', 'daily', 'weekly'];
            }
        }
    },
    provide: {
      schedule: [ Day, Week, WorkWeek, Month, Agenda]
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
</style>


