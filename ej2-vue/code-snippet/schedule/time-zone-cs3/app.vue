<template>
    <div>
        <div id='app'>
            <div id='container'>
                <ejs-schedule height='550px' :selectedDate='selectedDate' :timezone='timezone'
                    :eventSettings='eventSettings'>
                    <e-views>
                        <e-view option='Day'></e-view>
                        <e-view option='Week'></e-view>
                        <e-view option='Month'></e-view>
                    </e-views>
                </ejs-schedule>
            </div>
        </div>
    </div>
</template>
<script>
import { fifaEventsData } from './datasource.js';
import { extend } from '@syncfusion/ej2-base';
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, Month } from '@syncfusion/ej2-vue-schedule';
import { Timezone } from '@syncfusion/ej2-schedule';

let timezone = new Timezone();
let data = extend([], fifaEventsData, null, true);
for (var i = 0; i < data.length; i++) {
    data[i].StartTime = timezone.removeLocalOffset(data[i].StartTime);
    data[i].EndTime = timezone.removeLocalOffset(data[i].EndTime);
}

export default {
    name: "App",
    components: {
        "ejs-schedule": ScheduleComponent,
        "e-views": ViewsDirective,
        "e-view": ViewDirective
    },
    data() {
        return {
            eventSettings: { dataSource: data },
            selectedDate: new Date(2018, 5, 17),
            timezone: 'UTC'
        }
    },
    provide: {
        schedule: [Day, Week, Month]
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
