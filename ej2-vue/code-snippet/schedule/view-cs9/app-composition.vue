<template>
    <div id='app'>
        <div id='container'>
            <ejs-schedule height='350px' width='100%' :selectedDate='selectedDate' :eventSettings='eventSettings'>
                <e-views>
                    <e-view option='Agenda' :eventTemplate="'eventTemplate'" allowVirtualScrolling=true>
                        <template v-slot:eventTemplate="{ data }">
                            <div class="template-wrap">
                                <div class="subject">{{ data.Subject }}</div>
                                <div class="time">{{ getTimeString(data.StartTime) }} - {{ getTimeString(data.EndTime)
                                    }}
                                </div>
                            </div>
                        </template>
                    </e-view>
                </e-views>
            </ejs-schedule>
        </div>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { Internationalization } from '@syncfusion/ej2-base';
import { ScheduleComponent as EjsSchedule, ViewDirective as EView, ViewsDirective as EViews, Agenda } from '@syncfusion/ej2-vue-schedule';
import { eventData } from './datasource.js';

const instance = new Internationalization();

const selectedDate = new Date(2018, 1, 15);
const eventSettings = { dataSource: eventData };

provide('schedule', [Agenda]);

const getTimeString = function (value) {
    return instance.formatDate(value, { skeleton: "hm" });
};

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