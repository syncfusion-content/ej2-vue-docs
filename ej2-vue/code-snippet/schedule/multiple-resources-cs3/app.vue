<template>
    <div>
        <div id='app'>
            <div id='container'>
                <ejs-schedule width='100%' height='550px' :eventSettings='eventSettings' :selectedDate='selectedDate'
                    :group='group'>
                    <e-views>
                        <e-view option='Week'></e-view>
                        <e-view option='Month'></e-view>
                        <e-view option='TimelineWeek'></e-view>
                        <e-view option='TimelineMonth'></e-view>
                    </e-views>
                    <e-resources>
                        <e-resource field='ConferenceId' title='Conference' name='Conferences'
                            :allowMultiple='allowMultiple' :dataSource='ownerDataSource' textField='text' idField='id'
                            colorField='color' startHourField='startHour' endHourField='endHour'>
                        </e-resource>
                    </e-resources>
                </ejs-schedule>
            </div>
        </div>
    </div>
</template>

<script>
import { doctorData } from './datasource.js';
import { ScheduleComponent, ViewDirective, ViewsDirective, ResourcesDirective, ResourceDirective, Week, Month, TimelineViews, TimelineMonth } from '@syncfusion/ej2-vue-schedule';

export default {
    name: "App",
    components: {
        "ejs-schedule": ScheduleComponent,
        "e-views": ViewsDirective,
        "e-view": ViewDirective,
        "e-resources": ResourcesDirective,
        "e-resource": ResourceDirective
    },
    data() {
        return {
            selectedDate: new Date(2018, 3, 4),
            group: {
                resources: ['Conferences']
            },
            allowMultiple: true,
            ownerDataSource: [
                { text: 'Will Smith', id: 1, color: '#ea7a57', startHour: '08:00', endHour: '15:00' },
                { text: 'Alice', id: 2, color: '#357cd2', startHour: '10:00', endHour: '18:00' },
                { text: 'Robson', id: 3, color: '#7fa900', startHour: '06:00', endHour: '13:00' }
            ],
            eventSettings: { dataSource: doctorData },
        }
    },
    provide: {
        schedule: [Week, Month, TimelineViews, TimelineMonth]
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-schedule/styles/material.css";
</style>
