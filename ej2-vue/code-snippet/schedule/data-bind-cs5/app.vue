

<template>
    <div id='app'>
      <div id='container'>
        <ejs-schedule ref='scheduleObj' height='530px' :selectedDate='selectedDate' :eventSettings='eventSettings' :readOnly='readOnly' :actionFailure='onActionFailure'></ejs-schedule>
      </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { DataManager } from '@syncfusion/ej2-data';
    import { SchedulePlugin, Day, Week, WorkWeek, Month, Agenda, View } from '@syncfusion/ej2-vue-schedule';
    Vue.use(SchedulePlugin);

    let dataManager = new DataManager({
        url: 'http://some.com/invalidUrl'
    });
    export default {
        data() {
            return {
                selectedDate: new Date(2017, 5, 11),
                readOnly: true,
                eventSettings: { dataSource: dataManager }
            };
        },
        methods: {
            onActionFailure: function () {
                let span = document.createElement('span');
                let scheduleObj = this.$refs.scheduleObj.ej2Instances;
                scheduleObj.element.parentNode.insertBefore(span, scheduleObj.element);
                span.style.color = '#FF0000'
                span.innerHTML = 'Server exception: 404 Not found';
            }
        },
        provide: {
            schedule: [Day, Week, WorkWeek, Month, Agenda]
        }
    }
</script>
<style>
@import "https://ej2.syncfusion.com/vue/documentation/../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-schedule/styles/material.css";
</style>


