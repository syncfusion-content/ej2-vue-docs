<template>
        <div id="app">
                <ejs-tab id="element">
                        <e-tabitems>
                                <e-tabitem :header='datePickerText' :content="'datePickerTemplate'">
                                        <template v-slot:datePickerTemplate>
                                                <ejs-datepicker></ejs-datepicker>
                                        </template>
                                </e-tabitem>
                                <e-tabitem :header='calendarText' :content="'calendarTemplate'">
                                        <template v-slot:calendarTemplate>
                                                <ejs-calendar></ejs-calendar>
                                        </template>
                                </e-tabitem>
                        </e-tabitems>
                </ejs-tab>
        </div>
</template>
<script>
import Vue from 'vue';
import { TabPlugin } from '@syncfusion/ej2-vue-navigations';
import { DatePickerPlugin, CalendarPlugin } from '@syncfusion/ej2-vue-calendars';
Vue.use(TabPlugin);
Vue.use(DatePickerPlugin);
Vue.use(CalendarPlugin);
export default {
        name: 'app',
        data: function () {
                return {
                        datePickerText: { text: 'Datepicker' },
                        calendarText: { text: 'Calendar' },                }
        }
}
</script>
        
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-calendars/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
</style>


