<template>
    <div id="app">
        <div id="container">
            <tr>
                <td>
                    <div>
                        <ejs-button id="btn1" v-on:click="onDeleteClick">Delete</ejs-button>
                    </div>
                </td>
            </tr>
            <ejs-schedule ref='scheduleObj' id='Schedule' width="100%" height="520px" :eventSettings='eventSettings'
                :selectedDate='selectedDate'>
                <e-views>
                    <e-view option="Day"></e-view>
                    <e-view option="Week"></e-view>
                    <e-view option="WorkWeek"></e-view>
                    <e-view option="Month"></e-view>
                </e-views>
            </ejs-schedule>
        </div>
    </div>
</template>
<script>
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { ScheduleComponent, ViewDirective, ViewsDirective, Day, Week, WorkWeek, Month } from "@syncfusion/ej2-vue-schedule";

let scheduleData = [{
    Id: 3,
    Subject: 'Testing',
    StartTime: new Date(2018, 1, 11, 9, 0),
    EndTime: new Date(2018, 1, 11, 10, 0),
    IsAllDay: false
}, {
    Id: 4,
    Subject: 'Vacation',
    StartTime: new Date(2018, 1, 13, 9, 0),
    EndTime: new Date(2018, 1, 13, 10, 0),
    IsAllDay: false
}];

export default {
    name: "App",
    components: {
        "ejs-button": ButtonComponent,
        "ejs-schedule": ScheduleComponent,
        "e-views": ViewsDirective,
        "e-view": ViewDirective
    },
    data() {
        return {
            eventSettings: { dataSource: scheduleData },
            selectedDate: new Date(2018, 1, 15),
        }
    },
    provide: {
        schedule: [Day, Week, WorkWeek, Month]
    },
    methods: {
        onDeleteClick: function () {
            this.$refs.scheduleObj.deleteEvent(4);
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
</style>
