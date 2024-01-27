

<template>
    <div id='app'>
        <div id='container'>
            <ejs-schedule height='550px' width='100%' :selectedDate='selectedDate' :rowAutoHeight='rowAutoHeight' :eventSettings='eventSettings'>
                <e-views>
                    <e-view option='TimelineYear' displayName='Horizontal Timeline Year'></e-view>
                    <e-view option='TimelineYear' displayName='Vertical Timeline Year' orientation='Vertical'></e-view>
                </e-views>
            </ejs-schedule>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { SchedulePlugin, TimelineYear } from '@syncfusion/ej2-vue-schedule';
    import { scheduleData } from './datasource.js';

    Vue.use(SchedulePlugin);

    export default {
        data () {
            return {
                selectedDate: new Date(2018, 1, 15),
                rowAutoHeight: true,
                eventSettings: { dataSource: scheduleData},
                showWeekend: false
            }
        },
        provide: {
            schedule: [TimelineYear]
        }
    }
</script>
<style>
  @import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-vue-schedule/styles/material.css";
</style>



