<template>
    <div id='app'>
        <div id='container'>
            <ejs-schedule height='550px' width='100%' :selectedDate='selectedDate'
                :dateRangeTemplate="'dateRangeTemplate'">
                <template v-slot:dateRangeTemplate="{ data }">
                    <div class="date-text">{{ getDateRange(data.startDate) }}-{{ getDateRange(data.endDate) }}</div>
                </template>
                <e-views>
                    <e-view option='Day'></e-view>
                    <e-view option='Week'></e-view>
                    <e-view option='Agenda'></e-view>
                    <e-view option='TimelineWorkWeek'></e-view>
                    <e-view option='TimelineMonth'></e-view>
                </e-views>
            </ejs-schedule>
        </div>
    </div>
</template>
<script>

import { Internationalization } from '@syncfusion/ej2-base';
import { ScheduleComponent, ViewDirective, ViewsDirective, Day, Week, Agenda, TimelineViews, TimelineMonth } from '@syncfusion/ej2-vue-schedule';


var instance = new Internationalization();

export default {
    name: "App",
    components: {
        "ejs-schedule": ScheduleComponent,
        "e-views": ViewsDirective,
        "e-view": ViewDirective
   },
    data() {
        return {
            selectedDate: new Date(2018, 1, 15)
        }
    },
    provide: {
        schedule: [Day, Week, Agenda, TimelineViews, TimelineMonth]
    },
    methods: {
        getDateRange: function (value) {
            return instance.formatDate(value, { skeleton: 'Ed' });
        }
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-vue-schedule/styles/tailwind3";
</style>
