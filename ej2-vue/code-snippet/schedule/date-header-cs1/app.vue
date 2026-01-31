<template>
    <div id='app'>
        <div id='container'>
            <ejs-schedule height='550px' width='100%' :selectedDate='selectedDate' :eventSettings='eventSettings'
                :dateHeaderTemplate="'dateHeaderTemplate'" :cssClass='cssClass'>
                <e-views>
                    <e-view option='Day'></e-view>
                    <e-view option='Week'></e-view>
                    <e-view option='Agenda'></e-view>
                    <e-view option='TimelineWorkWeek'></e-view>
                    <e-view option='TimelineMonth'></e-view>
                </e-views>
                <template v-slot:dateHeaderTemplate="{ data }">
                    <div>
                        <div class="date-text">{{ getDateHeaderText(data.date) }}</div>
                        <div v-html=getWeather(data.date)></div>
                    </div>
                </template>
            </ejs-schedule>
        </div>
    </div>
</template>
<script>
import { Internationalization } from '@syncfusion/ej2-base';
import { scheduleData } from './datasource.js';
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, Agenda, TimelineViews, TimelineMonth } from '@syncfusion/ej2-vue-schedule';

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
            eventSettings: { dataSource: scheduleData },
            cssClass: 'schedule-date-header-template',
            selectedDate: new Date(2018, 1, 15)
        }
    },
    provide: {
        schedule: [Day, Week, Agenda, TimelineViews, TimelineMonth]
    },
    methods: {
        getDateHeaderText: function (value) {
            return instance.formatDate(value, { skeleton: 'Ed' });
        },
        getWeather: function (Date) {
            switch (Date.getDay()) {
                case 0:
                    return '<div class="weather-text">25°C</div>';
                case 1:
                    return '<div class="weather-text">18°C</div>';
                case 2:
                    return '<div class="weather-text">10°C</div>';
                case 3:
                    return '<div class="weather-text">16°C</div>';
                case 4:
                    return '<div class="weather-text">8°C</div>';
                case 5:
                    return '<div class="weather-text">27°C</div>';
                case 6:
                    return '<div class="weather-text">17°C</div>';
                default:
                    return null;
            }
        }
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-schedule/styles/tailwind3.css";
</style>
