<template>
    <div>
        <div id='app'>
            <div id='container'>
                <ejs-schedule ref='scheduleObj' height='550px' width='100%' :selectedDate='selectedDate'
                    :eventSettings='eventSettings' :created='onCreated'>
                    <e-views>
                        <e-view option='Day'></e-view>
                        <e-view option='Week'></e-view>
                        <e-view option='TimelineWorkWeek'></e-view>
                    </e-views>
                </ejs-schedule>
            </div>
        </div>
    </div>
</template>
<script>
import { scheduleData } from './datasource.js';
import { ScheduleComponent, ViewDirective, ViewsDirective, Day, Week, TimelineViews } from '@syncfusion/ej2-vue-schedule';
import { Internationalization } from '@syncfusion/ej2-base';

export default {
    name: "App",
    components: {
        "ejs-schedule": ScheduleComponent,
        "e-views": ViewsDirective,
        "e-view": ViewDirective
    },
    data() {
        return {
            selectedDate: new Date(2018, 1, 15),
            eventSettings: { dataSource: scheduleData }
        }
    },
    provide: {
        schedule: [Day, Week, TimelineViews]
    },
    methods: {
        onCreated: function () {
            let intl = new Internationalization();
            this.$refs.scheduleObj.scrollTo(intl.formatDate(new Date(), { skeleton: 'Hm' }));
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
